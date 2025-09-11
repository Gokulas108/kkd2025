"use client";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { useTranslations } from "next-intl";
import ChangeLang from "@/app/_components/ChangeLang";
import { Pacifico } from "next/font/google";
import { MdArrowBack } from "react-icons/md";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const font = Pacifico({
	weight: ["400"], // Add all the available font weights
	subsets: ["latin"], // You can choose the subsets you need (e.g., 'latin', 'cyrillic', etc.)
});

const ConfirmPage: React.FC = () => {
	const t = useTranslations("Form");
	const searchParams = useSearchParams();
	const mala = searchParams.get("mala");
	const router = useRouter();
	return (
		<>
			<div className="w-full mx-auto grid grid-cols-3 bg-orange-600">
				<button
					className="text-slate-100 px-4 col-start-1"
					type="button"
					onClick={() => router.push("/?mala=" + mala || "")}
				>
					<MdArrowBack />
				</button>
				<div className="col-start-2 col-span-1 flex items-center justify-center relative">
					<h1 className="text-base text-white md:text-3xl font-bold my-4 text-nowrap">
						DDK-Fest 2025
					</h1>
				</div>
				<div className="col-start-3 flex items-center justify-end px-4">
					<ChangeLang select={true} />
				</div>
			</div>
			<div className="max-w-2xl mx-auto w-full h-full flex flex-col text-center">
				<div className="max-w-2xl m-4 mt-6 p-4 flex flex-col gap-2 justify-center md:p-6 lg:p-8 bg-white rounded shadow">
					<div className="w-full flex justify-center">
						<FaRegCheckCircle style={{ fontSize: "100px", color: "green" }} />
					</div>
					<h1 className="font-semibold">{t("thank_you")}</h1>
					<p>
						{/* {t("thank_you_detail")} #2025 */}
						You have successfully registered for DDK-Fest 2025. Your
						registration details have been saved.
						{/* and confirmation has been sent
						to your email. */}
					</p>
				</div>
			</div>
		</>
	);
};

export default ConfirmPage;
