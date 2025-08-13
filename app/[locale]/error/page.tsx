"use client";
import React from "react";
import { MdArrowBack, MdError } from "react-icons/md";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ChangeLang from "@/app/_components/ChangeLang";

const Page = () => {
	const router = useRouter();
	return (
		<div className="flex flex-col items-center justify-start gap-3 h-screen">
			<div className="w-full mx-auto grid grid-cols-3 bg-orange-600">
				<button
					className="text-slate-100 px-4 col-start-1"
					type="button"
					onClick={() => router.push("/")}
				>
					<MdArrowBack />
				</button>
				<div className="col-start-2 col-span-1 flex items-center justify-center relative">
					<h1 className="text-base text-white md:text-3xl font-bold my-4 text-nowrap">
						DDK-Fest 2025
					</h1>
				</div>
				<div className="col-start-3 flex items-center justify-end px-4 m-2">
					<ChangeLang select={true} />
				</div>
			</div>
			<div className="flex flex-col justify-center gap-3 bg-red-200 rounded-lg p-4">
				<div className="flex gap-2 items-center">
					<MdError className="text-red-800 text-5xl" />
					<h1 className="text-3xl text-red-800 font-bold text-center">Error</h1>
				</div>
				<p className="text-center">
					There was an error. Please try again later.
				</p>
			</div>
		</div>
	);
};

export default Page;
