import React, { useEffect, useState } from "react";
import { Pacifico } from "next/font/google";
import { useTranslations } from "next-intl";
import { MdArrowBack, MdDelete, MdPlusOne } from "react-icons/md";
import ChangeLang from "../../../_components/ChangeLang";
import { FaCheck, FaInfo, FaPlus } from "react-icons/fa";
import { useLocale } from "next-intl";
import Image from "next/image";

const font = Pacifico({
	weight: ["400"], // Add all the available font weights
	subsets: ["latin"], // You can choose the subsets you need (e.g., 'latin', 'cyrillic', etc.)
});

interface Member {
	name: string;
	age: string;
	volunteer?: boolean;
}

const StepProcess: React.FC = () => {
	const t = useTranslations("Form");
	return (
		<ol className="flex justify-center w-full text-xs text-gray-900 font-medium sm:text-base">
			<li className="flex w-full relative text-gray-500 justify-center after:content-['']  after:w-full after:h-0.5  after:bg-slate-800 after:inline-block after:absolute after:left-1/2 lg:after:top-5 after:top-3 ">
				<div className="block whitespace-nowrap text-wrap text-center z-10">
					<span className="w-6 h-6 bg-slate-800 border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white lg:w-10 lg:h-10">
						1
					</span>{" "}
					{/* {t("slot_selection")} #2025 */}
					Accepted T&Cs
				</div>
			</li>
			<li className="flex w-full relative text-slate-800 justify-center  after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-1/2">
				<div className="block whitespace-nowrap text-wrap text-center z-10">
					<span className="w-6 h-6 bg-slate-50 border-2 border-slate-800 rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-slate-800 lg:w-10 lg:h-10">
						2
					</span>{" "}
					{t("personal_details")}
				</div>
			</li>
			<li className="flex w-full relative text-gray-500  justify-center">
				<div className="block whitespace-nowrap text-wrap text-center z-10">
					<span className="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-10 lg:h-10">
						3
					</span>{" "}
					{t("confirmation")}
				</div>
			</li>
		</ol>
	);
};

