import React, { useEffect, useState } from "react";
import { Pacifico } from "next/font/google";
import { useTranslations } from "next-intl";
import { MdArrowBack, MdDelete, MdPlusOne } from "react-icons/md";
import ChangeLang from "../../../_components/ChangeLang";
import { FaCheck, FaInfo, FaPlus } from "react-icons/fa";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "@/i18n/routing";

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
			<li className="flex w-full relative text-gray-500 justify-center after:content-['']  after:w-full after:h-0.5  after:bg-orange-600 after:inline-block after:absolute after:left-1/2 lg:after:top-5 after:top-3 ">
				<div className="block whitespace-nowrap text-wrap text-center z-10">
					<span className="w-6 h-6 bg-orange-600 border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white lg:w-10 lg:h-10">
						1
					</span>{" "}
					{/* {t("slot_selection")} #2025 */}
					Start Registration
				</div>
			</li>
			<li className="flex w-full relative text-orange-600 justify-center  after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-1/2">
				<div className="block whitespace-nowrap text-wrap text-center z-10">
					<span className="w-6 h-6 bg-orange-50 border-2 border-orange-600 rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-orange-600 lg:w-10 lg:h-10">
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
	const searchParams = useSearchParams();
	const router = useRouter();

	const mala = searchParams.get("mala");
	// if mala is not present or not valid in url, redirect to /[locale]/error
	// valid values: nimai, nitai, vaijayanthi, tulasi
	useEffect(() => {
		if (!mala || !["nimai", "nitai", "vaijayanthi", "tulasi"].includes(mala)) {
			router.push("/error");
		}
	}, [mala, router]);

	if (!mala || !["nimai", "nitai", "vaijayanthi", "tulasi"].includes(mala)) {
		return null; // render nothing while redirecting
	}
	const malaNameMapping: { [key: string]: string } = {
		nimai: "Nimai mala",
		nitai: "Nitai mala",
		vaijayanthi: "Vaijayanthi mala",
		tulasi: "Tulasi mala",
	};

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

	// #2025 const chakras =
	// 	"Jagannath Puri, Ram keli, Simantha, Kola, Sri Kashi Dham, Ekachakra, Godruma, Sri Adi Kesava Dham, Ritu, Mamgachi, Modadruma, Pundarik Dham, Ayodhya, Guruvayoor Dham, Keturi Dham, Srivas Angan, Rudra, Antar dwip, Radhakund, Nawadwip, Badrika Ashram, Sri Ranga Dham Chakra, Nilachal, Prayag, Ahobilam, Madhya, Govardhan Giri, Gupta Gokul dham, Janu Dwip, Ananta Padmanaba, Sri Punarthirtha Dham";
	// const chakraList = chakras.split(", ");
	// const translatedChakras = ct("chakra_list").split(", ");

	// const chakraMap = chakraList.reduce(
	// 	(acc: { [key: string]: string }, chakra: string, index: number) => {
	// 		acc[chakra] = translatedChakras[index];
	// 		return acc;
	// 	},
	// 	{}
	// );
	// const sortedChakras = Object.keys(chakraMap)
	// 	.sort()
	// 	.reduce(
	// 		(acc, key) => ({
	// 			...acc,
	// 			[key]: chakraMap[key],
	// 		}),
	// 		{}
	// 	);

	const chakrasFlat = [
		// Tulasi mala
		{
			id: 1,
			chakra: "Antar dwip",
			mala: "Tulasi mala",
			maha: "Rasa sagar Ramdas",
			malapathi: "Shiromoni Gaura das",
			chakrapathi: "Gayatri Mataji",
		},
		{
			id: 2,
			chakra: "Nawadwip",
			mala: "Tulasi mala",
			maha: "Rasa sagar Ramdas",
			malapathi: "Shiromoni Gaura das",
			chakrapathi: "Sankapani pr",
		},
		{
			id: 3,
			chakra: "Radhakund",
			mala: "Tulasi mala",
			maha: "Rasa sagar Ramdas",
			malapathi: "Shiromoni Gaura das",
			chakrapathi: "Durga prasad pr",
		},
		{
			id: 4,
			chakra: "Modadruma",
			mala: "Tulasi mala",
			maha: "Premdata Gopinath Das",
			malapathi: "Shiromoni Gaura das",
			chakrapathi: "Karthikeshwara das",
		},
		{
			id: 5,
			chakra: "Mamgachi",
			mala: "Tulasi mala",
			maha: "Premdata Gopinath Das",
			malapathi: "Shiromoni Gaura das",
			chakrapathi: "Suresa Sripathi das",
		},
		{
			id: 6,
			chakra: "Godruma",
			mala: "Tulasi mala",
			maha: "Sanatan Rishi Das",
			malapathi: "Shiromoni Gaura das",
			chakrapathi: "Venu gopal",
		},
		{
			id: 7,
			chakra: "Jagannath Puri",
			mala: "Tulasi mala",
			maha: "Sanatan Rishi Das",
			malapathi: "Shiromoni Gaura das",
			chakrapathi: "Mahaprabhu Manahar Das",
		},

		// Vaijayanthi mala
		{
			id: 8,
			chakra: "Kola",
			mala: "Vaijayanthi mala",
			maha: "Chandramukha Ram das",
			malapathi: "Raghuram Lakshman das",
			chakrapathi: "Krishna Damodar",
		},
		{
			id: 9,
			chakra: "Sri Ranga Dham Chakra",
			mala: "Vaijayanthi mala",
			maha: "Chandramukha Ram das",
			malapathi: "Raghuram Lakshman das",
			chakrapathi: "Sarvananda Gauhari Das",
		},
		{
			id: 10,
			chakra: "Ekachakra",
			mala: "Vaijayanthi mala",
			maha: "Chandramukha Ram das",
			malapathi: "Raghuram Lakshman das",
			chakrapathi: "Krishna Chandra Das",
		},
		{
			id: 11,
			chakra: "Badrika Ashram",
			mala: "Vaijayanthi mala",
			maha: "Chandramukha Ram das",
			malapathi: "Raghuram Lakshman das",
			chakrapathi: "Kesava krsna kishore das",
		},
		{
			id: 12,
			chakra: "Rudra",
			mala: "Vaijayanthi mala",
			maha: "Bahukaruna Nitai Das",
			malapathi: "Raghuram Lakshman das",
			chakrapathi: "Jayagopal Krishna Das",
		},
		{
			id: 13,
			chakra: "Govardhan Giri",
			mala: "Vaijayanthi mala",
			maha: "Bahukaruna Nitai Das",
			malapathi: "Raghuram Lakshman das",
			chakrapathi: "Merged with Rudra",
		},
		{
			id: 14,
			chakra: "Ananta Padmanaba",
			mala: "Vaijayanthi mala",
			maha: "Bahukaruna Nitai Das",
			malapathi: "Raghuram Lakshman das",
			chakrapathi: "Sucaru Jahnava DD & Pr",
		},
		{
			id: 15,
			chakra: "Ahobilam",
			mala: "Vaijayanthi mala",
			maha: "Sanjay Gaura Das",
			malapathi: "Raghuram Lakshman das",
			chakrapathi: "Raja Rao",
		},
		{
			id: 16,
			chakra: "Ritu",
			mala: "Vaijayanthi mala",
			maha: "Sanjay Gaura Das",
			malapathi: "Raghuram Lakshman das",
			chakrapathi: "Dayanidhi Dinesh Das",
		},

		// Nimai mala
		{
			id: 17,
			chakra: "Sri Punarthirtha Dham",
			mala: "Nimai mala",
			maha: "Nirmal Gaura das",
			malapathi: "Padmanabha Nitai Das",
			chakrapathi: "Sachiputra Vishrup das",
		},
		{
			id: 18,
			chakra: "Srivas Angan",
			mala: "Nimai mala",
			maha: "Nirmal Gaura das",
			malapathi: "Padmanabha Nitai Das",
			chakrapathi: "Joy Nitai Chandra Das",
		},
		{
			id: 19,
			chakra: "Pundarik Dham",
			mala: "Nimai mala",
			maha: "Susanto Brajesh Das",
			malapathi: "Padmanabha Nitai Das",
			chakrapathi: "Haricharan Tulasi Das",
		},
		{
			id: 20,
			chakra: "Gupta Gokul dham",
			mala: "Nimai mala",
			maha: "Susanto Brajesh Das",
			malapathi: "Padmanabha Nitai Das",
			chakrapathi: "Padmanetra Murari pr",
		},
		{
			id: 21,
			chakra: "Madhya",
			mala: "Nimai mala",
			maha: "Susanto Brajesh Das",
			malapathi: "Padmanabha Nitai Das",
			chakrapathi: "Sujan Mazumdar",
		},
		{
			id: 22,
			chakra: "Simantha",
			mala: "Nimai mala",
			maha: "Sudhama Das",
			malapathi: "Padmanabha Nitai Das",
			chakrapathi: "Giriraj Goverdan das",
		},
		{
			id: 23,
			chakra: "Nilachal",
			mala: "Nimai mala",
			maha: "Sudhama Das",
			malapathi: "Padmanabha Nitai Das",
			chakrapathi: "Narnarayan pr",
		},

		// Nitai mala
		{
			id: 24,
			chakra: "Keturi Dham",
			mala: "Nitai mala",
			maha: "Anupam Kanai Das",
			malapathi: "Shivnath Ramdas",
			chakrapathi: "Praphulla Padmanabha",
		},
		{
			id: 25,
			chakra: "Ram keli",
			mala: "Nitai mala",
			maha: "Anupam Kanai Das",
			malapathi: "Shivnath Ramdas",
			chakrapathi: "Srinivasa Kumar Das",
		},
		{
			id: 26,
			chakra: "Janu Dwip",
			mala: "Nitai mala",
			maha: "Anupam Kanai Das",
			malapathi: "Shivnath Ramdas",
			chakrapathi: "Asutosh",
		},
		{
			id: 27,
			chakra: "Ayodhya",
			mala: "Nitai mala",
			maha: "Gobinda Gopal das",
			malapathi: "Shivnath Ramdas",
			chakrapathi: "Navaneet Taskar Das",
		},
		{
			id: 28,
			chakra: "Guruvayoor Dham",
			mala: "Nitai mala",
			maha: "Gobinda Gopal das",
			malapathi: "Shivnath Ramdas",
			chakrapathi: "Bindumati Radha DD",
		},
		{
			id: 29,
			chakra: "Sri Kashi Dham",
			mala: "Nitai mala",
			maha: "To be updated",
			malapathi: "Shivnath Ramdas",
			chakrapathi: "Nityananda Nilambara das",
		},
		{
			id: 30,
			chakra: "Sri Adi Kesava Dham",
			mala: "Nitai mala",
			maha: "To be updated",
			malapathi: "Shivnath Ramdas",
			chakrapathi: "-",
		},
		{
			id: 31,
			chakra: "Prayag",
			mala: "Nitai mala",
			maha: "To be updated",
			malapathi: "Shivnath Ramdas",
			chakrapathi: "Namarupa gopal",
		},
	];

	const sortedChakras = chakrasFlat.filter(
		(c) => c.mala === malaNameMapping[mala]
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

			let chakraobj = sortedChakras.find((c) => c.id.toString() === chakra);

			setSummary({
				phone_no,
				email,
				members: new_members,
				topUpCredit,
				chakra: chakraobj?.chakra,
				mala: chakraobj?.mala,
				maha: chakraobj?.maha,
				malapathi: chakraobj?.malapathi,
				chakrapathi: chakraobj?.chakrapathi,
				url_mala: mala,
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
			<div className="w-full mx-auto grid grid-cols-3 bg-orange-600">
				<button
					className="text-orange-100 px-4 col-start-1"
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
				<div className="col-start-3 flex w-2 items-center justify-end px-4"></div>
			</div>
			<div className="max-w-2xl mx-auto p-4 md:p-6 lg:p-8 bg-white rounded shadow">
				<div className="flex justify-center items-center pt-2 pb-6">
					<StepProcess />
				</div>
				<form onSubmit={handleSubmit}>
					{locale !== "en" && (
						<div className="italic text-center text-sm text-orange-600 mb-4">
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
							{sortedChakras.map((chakra) => (
								<option key={chakra.id} value={chakra.id}>
									{chakra.chakra as React.ReactNode}
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
						<div className="text-gray-500 text-xs italic mb-2">
							{/* {t("mobile_no_hint")} #2025 */}
							{`Please enter your personal email ID since confirmation mail will be sent to this address`}
						</div>
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
							{/* {t("mobile_no_hint")} #2025 */}
							{`Please enter your personal mobile number (excluding the country code)`}
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
							className="flex w-full border-2 gap-2 border-dashed border-orange-500 text-orange-600 py-1 px-4 rounded justify-center items-center"
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
					{/* Commented out #2025 */}
					{/* <div className="mb-4">
						<h1 className="text block text-gray-700 font-bold mb-2">
							{t("registration_fees_title")}
						</h1>
						<div className="text-gray-500 text-xs italic mb-2">
							{t("registration_fees_hint")}
						</div>
						<div className="border-2 border-orange-600 text-orange-600 py-1 px-4 rounded flex items-center justify-center">
							10 KKD
						</div>
					</div> */}
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
										? "bg-orange-600 border-2 border-orange-600 text-orange-100"
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
						className="flex w-full gap-2 bg-orange-600 text-orange-100 py-1 px-4 rounded justify-center items-center"
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
