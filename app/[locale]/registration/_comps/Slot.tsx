import { useState } from "react";
import { useTranslations } from "next-intl";
import ChangeLang from "@/app/_components/ChangeLang";
import { Pacifico } from "next/font/google";
import { FaN } from "react-icons/fa6";
import { MdArrowBack, MdNavigateNext } from "react-icons/md";
import { useRouter } from "next/navigation";
import Image from "next/image";

const font = Pacifico({
	weight: ["400"], // Add all the available font weights
	subsets: ["latin"], // You can choose the subsets you need (e.g., 'latin', 'cyrillic', etc.)
});

interface Musician {
	name: string;
	time: string;
}

const musiciansSlot1: Musician[] = [
	{ name: "Opening Ceremony", time: "12:30 PM" },
	{ name: "HG Anupam Kanhaiya das", time: "12:50 PM" },
	{ name: "Bhaktin Athira", time: "1:15 PM" },
	{ name: "Bhaktin Bhavya", time: "1:40 PM" },
	{ name: "Visiting Kirtaniya", time: "2:00 PM" },
	{ name: "HG Suvo Giridhari das & HG Achyuta Anupam das", time: "2:35 PM" },
	{ name: "HG Nirmol Gour das", time: "3:05 PM" },
	{ name: "HG Devananda Chaitanya das", time: "3:30 PM" },
	{ name: "HG Joy Nitai Chandra das", time: "3:55 PM" },
	{ name: "Visiting Kirtaniya", time: "4:25 PM" },
];

const musiciansSlot2: Musician[] = [
	{ name: "Bhaktin Ananya & Bhakta Anirudh", time: "5:15 PM" },
	{ name: "Bhakta Madhava", time: "5:40 PM" },
	{ name: "Visiting Kirtaniya", time: "6:05 PM" },
	{ name: "HG Satyaprada Radhika Devi dasi", time: "6:55 PM" },
	{ name: "Visiting Kirtaniya", time: "7:30 PM" },
	{ name: "Bhaktin Janhavi & Payoja", time: "8:20 PM" },
	{ name: "Bhakta Madhan Gopal", time: "8:55 PM" },
	{ name: "Visiting Kirtaniya", time: "9:30 PM" },
];

const musiciansSlot3: Musician[] = [
	{ name: "HG Purushottam Prasad das", time: "11:00 AM" },
	{ name: "Bhaktin Asvika", time: "11:30 AM" },
	{ name: "Bhaktin Mokshita Lochana", time: "11:55 AM" },
	{ name: "Bhaktin Ramavalli & Bhaktin Gaurangi", time: "12:20 PM" },
	{ name: "Visiting Kirtaniya", time: "12:45 PM" },
	{ name: "Bhaktin Haripriya", time: "1:35 PM" },
	{ name: "Bhakta Kushaal", time: "1:55 PM" },
	{ name: "Bhaktin Hasika", time: "2:15 PM" },
	{ name: "Bhakta Ram Jathin", time: "2:40 PM" },
	{ name: "Visiting Kirtaniya", time: "3:05 PM" },
	{ name: "HG Sumadhuri Tungavidya Devi dasi", time: "3:55 PM" },
	{ name: "HG Saciprana Caitanya das", time: "4:30 PM" },
	{ name: "Bhaktin Muthulakshmi", time: "4:55 PM" },
	{ name: "Bhaktin Haribhakti", time: "5:30 PM" },
	{ name: "Visiting Kirtaniya", time: "6:05 PM" },
	{ name: "Closing Ceremony", time: "6:55 PM" },
];

const friday_slots = [
	{
		key: "slot_1",
		musicians: musiciansSlot1,
	},
	{
		key: "slot_2",
		musicians: musiciansSlot2,
	},
];

const saturday_slots = [
	{
		key: "slot_3",
		musicians: musiciansSlot3,
	},
];