const SlotForm = ({ close, setSummary }: any) => {
	const t = useTranslations("Form");
	const ct = useTranslations("chakras");
	const locale = useLocale();

	const [name, setName] = useState("");
	const [nameError, setNameError] = useState("");
	const [age, setAge] = useState("");
	const [ageError, setAgeError] = useState("");
	const [email, setEmail] = useState("");
	const [phone_no, setPhone_no] = useState("");
	const [phone_noError, setPhone_noError] = useState("");
	const [members, setMembers] = useState<Member[]>([]);
	const [topUpCredit, setTopUpCredit] = useState("5");
	const [emailError, setEmailError] = useState("");
	const [topUpCreditError, setTopUpCreditError] = useState("");
	const [membersError, setMembersError] = useState("");
	const [chakra, setChakra] = useState("");
	const [chakraError, setChakraError] = useState("");
	const [volunteers, setVolunteers] = useState<any>([]);
	const [volunteer, setVolunteer] = useState(false);

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

	useEffect(() => {
		// Scroll to the top of the page when the component is mounted
		window.scrollTo(0, 0);
	}, []);

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const ageRegex = /^[0-9]{1,2}$/;
		if (ageRegex.test(e.target.value)) {
			setAgeError("");
		} else {
			setAgeError(t("invalid_age"));
		}
		setAge(e.target.value);
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

	const handleMemberChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		index: number
	) => {
		const updatedMembers = [...members];
		if (e.target.name === "name") {
			updatedMembers[index].name = e.target.value;
		} else {
			let ageError = /^[0-9]{1,2}$/;
			if (!ageError.test(e.target.value)) {
				setMembersError(t("invalid_age"));
			} else {
				setMembersError("");
			}
			updatedMembers[index].age = e.target.value;
		}
		setMembers(updatedMembers);
	};

	const addMember = () => {
		setMembers([...members, { name: "", age: "" }]);
	};

	const removeMember = (index: number) => {
		const updatedMembers = [...members];
		updatedMembers.splice(index, 1);
		setMembers(updatedMembers);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(volunteers);
		if (validateForm() === false) {
			alert(t("please_fill"));
		} else {
			// Submit form data

			let new_members: any = [];

			if (members.length > 0) {
				new_members = [{ name, age }, ...members];
				volunteers.map(
					(volunteer: any) =>
						(new_members[parseInt(volunteer)].volunteer = true)
				);
			} else {
				new_members = [{ name, age, volunteer }];
			}

			console.log("Form data:", phone_no, email, new_members, topUpCredit);

			setSummary({
				phone_no,
				email,
				members: new_members,
				topUpCredit,
				chakra,
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
		if (!age) {
			setAgeError(t("age_required"));
			isValid = false;
		} else {
			const ageRegex = /^[0-9]{1,2}$/;
			if (!ageRegex.test(age)) {
				setAgeError(t("invalid_age"));
				isValid = false;
			} else {
				setAgeError("");
			}
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

		if (!topUpCredit) {
			setTopUpCreditError(t("top_up_credit_required"));
			isValid = false;
		} else {
			const numericRegex = /^[0-9]+(\.[0-9]+)?$/;
			if (!numericRegex.test(topUpCredit)) {
				setTopUpCreditError(t("invalid_amount"));
				isValid = false;
			} else {
				setTopUpCreditError("");
			}
		}
		if (members.length > 0) {
			let vals = members.map(
				(member) => member.name === "" || member.age === ""
			);
			if (vals.includes(true)) {
				setMembersError(t("fill_all_fields"));
				isValid = false;
			} else {
				setMembersError("");
			}
		} else {
			setMembersError("");
		}
		return isValid;
	};

	const setTopUpCreditAmount = (e: any, amount: string) => {
		e.preventDefault();
		setTopUpCredit(amount);
	};

	const handleVolunteers = (e: any) => {
		if (e.target.checked) {
			setVolunteers([...volunteers, e.target.value]);
		} else {
			setVolunteers(
				volunteers.filter((volunteer: any) => volunteer !== e.target.value)
			);
		}
	};

	return (
		<>
			<div className="w-full mx-auto grid grid-cols-3 bg-slate-900">
				<button
					className="text-slate-100 px-4 col-start-1"
					type="button"
					onClick={close}
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
				<div className="flex justify-center items-center pt-2 pb-6">
					<StepProcess />
				</div>
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
						<label className="block text-gray-700 font-bold mb-2" htmlFor="age">
							{t("age")}
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="age"
							type="number"
							pattern="[0-9]*"
							value={age}
							onChange={handleAgeChange}
							placeholder="00"
						/>
						{ageError && (
							<p className="text-red-500 text-xs italic p-1">{ageError}</p>
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
					<div className="mb-6">
						<h3 className="block text-gray-700 font-bold mb-2">
							{t("add_members")}
						</h3>
						<div className="text-gray-500 text-xs italic mb-4">
							{t("add_members_hint")}
						</div>
						{members.map((member, index) => (
							<div key={index} className="flex mb-2">
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
									type="text"
									name="name"
									value={member.name}
									onChange={(e) => handleMemberChange(e, index)}
									placeholder={t("full_name")}
								/>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
									type="number"
									pattern="[0-9]*"
									name="age"
									value={member.age}
									onChange={(e) => handleMemberChange(e, index)}
									placeholder={t("age")}
								/>
								<button
									className={"text-red-700 font-bold px-1 rounded"}
									type="button"
									onClick={() => removeMember(index)}
								>
									<MdDelete />
								</button>
							</div>
						))}
						<button
							className="flex w-full border-2 gap-2 border-dashed border-slate-500 text-slate-800 py-1 px-4 rounded justify-center items-center"
							type="button"
							onClick={addMember}
						>
							<FaPlus />
							{t("add_member")}
						</button>
						{membersError && (
							<p className="text-red-500 text-xs italic p-1">{membersError}</p>
						)}
					</div>
					<div className="mb-4">
						<h1 className="text block text-gray-700 font-bold mb-2">
							{t("registration_fees_title")}
						</h1>
						<div className="text-gray-500 text-xs italic mb-2">
							{t("registration_fees_hint")}
						</div>
						<div className="border-2 border-slate-800 text-slate-800 py-1 px-4 rounded flex items-center justify-center">
							10 KKD
						</div>
					</div>
					{/* TOP UP CREDIT - commented out */}
					{/* <div className="mb-4">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="topUpCredit"
						>
							{t("top_up_credit")}
						</label>
						<div className="text-gray-500 text-xs italic mb-2">
							{t("top_up_credit_hint")}
						</div>
						<div className="grid grid-cols-2 gap-2 gap-y-8">
							<button
								className={`${
									topUpCredit === "5"
										? "bg-slate-800 border-2 border-slate-800 text-slate-100"
										: "border-2 border-slate-800 text-slate-800"
								} py-1 px-4 rounded flex items-center justify-center`}
								onClick={(e) => setTopUpCreditAmount(e, "5")}
							>
								{topUpCredit === "5" && <FaCheck className="mr-2" />}5 KKD
							</button>
							<button
								className={`${
									topUpCredit === "10"
										? "bg-slate-800 border-2 border-slate-800 text-slate-100"
										: "border-2 border-slate-800 text-slate-800"
								} py-1 px-4 rounded flex items-center justify-center relative`}
								onClick={(e) => setTopUpCreditAmount(e, "10")}
							>
								{topUpCredit === "10" && <FaCheck className="mr-2" />}
								10 KKD
								<span className="absolute bottom-[-20px] left-0 text-slate-800 text-xs px-1">
									{t("recommended")}
								</span>
							</button>
							<button
								className={`${
									topUpCredit === "20"
										? "bg-slate-800 border-2 border-slate-800 text-slate-100"
										: "border-2 border-slate-800 text-slate-800"
								} py-1 px-4 rounded flex items-center justify-center`}
								onClick={(e) => setTopUpCreditAmount(e, "20")}
							>
								{topUpCredit === "20" && <FaCheck className="mr-2" />}
								20 KKD
							</button>
							<button
								className={`${
									topUpCredit === "30"
										? "bg-slate-800 border-2 border-slate-800 text-slate-100"
										: "border-2 border-slate-800 text-slate-800"
								} py-1 px-4 rounded flex items-center justify-center`}
								onClick={(e) => setTopUpCreditAmount(e, "30")}
							>
								{topUpCredit === "30" && <FaCheck className="mr-2" />}
								30 KKD
							</button>
						</div>

						{topUpCreditError && (
							<p className="text-red-500 text-xs italic">{topUpCreditError}</p>
						)}
					</div> */}
					<div className="mb-6">
						{/* a section to add volunteers from the members added  */}
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="volunteers"
						>
							{t("volunteers")}
						</label>
						<div className="text-gray-500 text-xs italic mb-2">
							{t("volunteers_hint")}
						</div>
						{members.length > 0 && (
							<h3 className="text-gray-500 text-xs italic mb-2">
								{t("volunteers_multiple")}
							</h3>
						)}

						{members.length > 0 ? (
							[{ name, age }, ...members].map(
								(member, index) =>
									member.name && (
										<div key={index} className="flex items-center mb-2">
											<input
												type="checkbox"
												id={`volunteer-${index}`}
												name="volunteers"
												value={index}
												className="mr-2"
												onChange={handleVolunteers}
											/>
											<label
												htmlFor={`volunteer-${index}`}
												className="text-gray-700"
											>
												{member.name}
											</label>
										</div>
									)
							)
						) : (
							<select
								value={volunteer ? 1 : 0}
								onChange={(e) =>
									setVolunteer(e.target.value === "0" ? false : true)
								}
								className={`shadow appearance-none text-gray-800 border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
							>
								<option value={0}>No</option>
								<option value={1}>Yes</option>
							</select>
						)}
					</div>

					<button
						className="flex w-full gap-2 bg-slate-800 text-slate-100 py-1 px-4 rounded justify-center items-center"
						type="submit"
						onClick={validateForm}
					>
						<FaCheck />
						{t("submit")}
					</button>
				</form>
			</div>
		</>
	);
};

export default SlotForm;
