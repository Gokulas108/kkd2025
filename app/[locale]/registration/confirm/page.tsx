"use client";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { useTranslations } from "next-intl";
import ChangeLang from "@/app/_components/ChangeLang";
import { Pacifico } from "next/font/google";
import { MdArrowBack } from "react-icons/md";
import Image from "next/image";
import { useRouter } from "next/navigation";

const font = Pacifico({
	weight: ["400"], // Add all the available font weights
	subsets: ["latin"], // You can choose the subsets you need (e.g., 'latin', 'cyrillic', etc.)
});

const ConfirmPage: React.FC = () => {
	const t = useTranslations("Form");
	const router = useRouter();
	return (
		<>
			<div className="w-full mx-auto grid grid-cols-3 bg-slate-900">
				<button
					className="text-slate-100 px-4 col-start-1"
					type="button"
					onClick={() => router.push("/")}
				>
					<MdArrowBack />
				</button>
				<div className="col-start-2 col-span-1 flex items-center justify-center relative">
					<Image
						src="/images/header-logo.png"
						alt="Kirtan-Ruci-2024"
						width={250}
						height={0}
						className="mx-auto my-3"
					/>
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
						You have successfully registered for _EventName_ 2025. Your
						registration details have been saved.
					</p>
				</div>
			</div>
		</>
	);
};

export default ConfirmPage;
