import { useState } from "react";
import { useTranslations } from "next-intl";
import ChangeLang from "@/app/_components/ChangeLang";
import { Pacifico } from "next/font/google";
import { FaN } from "react-icons/fa6";
import { MdNavigateNext } from "react-icons/md";

const font = Pacifico({
	weight: ["400"], // Add all the available font weights
	subsets: ["latin"], // You can choose the subsets you need (e.g., 'latin', 'cyrillic', etc.)
});

interface Musician {
	name: string;
	time: string;
}

const musiciansSlot1: Musician[] = Array.from({ length: 10 }, (_, i) => ({
	name: `Kirtaniya ${i + 1}`,
	time: `4:${i * 25} PM`,
}));

const musiciansSlot2: Musician[] = Array.from({ length: 8 }, (_, i) => ({
	name: `Kirtaniya ${i + 1}`,
	time: `9:${i * 25} AM`,
}));

const musiciansSlot3: Musician[] = Array.from({ length: 10 }, (_, i) => ({
	name: `Kirtaniya ${i + 1}`,
	time: `3:${i * 25} PM`,
}));

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
			<div className="max-w-2xl mx-auto w-full h-full flex flex-col">
				<div className="max-w-2xl mx-auto grid grid-cols-3 bg-slate-900">
					<div className="col-start-2 col-span-1 flex items-center justify-center relative">
						<h1
							className={
								"text-xl py-4 text-center text-wrap text-slate-100 " +
								font.className
							}
						>
							{ft("title")}
						</h1>
					</div>
					<div className="col-start-3 flex items-center justify-end px-4">
						<ChangeLang select={true} />
					</div>
				</div>

				<div className="p-4">
					{/* Form description */}
					<div className="text-slate-600 italic text-center mb-4">
						{t("form_description")}
					</div>
					<div className="flex flex-col gap-4 text-slate-100 p-4 rounded bg-slate-900 mb-4">
						<h2 className="text-lg font-bold">
							{t("day")} 1 - {t("friday")}
						</h2>

						{friday_slots.map((slot: any, index: number) => (
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
										/>
									</div>
									<div className="flex bg-white flex-1 p-3 h-full flex-col md:flex-row md:justify-between gap-2">
										<div className="flex flex-col gap-2">
											<h3 className="text-xl font-bold">{t(slot.key)}</h3>
											<h3
												className={
													100 - slotNumbers[index + 1] > 30
														? "text-emerald-700"
														: "text-red-700"
												}
											>
												{100 - slotNumbers[index + 1]} {t("seats_remaining")}
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
														<td className="border px-4 py-2">
															{musician.name}
														</td>
														<td className="border px-4 py-2">
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
										/>
									</div>
									<div className="flex bg-white flex-1 p-3 h-full flex-col md:flex-row md:justify-between gap-2">
										<div className="flex flex-col gap-2">
											<h3 className="text-xl font-bold">{t(slot.key)}</h3>
											<h3
												className={
													100 - slotNumbers[3] > 30
														? "text-emerald-700"
														: "text-red-700"
												}
											>
												{100 - slotNumbers[3]} {t("seats_remaining")}
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
														<td className="border px-4 py-2">
															{musician.name}
														</td>
														<td className="border px-4 py-2">
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