const App = ({ setSS, slotNumbers }: any) => {
	const t = useTranslations("Home");
	const ft = useTranslations("Form");
	const [activeSlot, setActiveSlot] = useState<any>(null);
	const [selectedSlots, setSelectedSlots] = useState<any>([]);
	const router = useRouter();
	const FRI_SLOTS_1 = 100;
	const FRI_SLOTS_2 = 150;
	const SAT_SLOTS = 440;

	const selectSlot = (slot: any) => {
		//clicking on a selected slot will remove it from the selected slots
		if (selectedSlots.includes(slot)) {
			setSelectedSlots((prev: any) => prev.filter((s: any) => s !== slot));
			return;
		} else {
			if (slot === "slot_1" && selectedSlots.includes("slot_2")) {
				setSelectedSlots((prev: any) => [
					...prev.filter((s: any) => s !== "slot_2"),
					slot,
				]);
			} else if (slot === "slot_2" && selectedSlots.includes("slot_1")) {
				setSelectedSlots((prev: any) => [
					...prev.filter((s: any) => s !== "slot_1"),
					slot,
				]);
			} else {
				setSelectedSlots((prev: any) => [...prev, slot]);
			}
		}
	};

	const setSlots = () => {
		if (selectedSlots.length === 0) {
			alert("Please select at least one slot");
			return;
		} else {
			setSS(selectedSlots);
		}
	};

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
			<div className="max-w-2xl mx-auto w-full h-full flex flex-col">
				<div className="p-4">
					{/* Form description */}
					<div className="text-slate-600 italic text-center mb-4">
						{t("form_description")}
					</div>
					<div className="flex flex-col gap-4 text-slate-100 p-4 rounded bg-slate-900 mb-4">
						<h2 className="text-lg font-bold">
							{t("day")} 1 - {t("friday")}
						</h2>

						{friday_slots.map((slot: any, index: number) => {
							let FRI_SLOTS = index === 0 ? FRI_SLOTS_1 : FRI_SLOTS_2;
							return (
								<div
									key={index}
									className={
										"flex flex-col text-slate-800 rounded shadow-md " +
										(selectedSlots.includes(slot.key)
											? "border-2 border-emerald-700"
											: "border-2 border-slate-100")
									}
								>
									<div className="flex">
										<div
											className={`flex w-12 ${
												selectedSlots.includes(slot.key)
													? "bg-emerald-700"
													: "bg-slate-100"
											} justify-center items-center`}
										>
											{/* a checkbox aligned in the center if slot is selected */}
											<input
												type="checkbox"
												className="w-6 h-6"
												checked={selectedSlots.includes(slot.key)}
												onChange={() => selectSlot(slot.key)}
												disabled={FRI_SLOTS - slotNumbers[index + 1] <= 0}
											/>
										</div>
										<div className="flex bg-white flex-1 p-3 h-full flex-col md:flex-row md:justify-between gap-2">
											<div className="flex flex-col gap-2">
												<h3 className="text-xl font-bold">{t(slot.key)}</h3>
												<h3
													className={
														FRI_SLOTS - slotNumbers[index + 1] > 30
															? "text-emerald-700"
															: "text-red-700"
													}
												>
													{FRI_SLOTS - slotNumbers[index + 1] > 0
														? FRI_SLOTS - slotNumbers[index + 1]
														: 0}{" "}
													{t("seats_remaining")}
												</h3>
											</div>

											<div className="flex flex-col space-y-2">
												<button
													className="w-full p-2 md:px-4 border-2 border-slate-900 bg-white text-slate-900 text-sm font-bold rounded"
													onClick={() =>
														setActiveSlot(
															activeSlot === slot.key ? null : slot.key
														)
													}
												>
													{activeSlot === slot.key ? t("hide") : t("view")}
												</button>
											</div>
										</div>
									</div>
									{activeSlot === slot.key && (
										<div
											className={
												"overflow-x-auto bg-white border-t-4 border-slate-100"
											}
										>
											<table className="table-auto w-full">
												<thead>
													<tr>
														<th className="px-4 py-2">{t("kirtaniya")}</th>
														<th className="px-4 py-2">{t("time")}</th>
													</tr>
												</thead>
												<tbody>
													{slot.musicians.map((musician: any, i: number) => (
														<tr key={i}>
															<td className="border px-4 py-2 text-sm">
																{musician.name}
															</td>
															<td className="border px-4 py-2 w-1/3 text-sm">
																{musician.time}
															</td>
														</tr>
													))}
												</tbody>
											</table>
										</div>
									)}
								</div>
							);
						})}
					</div>
					<div className="flex flex-col gap-4 text-slate-100 p-4 rounded bg-slate-900">
						<h2 className="text-lg font-bold">
							{t("day")} 2 - {t("saturday")}
						</h2>
						{saturday_slots.map((slot: any, index: number) => (
							<div
								key={index}
								className={
									"flex flex-col text-slate-800 rounded shadow-md " +
									(selectedSlots.includes(slot.key)
										? "border-2 border-emerald-700"
										: "border-2 border-slate-100")
								}
							>
								<div className="flex">
									<div
										className={`flex w-12 ${
											selectedSlots.includes(slot.key)
												? "bg-emerald-700"
												: "bg-slate-100"
										} justify-center items-center`}
									>
										{/* a checkbox aligned in the center if slot is selected */}
										<input
											type="checkbox"
											className="w-6 h-6"
											checked={selectedSlots.includes(slot.key)}
											onChange={() => selectSlot(slot.key)}
											disabled={SAT_SLOTS - slotNumbers[3] <= 0}
										/>
									</div>
									<div className="flex bg-white flex-1 p-3 h-full flex-col md:flex-row md:justify-between gap-2">
										<div className="flex flex-col gap-2">
											<h3 className="text-xl font-bold">{t(slot.key)}</h3>
											<h3
												className={
													SAT_SLOTS - slotNumbers[3] > 30
														? "text-emerald-700"
														: "text-red-700"
												}
											>
												{SAT_SLOTS - slotNumbers[3] > 0
													? SAT_SLOTS - slotNumbers[3]
													: 0}{" "}
												{t("seats_remaining")}
											</h3>
										</div>

										<div className="flex flex-col space-y-2">
											<button
												className="w-full p-2 md:px-4 border-2 border-slate-900 bg-white text-slate-900 text-sm font-bold rounded"
												onClick={() =>
													setActiveSlot(
														activeSlot === slot.key ? null : slot.key
													)
												}
											>
												{activeSlot === slot.key ? t("hide") : t("view")}
											</button>
										</div>
									</div>
								</div>
								{activeSlot === slot.key && (
									<div
										className={
											"overflow-x-auto bg-white border-t-4 border-slate-100"
										}
									>
										<table className="table-auto w-full">
											<thead>
												<tr>
													<th className="px-4 py-2">{t("kirtaniya")}</th>
													<th className="px-4 py-2">{t("time")}</th>
												</tr>
											</thead>
											<tbody>
												{slot.musicians.map((musician: any, i: number) => (
													<tr key={i}>
														<td className="border px-4 py-2 text-sm">
															{musician.name}
														</td>
														<td className="border px-4 py-2 w-1/3 text-sm">
															{musician.time}
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								)}
							</div>
						))}
					</div>
					<div className="flex justify-center mt-4">
						<button
							className="bg-slate-900 justify-center gap-2 flex w-full text-white p-2 rounded"
							onClick={setSlots}
						>
							{ft("submit")}
							<MdNavigateNext className="w-6 h-6" />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
