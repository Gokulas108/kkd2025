import { use, useEffect, useState } from "react";
import { sendEmail, submitForm } from "../actions";
import { MdArrowBack } from "react-icons/md";
import ChangeLang from "@/app/_components/ChangeLang";
import { Pacifico } from "next/font/google";
import { useTranslations, useLocale } from "next-intl";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Image from "next/image";

const font = Pacifico({
	weight: ["400"], // Add all the available font weights
	subsets: ["latin"], // You can choose the subsets you need (e.g., 'latin', 'cyrillic', etc.)
});

const Summary = ({ summary, slot, close }: any) => {
	const t = useTranslations("Form");
	const ht = useTranslations("Home");
	const ct = useTranslations("chakras");
	const locale = useLocale();

	const [status, setStatus] = useState("");
	const [loading, setLoading] = useState(false);

	const REGISTRATION_FEE = 10; // Registration fee for members

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const membersAbove10 = summary.members.filter((mem: any) => mem.age >= 10);
	const membersUnder10 = summary.members.filter((mem: any) => mem.age < 10);
	const chakras =
		"Jagannath Puri, Ram keli, Simantha, Kola, Sri Kashi Dham, Ekachakra, Godruma, Sri Adi Kesava Dham, Ritu, Mamgachi, Modadruma, Pundarik Dham, Ayodhya, Guruvayoor Dham, Keturi Dham, Srivas Angan, Rudra, Antar dwip, Radhakund, Nawadwip, Badrika Ashram, Sri Ranga Dham Chakra, Nilachal, Prayag, Ahobilam, Madhya, Govardhan Giri, Gupta Gokul dham, Janu Dwip, Ananta Padmanaba, Sri Punarthirtha Dham";
	const chakraList = chakras.split(", ");
	const translatedChakras = ct("chakra_list").split(", ");
	const chakraMap = chakraList.reduce(
		(acc: { [key: string]: string }, chakra: string, index: number) => {
			acc[chakra] = translatedChakras[index];
			return acc;
		},
		{}
	);

	const StepProcess = () => {
		return (
			<ol className="flex justify-center w-full text-xs text-gray-900 font-medium sm:text-base">
				<li className="flex w-full relative text-gray-500 justify-center after:content-['']  after:w-full after:h-0.5  after:bg-orange-600 after:inline-block after:absolute after:left-1/2 lg:after:top-5 after:top-3 ">
					<div className="block whitespace-nowrap text-wrap text-center z-10">
						<span className="w-6 h-6 bg-orange-600 border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white lg:w-10 lg:h-10">
							1
						</span>{" "}
						{/* {t("slot_selection")} #2025 */}
						Accepted T&Cs
					</div>
				</li>
				<li className="flex w-full relative text-slate-500 justify-center  after:content-['']  after:w-full after:h-0.5  after:bg-orange-600 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-1/2">
					<div className="block whitespace-nowrap text-wrap text-center z-10">
						<span className="w-6 h-6 bg-orange-600 border-2 border-orange-600 rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white lg:w-10 lg:h-10">
							2
						</span>{" "}
						{t("personal_details")}
					</div>
				</li>
				<li className="flex w-full relative text-gray-800 justify-center">
					<div className="block whitespace-nowrap text-wrap text-center z-10">
						<span className="w-6 h-6 bg-white border-2 border-orange-600 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-10 lg:h-10">
							3
						</span>{" "}
						{t("confirmation")}
					</div>
				</li>
			</ol>
		);
	};

	const onSubmit = () => {
		setLoading(true);
		// console.log(summary, slot);
		submitForm({
			summary,
			slots: slot,
			lang: locale,
		});
	};

	const Bill = () => {
		return (
			<div className="max-w-2xl mx-auto flex w-full items-center justify-center mt-2">
				<div className="w-full mx-4 rounded bg-gray-50 px-6 pt-8 shadow-lg">
					<div className="flex flex-col justify-center items-center gap-2">
						<h4 className="font-semibold">{t("summary")}</h4>
						<p className="text-xs">{t("confirm_details")}</p>
					</div>
					<div className="flex flex-col gap-3 border-b py-6 text-xs">
						{/* Commented out - #2025 */}
						{/* <span className="flex justify-between border-b pb-2">
							<span className="text-gray-400">{ht("slot")} :</span>
							<div className="flex flex-col gap-2">
								{slot.map((s: string, index: number) => (
									<span className="text-right" key={index}>
										{ht(s === "slot_3" ? "saturday" : "friday")}, {ht(s)}
									</span>
								))}
							</div>
						</span> */}
						<p className="flex justify-between">
							<span className="text-gray-400">{t("chakra")} :</span>
							<span>{chakraMap[summary.chakra]}</span>
						</p>
						<p className="flex justify-between">
							<span className="text-gray-400">{t("email_address")} :</span>
							<span>{summary.email}</span>
						</p>
						<p className="flex justify-between">
							<span className="text-gray-400">{t("mobile_no")} :</span>
							<span>{summary.phone_no}</span>
						</p>
					</div>
					<div className="flex flex-col gap-3 pb-6 pt-2 text-xs">
						<table className="w-full text-left">
							<thead>
								<tr className="flex">
									<th className="w-full py-2">{t("member")}</th>
									<th className="min-w-[90px] py-2 text-center">
										{t("volunteer")}
									</th>
									<th className="min-w-[44px] py-2 text-center">{t("age")}</th>
								</tr>
							</thead>
							<tbody>
								{summary.members.map((mem: any, index: number) => (
									<tr className="flex py-1" key={index}>
										<td className="flex-1">{mem.name}</td>
										<td className="min-w-[90px] text-center">
											{mem?.volunteer ? "Y" : "N"}
										</td>
										<td className="min-w-[44px] text-center">{mem.age}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className=" border-b border border-dashed"></div>

					<div className="flex flex-col gap-3 pb-6 pt-2 text-xs">
						{false && (
							<table className="w-full text-left">
								<thead>
									<tr className="flex">
										<th className="w-full py-2">{t("fees")}</th>
										<th className="min-w-[70px] py-2 text-center">
											{t("qty")}
										</th>
										<th className="min-w-[60px] py-2 text-right">{t("amt")}</th>
									</tr>
								</thead>
								<tbody>
									<tr className="flex py-1">
										<td className="flex-1">{t("registration_fee")}</td>
										<td className="min-w-[70px] text-center">
											{membersAbove10.length}
										</td>
										<td className="min-w-[60px] text-right">{`${
											membersAbove10.length * REGISTRATION_FEE
										} KKD`}</td>
									</tr>
									{/* registeration fees (under 10) is 0 */}
									{membersUnder10.length > 0 && (
										<>
											<tr className="flex py-1">
												<td className="flex-1">
													{t("registration_fee_under_10")}
												</td>
												<td className="min-w-[70px] text-center">
													{membersUnder10.length}
												</td>
												<td className="min-w-[60px] text-right">{`0 KKD`}</td>
											</tr>
										</>
									)}
									{/* top up credit Commented out for #2025 */}
									{/* <tr className="flex py-1">
									<td className="flex-1">{t("top_upcredit")}</td>
									<td className="min-w-[70px] text-center">
										{membersAbove10.length}
									</td>
									<td className="min-w-[60px] text-right">{`${
										membersAbove10.length * summary.topUpCredit
									} KKD`}</td>
								</tr> */}
								</tbody>
								<tfoot>
									<tr className="flex py-1 text-base">
										<td className="flex-1 font-semibold">{t("total")}</td>
										<td className="min-w-[10px]"></td>
										{slot.length === 1 ? (
											<td className="min-w-[250px] font-semibold text-right">
												{`${
													membersAbove10.length * REGISTRATION_FEE
													// + membersAbove10.length * summary.topUpCredit #2025
												} KKD`}
											</td>
										) : (
											<td className="min-w-[250px] text-right">
												{`${
													membersAbove10.length * REGISTRATION_FEE
													// + membersAbove10.length * summary.topUpCredit #2025
												} KKD`}{" "}
												x {slot.length} {ht("slot")} ={" "}
												<span className="font-semibold">{`${
													membersAbove10.length *
													REGISTRATION_FEE *
													// + membersAbove10.length * summary.topUpCredit #2025
													slot.length
												} KKD`}</span>
											</td>
										)}
									</tr>
								</tfoot>
							</table>
						)}
						<div className=" border-b border border-dashed"></div>
						<div className="py-4 justify-center items-center flex flex-col gap-2">
							<button
								className="flex w-full py-2 gap-2 bg-orange-600 text-slate-100 px-4 rounded justify-center items-center"
								type="submit"
								disabled={loading}
								onClick={onSubmit}
							>
								{loading ? (
									<AiOutlineLoading3Quarters className="animate-spin" />
								) : null}
								{t("confirm")}
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setStatus("Sending...");

		// Call the server action to send the email
		const result = await sendEmail({
			to: summary.email,
		});

		if (result.success) {
			setStatus("Email sent successfully");
		} else {
			setStatus(`Failed to send email: ${result.message}`);
		}

		console.log(result);
	};

	return (
		<>
			<div className="w-full mx-auto grid grid-cols-3 bg-orange-600">
				<button
					className="text-slate-100 px-4 col-start-1"
					type="button"
					onClick={close}
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
			<div className="max-w-2xl mx-auto p-4 md:p-6 lg:p-8 bg-white rounded shadow">
				<div className="flex justify-center items-center pt-2 ">
					<StepProcess />
				</div>
			</div>
			<Bill />
		</>
	);
};

export default Summary;
