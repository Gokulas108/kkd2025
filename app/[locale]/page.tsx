"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowRight, FaSpinner } from "react-icons/fa";
const Page = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const handleRegisterClick = () => {
		setLoading(true);
		router.push("/registration");
	};

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
						<div className="italic text-slate-900">
							27th - 28th December 2024
						</div>
					</div>
					<div className="max-w-2xl mx-auto px-4 my-12 mb-4 flex flex-col gap-8">
						<div className="w-full border-t border-orange-800 flex flex-col gap-2 py-2">
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
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
