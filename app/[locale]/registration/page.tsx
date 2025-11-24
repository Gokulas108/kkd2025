"use client";
import SlotForm from "./_comps/Form";
import Slot from "./_comps/Slot";
import { useEffect, useState } from "react";
import Summary from "./_comps/Summary";
import { createClient } from "@/app/utils/supabase/client";
import { useRouter } from "next/navigation";

/**
 * Token format (simple client-side): base64(JSON.stringify({ iat, exp }))
 * - iat: issued at (ms)
 * - exp: expiry time (ms)
 *
 * NOTE: This is a client-only token scheme (easy to generate/inspect). For
 * real security, generate/verify tokens on the server with a secret.
 */

/* Utility: create a token valid for `validHours` hours from now */

/* Utility: validate token (returns true if token is present and unexpired) */
function isTokenValid(token: string | null | undefined): boolean {
	if (!token) return false;
	try {
		const decoded = JSON.parse(
			typeof window !== "undefined"
				? atob(decodeURIComponent(token))
				: Buffer.from(decodeURIComponent(token), "base64").toString("utf8")
		);
		if (!decoded || typeof decoded.exp !== "number") return false;
		return Date.now() <= decoded.exp;
	} catch (e) {
		return false;
	}
}

export default function App() {
	const [slot, setSlot] = useState<null | string>("0"); // #2025
	const [summary, setSummary] = useState<any>(null);
	const [numbers, setNumbers] = useState<any>(null);
	const [checkedToken, setCheckedToken] = useState(false);
	const [authorized, setAuthorized] = useState(false);
	const router = useRouter();

	useEffect(() => {
		// Scroll to the top of the page when the component is mounted
		window.scrollTo(0, 0);

		// Validate token from URL search params
		const params = new URLSearchParams(window.location.search);
		const token = params.get("token");
		if (isTokenValid(token)) {
			setAuthorized(true);
		} else {
			setAuthorized(false);
			// redirect away after a short delay so user can see message
			setTimeout(() => {
				router.push("/?mala=" + params.get("mala"));
			}, 1500);
		}
		setCheckedToken(true);

		// Create a supabase client on the browser with project's credentials
		const client = createClient();
		// Fetch the numbers of rows in the table 'registered-users' equal to or above 10
		const fetchData = async () => {
			try {
				const { data, error } = await client
					.from("registered_users")
					.select("slots, sevaka_type, sevaka_slots", { count: "exact" }) // Add count option
					.gte("age", 10);

				if (error) {
					throw error;
				}
				let slot_data = data || [];
				const slotCounts = { 1: 0, 2: 0, 3: 0 };
				slot_data.forEach((slot: any) => {
					if (!slot.sevaka_type) {
						slot.slots.forEach((s: number) => {
							slotCounts[s as 1 | 2 | 3] += 1;
						});
					} else if (
						slot.sevaka_type === "K" ||
						slot.sevaka_type === "S" ||
						slot.sevaka_type === "KS" ||
						slot.sevaka_type === "FS" ||
						slot.sevaka_type === "CS" ||
						slot.sevaka_type === "C"
					) {
						const sevakaSlots = slot.sevaka_slots || [];
						slot.slots.forEach((s: number) => {
							if (!sevakaSlots.includes(s) && sevakaSlots.length !== 0) {
								slotCounts[s as 1 | 2 | 3] += 1;
							}
						});
					}
				});
				setNumbers(slotCounts);
			} catch (error) {
				console.error("Error fetching data:", error);
				router.push("/error");
			}
		};

		// fetchData(); fetching data - disabled for now #2025
	}, []);

	// If token hasn't been checked yet, show loader
	if (!checkedToken) {
		return (
			<div className="h-screen w-full flex justify-center items-center">
				<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
			</div>
		);
	}

	// If checked and not authorized, show brief message (redirect will happen)
	if (!authorized) {
		return (
			<div className="h-screen w-full flex flex-col justify-center items-center">
				<p className="mb-4">Invalid or expired token. Redirecting...</p>
				<div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
			</div>
		);
	}

	// Authorized: render original registration UI
	return (
		<div className="App">
			{slot ? (
				<>
					<div className={summary ? "" : "hidden"}>
						{summary && (
							<Summary
								close={() => setSummary(null)}
								summary={summary}
								slot={slot}
							/>
						)}
					</div>
					<div className={summary ? "hidden" : ""}>
						<SlotForm
							close={() => {
								// setSlot(null);
								// #2025
								router.push(
									"/?mala=" +
										(typeof window !== "undefined"
											? new URLSearchParams(window.location.search).get("mala")
											: "")
								);
							}}
							setSummary={setSummary}
						/>
					</div>
				</>
			) : (
				<>
					{numbers ? (
						<Slot slotNumbers={numbers} setSS={setSlot} />
					) : (
						<div className="h-screen w-full flex justify-center items-center">
							{/* big spinner */}
							<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
						</div>
					)}
				</>
			)}
		</div>
	);
}
