"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowRight, FaSpinner } from "react-icons/fa";

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

const Page = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [tokenValid, setTokenValid] = useState<boolean | null>(null);
	const params = useSearchParams();

	// get param mala from url
	const searchParams = useSearchParams();
	const mala = searchParams.get("mala");

	useEffect(() => {
		if (!mala || !["nimai", "nitai", "vaijayanthi", "tulasi"].includes(mala)) {
			router.push("/error");
		}

		// Validate token from URL search params
		const token = searchParams.get("token");

		if (isTokenValid(token)) {
			setTokenValid(true);
		} else {
			setTokenValid(false);
		}
	}, [mala, router]);

	const handleRegisterClick = () => {
		setLoading(true);
		router.push("/registration?mala=" + mala + "&token=" + params.get("token"));
	};

	const malaNameMapping: { [key: string]: string } = {
		nimai: "Nimai mala",
		nitai: "Nitai mala",
		vaijayanthi: "Vaijayanthi mala",
		tulasi: "Tulasi mala",
	};

	const dateMapping: { [key: string]: string } = {
		nimai: "12th December 2025",
		nitai: "19th December 2025",
		vaijayanthi: "5th December 2025",
		tulasi: "26th December 2025",
	};

	if (!mala || !["nimai", "nitai", "vaijayanthi", "tulasi"].includes(mala)) {
		return null; // render nothing while redirecting
	}

	return (
		<>
			<div className="mx-auto w-full h-dvh flex flex-col text-center">
				<div className="mx-auto w-full h-full flex flex-col justify-center items-center text-center">
					<div className="max-w-2xl mx-auto">
						<label className="text-orange-400 font-semibold text-center text-[9px] sm:text-xs tracking-[3px]">
							KKD PRESENTS
						</label>
						<Image
							src="/images/DDKFestLogo.jpeg"
							alt="DDK-Fest-2025"
							width={245}
							height={0}
							className="mx-auto"
						/>
						<h1 className="text-3xl text-orange-600 sm:text-4xl md:text-5xl font-bold">
							DDK Fest 2025
						</h1>
						<div className="text-slate-600 text-lg sm:text-xl md:text-2xl font-semibold mt-2">
							{malaNameMapping[mala]}
						</div>
						{/* date based on mala */}
						<div className="italic text-slate-900">{dateMapping[mala]}</div>
					</div>
					<div className="max-w-2xl mx-auto px-4 my-12 mb-4 flex flex-col gap-8">
						<div className="w-full border-t border-orange-800 flex flex-col gap-2 py-2">
							{tokenValid ? (
								<button
									onClick={handleRegisterClick}
									disabled={loading}
									className="flex w-full py-2 gap-2 bg-orange-600 text-white px-2 rounded justify-between text-sm items-center"
								>
									<span>Register Now</span>
									{loading ? (
										<FaSpinner className="animate-spin" />
									) : (
										<FaArrowRight />
									)}
								</button>
							) : (
								<div className="text-red-600 font-semibold">
									Registration closed. See you at the event.
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
