"use client";
import SlotForm from "./_comps/Form";
import Slot from "./_comps/Slot";
import { useEffect, useState } from "react";
import Summary from "./_comps/Summary";
import { createClient } from "@/app/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function App() {
	const [slot, setSlot] = useState<null | string>("0"); // #2025
	const [summary, setSummary] = useState<any>(null);
	const [numbers, setNumbers] = useState<any>(null);
	const router = useRouter();

	useEffect(() => {
		// Scroll to the top of the page when the component is mounted
		window.scrollTo(0, 0);
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
								router.push("/");
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
