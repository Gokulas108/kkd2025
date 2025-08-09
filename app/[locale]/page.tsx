"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
const Page = () => {
	const router = useRouter();

	return (
		<>
			<div className="mx-auto w-full h-dvh flex flex-col text-center">
				<div className="mx-auto w-full h-full flex flex-col justify-center items-center text-center">
					<div className="max-w-2xl mx-auto">
						<label className="text-gray-500 font-semibold text-center text-[9px] sm:text-xs tracking-[3px]">
							PREMA TARANGA PRESENTS
						</label>
						<Image
							src="/images/logo-wb.png"
							alt="Kirtan-Ruci-2024"
							width={245}
							height={0}
							className="mx-auto mt-4 mb-2"
						/>
						<div className="italic text-gray-900">
							27th - 28th December 2024
						</div>
					</div>
					<div className="max-w-2xl mx-auto px-4 my-12 mb-4 flex flex-col gap-8">
						<div className="w-full border-t border-gray-800 flex flex-col gap-2 py-2">
							<button
								onClick={() => router.push("/registration/terms")}
								className="flex w-full py-2 gap-2 bg-slate-800 text-white px-2 rounded justify-between text-sm items-center"
							>
								<span>Register Now</span>
								<FaArrowRight />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
