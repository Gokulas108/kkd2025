import React, { useEffect, useState } from "react";
import { Pacifico } from "next/font/google";
import { useTranslations } from "next-intl";
import { MdArrowBack, MdDelete, MdPlusOne } from "react-icons/md";
import ChangeLang from "../../../_components/ChangeLang";
import { FaCheck, FaInfo, FaPlus } from "react-icons/fa";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Image from "next/image";
import { submitForm } from "../actions";

const font = Pacifico({
	weight: ["400"], // Add all the available font weights
	subsets: ["latin"], // You can choose the subsets you need (e.g., 'latin', 'cyrillic', etc.)
});

interface Member {
	name: string;
	age: string;
}

interface Stall {
	stall: string;
	type: number;
	cuisine1: string;
	cuisine2: string;
	cuisine3: string;
	stall_incharge_name: string;
	stall_incharge_phone: string;
	equipment_needed: string;
	preferred_day: string;
}

const SlotForm = ({ close, setSummary }: any) => {
	const t = useTranslations("Form");
	const ct = useTranslations("chakras");
	const ht = useTranslations("Home");
	const locale = useLocale();
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const [name, setName] = useState("");
	const [nameError, setNameError] = useState("");
	const [email, setEmail] = useState("");
	const [phone_no, setPhone_no] = useState("");
	const [phone_noError, setPhone_noError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [chakra, setChakra] = useState("");
	const [chakraError, setChakraError] = useState("");
	const [hennaStallResponse, setHennaStallResponse] = useState("");
	const [clothingStallResponse, setClothingStallResponse] = useState("");
	const [foodStallError, setFoodStallError] = useState<any>(null);
	const [stalls, setStalls] = useState<Stall[]>([
		{
			stall: "Food",
			type: 100,
			cuisine1: "",
			cuisine2: "",
			cuisine3: "",
			stall_incharge_name: "",
			stall_incharge_phone: "",
			equipment_needed: "",
			preferred_day: "any",
		},
	]);

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
	const sortedChakras = Object.keys(chakraMap)
		.sort()
		.reduce(
			(acc, key) => ({
				...acc,
				[key]: chakraMap[key],
			}),
			{}
		);

	const cuisineList = [
		"North Indian (Roti-Subzi-Dal-Rice etc.)",
		"Chaats",
		"South Indian (Tiffin) (Idli-Dosa-Upma-Uthappam etc).",
		"South Indian (Main course)",
		"Italian (Pasta-Pizza-Foccacia etc.)",
		"Mexican (Tacos-Burrittos-Vegan Chili etc.)",
		"Middle-eastern (Mezzes-Bread-Falafel etc.)",
		"Asian (Fried Rice-Manchurian-Rice paper rolls-Dumplings-Buddha bowls-Noodles etc.)",
		"American (Varieties of Burgers, Sandwiches, Fries etc.)",
		"Soups and Salads",
		"Juices",
		"Dessert Table! (Indian)",
		"Dessert Table! (Western)",
	];

	useEffect(() => {
		// Scroll to the top of the page when the component is mounted
		window.scrollTo(0, 0);
	}, []);

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (emailRegex.test(e.target.value)) {
			setEmailError("");
		} else {
			setEmailError(t("invalid_email"));
		}
		setEmail(e.target.value);
	};

	const handlePhone_noChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const phone_noRegex = /^[0-9]{8,}$/;
		if (phone_noRegex.test(e.target.value)) {
			setPhone_noError("");
		} else {
			setPhone_noError(t("invalid_phone_no"));
		}
		setPhone_no(e.target.value);
	};

	const addStall = () => {
		setStalls((prevStalls) => [
			...prevStalls,
			{
				stall: "Food",
				type: 100,
				cuisine1: "",
				cuisine2: "",
				cuisine3: "",
				stall_incharge_name: "",
				stall_incharge_phone: "",
				equipment_needed: "",
				preferred_day: "any",
			},
		]);
	};

	const removeStall = (index: number) => {
		const updatedStalls = [...stalls];
		updatedStalls.splice(index, 1);
		setStalls(updatedStalls);
	};

	const handleStallChange = (e: any, index: number) => {
		const updatedStalls = [...stalls];
		if (e.target.name === "stall") {
			updatedStalls[index].stall = e.target.value;
			if (e.target.value === "Food") {
				updatedStalls[index].type = 100;
				updatedStalls[index].preferred_day = "any";
			} else {
				updatedStalls[index].type = 0;
				updatedStalls[index].preferred_day = "any";
			}
			updatedStalls[index].cuisine1 = "";
			updatedStalls[index].cuisine2 = "";
			updatedStalls[index].cuisine3 = "";
			updatedStalls[index].equipment_needed = "";
		} else if (e.target.name === "type") {
			updatedStalls[index].type = parseInt(e.target.value);
		} else if (e.target.name === "cuisine1") {
			updatedStalls[index].cuisine1 = e.target.value;
		} else if (e.target.name === "cuisine2") {
			updatedStalls[index].cuisine2 = e.target.value;
		} else if (e.target.name === "cuisine3") {
			updatedStalls[index].cuisine3 = e.target.value;
		} else if (e.target.name === "stall_incharge_name") {
			updatedStalls[index].stall_incharge_name = e.target.value;
		} else if (e.target.name === "stall_incharge_phone") {
			updatedStalls[index].stall_incharge_phone = e.target.value;
		} else if (e.target.name === "equipment_needed") {
			updatedStalls[index].equipment_needed = e.target.value;
		} else if (e.target.name === "preferred_day") {
			updatedStalls[index].preferred_day = e.target.value;
		}
		setStalls(updatedStalls);
	};

	const setStallType = (e: any, index: number, type: number) => {
		e.preventDefault();
		const updatedStalls = [...stalls];
		updatedStalls[index].type = type;
		setStalls(updatedStalls);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (validateForm() === false) {
			alert(t("please_fill"));
		} else {
			// Submit form data
			console.log(
				"Form data:",
				name,
				phone_no,
				email,
				stalls,
				hennaStallResponse,
				clothingStallResponse
			);
			setLoading(true);
			submitForm({
				name,
				phone_no,
				email,
				chakra,
				stalls,
				hennaStallResponse,
				clothingStallResponse,
				lang: locale,
			});
		}
	};

	const validateForm = () => {
		let isValid = true;
		if (!name) {
			setNameError(t("name_required"));
			isValid = false;
		} else {
			setNameError("");
		}

		if (!email) {
			setEmailError(t("email_required"));
			isValid = false;
		} else {
			const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
			if (!emailRegex.test(email)) {
				setEmailError(t("invalid_email"));
				isValid = false;
			} else {
				setEmailError("");
			}
		}
		if (!phone_no) {
			setPhone_noError(t("phone_no_required"));
			isValid = false;
		} else {
			const phone_noRegex = /^[0-9]{8,}$/;
			if (!phone_noRegex.test(phone_no)) {
				setPhone_noError(t("invalid_phone_no"));
				isValid = false;
			} else {
				setPhone_noError("");
			}
		}

		if (!chakra) {
			setChakraError(t("select_chakra"));
			isValid = false;
		} else {
			setChakraError("");
		}

		if (stalls.length > 0) {
			let vals = stalls.map(
				(stall) =>
					(stall.stall === "Food" && stall.cuisine1 === "") ||
					(stall.stall === "Food" && stall.cuisine2 === "") ||
					(stall.stall === "Food" && stall.cuisine3 === "") ||
					stall.stall_incharge_name === "" ||
					stall.stall_incharge_phone === ""
			);
			if (vals.includes(true)) {
				setFoodStallError(vals);
				isValid = false;
			} else {
				setFoodStallError(null);
			}
		} else {
			setFoodStallError(null);
		}
		return isValid;
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
			<div className="max-w-2xl mx-auto p-4 md:p-6 lg:p-8 bg-white rounded shadow">
				{/* <div className="flex justify-center items-center pt-2 pb-6">
					<StepProcess />
				</div> */}
				<form onSubmit={handleSubmit}>
					{locale !== "en" && (
						<div className="italic text-center text-sm text-slate-600 mb-4">
							{t("form_description")}
						</div>
					)}
					<div className="mb-6">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="name"
						>
							{t("full_name")}
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="name"
							type="text"
							value={name}
							onChange={handleNameChange}
							placeholder={t("full_name")}
						/>
						{nameError && (
							<p className="text-red-500 text-xs italic p-1">{nameError}</p>
						)}
					</div>
					<div className="mb-6">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="chakra"
						>
							{t("chakra")}
						</label>
						<select
							id="chakra"
							name="chakra"
							onChange={(e) => setChakra(e.target.value)}
							value={chakra}
							className={`shadow appearance-none text-gray-${
								chakra === "" ? 400 : 800
							} border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
						>
							<option className="" value="">
								{t("select_chakra")}
							</option>
							{Object.entries(sortedChakras).map(([key, value]) => (
								<option key={key} value={key}>
									{value as React.ReactNode}
								</option>
							))}
						</select>
						{chakraError && (
							<p className="text-red-500 text-xs italic p-1">{chakraError}</p>
						)}
					</div>

					<div className="mb-6">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="email"
						>
							{t("email_address")}
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							type="email"
							value={email}
							onChange={handleEmailChange}
							placeholder="name@example.com"
						/>
						{emailError && (
							<p className="text-red-500 text-xs italic p-1">{emailError}</p>
						)}
					</div>
					<div className="mb-6">
						<label
							className="block text-gray-700 font-bold mb-1"
							htmlFor="phone_no"
						>
							{t("mobile_no")}
						</label>
						<div className="text-gray-500 text-xs italic mb-2">
							{t("mobile_no_hint")}
						</div>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="phone_no"
							type="tel"
							value={phone_no}
							onChange={handlePhone_noChange}
							placeholder="12345678"
						/>
						{phone_noError && (
							<p className="text-red-500 text-xs italic p-1">{phone_noError}</p>
						)}
					</div>
					<label
						className="block text-gray-700 font-bold mb-1"
						htmlFor="phone_no"
					>
						{t("stall")}
					</label>
					{stalls.map((stall, index) => (
						<div
							key={index}
							className="flex flex-col gap-2 rounded border-2 border-slate-800 p-4 mb-6"
						>
							<h3 className="block text-gray-500 mb-2 ">
								{t("stall")} {index + 1}
							</h3>
							<div className="mb-6">
								<label className="block text-gray-700 font-bold mb-2">
									{t("type")}
								</label>
								<select
									name="stall"
									value={stall.stall}
									onChange={(e) => handleStallChange(e, index)}
									className="shadow appearance-none text-gray-800 border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
								>
									<option value="Food">{t("stalls_title")}</option>
									<option value="Cloth">{t("cloth_stall")}</option>
								</select>
							</div>
							{stall.stall === "Food" && (
								<div className="mb-6">
									<label className="block text-gray-700 font-bold mb-2">
										{t("stall_type")}
									</label>
									<div className="text-gray-500 text-xs italic mb-2">
										{t("contribution_hint")}
									</div>
									<div className="grid grid-cols-2 gap-2 gap-y-8">
										<button
											className={`${
												stall.type === 100
													? "bg-slate-800 border-2 border-slate-800 text-slate-100"
													: "border-2 border-slate-800 text-slate-800"
											} py-1 flex flex-col px-2 rounded items-center justify-center`}
											onClick={(e) => setStallType(e, index, 100)}
										>
											<span className="flex justify-center items-center">
												{stall.type === 100 && <FaCheck className="mr-2" />}
												{t("stall_type_400_hint")}
											</span>
											{/* <div
											className={
												"text-xs italic text-wrap text-center " +
												(stall.type === 300 ? "text-white" : "text-gray-500")
											}
										>
											{t("stall_type_300_hint")}
										</div> */}
										</button>
										<button
											className={`${
												stall.type === 50
													? "bg-slate-800 border-2 border-slate-800 text-slate-100"
													: "border-2 border-slate-800 text-slate-800"
											} py-1 px-2 rounded flex-col flex items-center justify-center`}
											onClick={(e) => setStallType(e, index, 50)}
										>
											<span className="flex justify-center items-center">
												{stall.type === 50 && <FaCheck className="mr-2" />}
												{t("stall_type_300_hint")}
											</span>
											{/* <div
											className={
												"text-xs italic text-wrap text-center " +
												(stall.type === 400 ? "text-white" : "text-gray-500")
											}
										>
											{t("stall_type_400_hint")}
										</div> */}
										</button>
									</div>
								</div>
							)}
							<div className="mb-6">
								<label className="block text-gray-700 font-bold mb-2">
									{t("preferred_day")}
								</label>
								<div className="text-gray-500 text-xs italic mb-2">
									{t("preferred_day_hint")}
								</div>
								<select
									name="preferred_day"
									value={stall.preferred_day}
									onChange={(e) => handleStallChange(e, index)}
									className="shadow appearance-none text-gray-800 border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
								>
									<option value="any">{t("no_preference")}</option>
									<option value="friday">{ht("friday")}, 1 PM - 10 PM</option>
									<option value="saturday">
										{ht("saturday")}, 12 PM - 6 PM
									</option>
									{stall.stall === "Cloth" && (
										<option value="both">{t("both")}</option>
									)}
								</select>
							</div>
							{stall.stall === "Food" && (
								<div className="mb-6">
									<div className="text-gray-700 font-bold mb-6">
										{t("cuisine_hint")}
									</div>
									<label className="block text-gray-500 text-xs mb-2 italic">
										{t("cuisine")} 1
									</label>

									<select
										name="cuisine1"
										value={stall.cuisine1}
										onChange={(e) => handleStallChange(e, index)}
										className="shadow appearance-none text-gray-800 border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
									>
										<option value="">{t("select_cuisine")}</option>
										{cuisineList.map((cuisine) => (
											<option key={cuisine} value={cuisine}>
												{cuisine}
											</option>
										))}
									</select>
								</div>
							)}
							{stall.stall === "Food" && (
								<div className="mb-6">
									<label className="block text-gray-500 text-xs mb-2 italic">
										{t("cuisine")} 2
									</label>
									<select
										name="cuisine2"
										value={stall.cuisine2}
										onChange={(e) => handleStallChange(e, index)}
										className="shadow appearance-none text-gray-800 border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
									>
										<option value="">{t("select_cuisine")}</option>
										{cuisineList.map((cuisine) => (
											<option key={cuisine} value={cuisine}>
												{cuisine}
											</option>
										))}
									</select>
								</div>
							)}
							{stall.stall === "Food" && (
								<div className="mb-6">
									<label className="block text-gray-500 text-xs mb-2 italic">
										{t("cuisine")} 3
									</label>
									<select
										name="cuisine3"
										value={stall.cuisine3}
										onChange={(e) => handleStallChange(e, index)}
										className="shadow appearance-none text-gray-800 border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
									>
										<option value="">{t("select_cuisine")}</option>
										{cuisineList.map((cuisine) => (
											<option key={cuisine} value={cuisine}>
												{cuisine}
											</option>
										))}
									</select>
								</div>
							)}
							<div className="mb-6">
								<label className="block text-gray-700 font-bold mb-2">
									{t("stall_incharge_name")}
								</label>

								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									type="text"
									name="stall_incharge_name"
									value={stall.stall_incharge_name}
									onChange={(e) => handleStallChange(e, index)}
									placeholder={t("full_name")}
								/>
							</div>
							<div className="mb-6">
								<label className="block text-gray-700 font-bold mb-2">
									{t("stall_incharge_phone")}
								</label>

								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									type="tel"
									name="stall_incharge_phone"
									value={stall.stall_incharge_phone}
									onChange={(e) => handleStallChange(e, index)}
									placeholder="12345678"
								/>
							</div>
							{stall.stall === "Food" && (
								<div className="mb-6">
									<label className="block text-gray-700 font-bold mb-2">
										{t("equipment_needed")}
									</label>
									<div className="text-gray-500 text-xs italic mb-2">
										{t("equipment_needed_hint")}
									</div>
									<textarea
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										name="equipment_needed"
										value={stall.equipment_needed}
										onChange={(e) => handleStallChange(e, index)}
										placeholder={t("equipment_needed")}
									/>
								</div>
							)}
							{index > 0 && (
								<button
									className="flex w-full border-2 gap-2 border-red-800 text-red-800 py-1 px-4 rounded justify-center items-center"
									type="button"
									onClick={() => removeStall(index)}
								>
									<MdDelete />
									{t("remove_stall")}
								</button>
							)}
							{foodStallError && foodStallError?.[index] && (
								<p className="text-red-500 text-xs italic p-1">
									{t("fill_all_fields")}
								</p>
							)}
						</div>
					))}

					<div className="mb-6">
						<button
							className="flex w-full border-2 gap-2 border-dashed border-slate-500 text-slate-800 py-1 px-4 rounded justify-center items-center"
							type="button"
							onClick={addStall}
						>
							<FaPlus />
							{t("add_stall")}
						</button>
					</div>
					<div className="mb-6">
						<label className="block text-gray-700 font-bold mb-2">
							{t("henna_stall_title")}
						</label>
						<div className="text-gray-500 text-xs italic mb-2">
							{t("henna_stall_hint")}
						</div>
						<textarea
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							value={hennaStallResponse}
							onChange={(e) => setHennaStallResponse(e.target.value)}
						/>
					</div>
					{/* <div className="mb-6">
						<label className="block text-gray-700 font-bold mb-2">
							{t("clothing_stall_title")}
						</label>
						<div className="text-gray-500 text-xs italic mb-2">
							{t("clothing_stall_hint")}
						</div>
						<textarea
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							value={clothingStallResponse}
							onChange={(e) => setClothingStallResponse(e.target.value)}
						/>
					</div> */}

					<div className="mb-6">
						<div className="border-2 border-slate-800 rounded shadow-md p-4 w-full">
							<table className="w-full text-sm">
								<thead>
									<tr>
										<th className="text-slate-800 text-left">{t("fees")}</th>
										<th className="text-right text-slate-800">{t("amt")}</th>
									</tr>
								</thead>
								<tbody>
									{stalls.filter((stall) => stall.type === 100).length > 0 && (
										<tr>
											<td className="text-slate-800">
												{t("stalls_title")} (100%) x{" "}
												{stalls.filter((stall) => stall.type === 100).length}
											</td>
											<td className="text-right text-slate-800">
												{stalls.filter((stall) => stall.type === 100).length *
													300}
											</td>
										</tr>
									)}
									{stalls.filter((stall) => stall.type === 50).length > 0 && (
										<tr>
											<td className="text-slate-800">
												{t("stalls_title")} (50%) x{" "}
												{stalls.filter((stall) => stall.type === 50).length}
											</td>
											<td className="text-right text-slate-800">
												{stalls.filter((stall) => stall.type === 50).length *
													300}
											</td>
										</tr>
									)}
									{stalls.filter((stall) => stall.stall === "Cloth").length >
										0 && (
										<tr>
											<td className="text-slate-800">
												{t("cloth_stall")} x{" "}
												{
													stalls.filter((stall) => stall.stall === "Cloth")
														.length
												}
											</td>
											<td className="text-right text-slate-800">
												{stalls.filter(
													(stall) =>
														stall.stall === "Cloth" &&
														stall.preferred_day === "both"
												).length *
													500 +
													stalls.filter(
														(stall) =>
															stall.stall === "Cloth" &&
															stall.preferred_day !== "both"
													).length *
														300}
											</td>
										</tr>
									)}
								</tbody>
								<tfoot>
									<tr className="text-base mt-2 text-slate-800 font-semibold">
										<td className="text-left">{t("total")}</td>
										<td className="text-right">
											{`${
												stalls.filter((stall) => stall.stall === "Food")
													.length *
													300 +
												stalls.filter(
													(stall) =>
														stall.stall === "Cloth" &&
														stall.preferred_day === "both"
												).length *
													500 +
												stalls.filter(
													(stall) =>
														stall.stall === "Cloth" &&
														stall.preferred_day !== "both"
												).length *
													300
											} KKD`}
										</td>
									</tr>
								</tfoot>
							</table>
						</div>
					</div>
					<button
						className="flex w-full gap-2 bg-slate-800 text-slate-100 py-1 px-4 rounded justify-center items-center"
						type="submit"
						disabled={loading}
						onClick={validateForm}
					>
						{loading ? (
							<AiOutlineLoading3Quarters className="animate-spin" />
						) : (
							<FaCheck />
						)}
						{t("confirm")}
					</button>
				</form>
			</div>
		</>
	);
};

export default SlotForm;
