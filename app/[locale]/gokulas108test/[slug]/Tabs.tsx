"use client";
import { FC, ReactNode, useState, useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { verifyRegistration, markForCorrection } from "./action";
import { BiSolidError } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";

type props = {
	paid: any;
	registered: any;
	slug: string;
};

const Tabs: FC<props> = ({ paid, registered, slug }) => {
	const [tab, setTab] = useState<"paid" | "registered">("registered");
	const [search, setSearch] = useState("");
	const [marked, setMarked] = useState(-1);
	const [correction, setCorrection] = useState("");
	const [loaders, setLoaders] = useState({
		verify: -1,
		correction: false,
	});

	const content = tab === "paid" ? paid : registered;

	//calculate total amount of content
	const contentTotal = Object.keys(content)?.reduce(
		(acc: number, item: any) => {
			return acc + content[item].total;
		},
		0
	);

	//search by email or name functionality {
	const searchContent = (content: any, search: string) => {
		const searchResult: any = {};
		Object.keys(content).forEach((item: any) => {
			const data = content[item].data.filter((data: any) => {
				return (
					data.name.toLowerCase().includes(search.toLowerCase()) ||
					item.toLowerCase().includes(search.toLowerCase())
				);
			});
			if (data.length > 0) {
				searchResult[item] = {
					data: data,
					total: content[item].total,
				};
			}
		});
		return searchResult;
	};

	const verifyReg = async (details: any, email: string, index: number) => {
		//confirm whether the user wants to verify the registration
		const confirm = window.confirm(
			"Are you sure ? Make sure all details are correct, as this action cannot be undone. \n\nA confirmation mail and ticket will be sent to " +
				email
		);

		if (!confirm) {
			return;
		}

		setLoaders({ ...loaders, verify: index });
		const response = await verifyRegistration(details, email, slug);
		if (response.success) {
			toast.success("Registration verified successfully.");
		} else {
			toast.error("There was some error! Try again later.");
		}
		setLoaders({ ...loaders, verify: -1 });
	};

	const submitCorrection = async (details: any) => {
		if (correction === "") {
			alert("Enter correction details!");
			return;
		}
		setLoaders({ ...loaders, correction: true });

		const response = await markForCorrection({
			details,
			correction,
			slug,
		});

		if (response.success) {
			toast.success("Registration marked for correction.");
		} else {
			toast.error("There was some error! Try again later.");
		}

		setLoaders({ ...loaders, correction: false });
		setCorrection("");
		setMarked(-1);
	};

	const cancelCorrection = () => {
		setMarked(-1);
		setCorrection("");
	};

	const openCorrection = (index: number) => {
		setCorrection("");
		setMarked(index);
	};

	const searchedContent = search ? searchContent(content, search) : content;

	return (
		<div className="max-w-xl w-full mx-auto">
			<Toaster />
			{/* a list of instructions in italics */}
			<div className="text-xs mt-4 mx-2 p-2 rounded italic text-slate-600 border-2 border-slate-600">
				<ul className="pl-5 list-disc">
					<li>Slot 1 - Friday - 12:30 PM</li>
					<li>Slot 2 - Friday - 5:15 PM</li>
					<li>Slot 3 - Saturday - 11:00 AM</li>
					<li>
						Total of an individual is calculated as :{" "}
						{"( Top Up credit + Registration Fees (5 KKD) ) x No. of Slots"}{" "}
					</li>
					<li>
						Click on the tabs below to switch between verified and unverified
						registrations.
					</li>
					<li>
						Click on the Verify Button to verify the registrations under an
						email ID.
					</li>
					<li>
						Click on Mark for Correction to mark the registration for correction
						and enter the correction details.
					</li>
				</ul>
			</div>
			<div className="flex justify-center items-center gap-4 my-4 mx-2">
				<button
					onClick={() => setTab("registered")}
					className={
						"py-2 px-6 rounded-md border-2 border-slate-900 text-sm w-1/2 " +
						(tab === "registered"
							? "bg-slate-800 text-white"
							: "text-slate-800")
					}
				>
					Unverified
				</button>
				<button
					onClick={() => setTab("paid")}
					className={
						"py-2 px-6 rounded-md border-2 border-slate-900 text-sm w-1/2 " +
						(tab === "paid" ? "bg-slate-800 text-white" : "text-slate-800")
					}
				>
					Verified
				</button>
			</div>
			<div className="w-full">
				<p className="text-center bg-slate-100 rounded py-2 mx-2 font-semibold border-2 text-sm border-slate-800 text-slate-800">
					{tab === "paid" ? "Verified" : "Unverified"} Amount : {contentTotal}{" "}
					KKD
				</p>
			</div>
			<div className="flex flex-col justify-center items-center gap-2 my-4 mx-2">
				<input
					type="text"
					placeholder="Search by email or name"
					className="border border-gray-300 rounded-md p-2 w-full"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button
					onClick={() => setSearch("")}
					className="text-xs text-right underline w-full text-slate-700 rounded-md"
				>
					Clear
				</button>
			</div>
			<div className="mx-auto flex flex-col gap-6 w-full items-center justify-center">
				{Object.keys(searchedContent).map((item: any, index: number) => (
					<div
						key={index}
						className="w-full mx-2 rounded bg-gray-50 p-4 shadow-lg"
					>
						<div className="flex flex-col gap-2">
							<h4 className="font-semibold text-sm">Email : {item}</h4>
							<table className="w-full text-xs">
								<thead>
									<tr>
										<th className="text-left min-w-[120px]">Name</th>
										<th className="text-center min-w-[50px]">Slots</th>
										<th className="text-center min-w-[50px]">TopUp</th>
										<th className="text-right min-w-[50px]">Total</th>
									</tr>
								</thead>
								<tbody>
									{content[item].data.map((data: any, index: number) => (
										<tr key={index}>
											<td className="min-w-[74px]">{data.name}</td>
											<td className="text-center min-w-[50px]">
												{data.slots.join(", ")}
											</td>
											<td className="text-center min-w-[50px]">
												{data.topUpCredit}
											</td>
											<td className="text-right min-w-[50px]">
												{data.total_amt} KKD
											</td>
										</tr>
									))}
								</tbody>
							</table>
							<p className="text-sm text-right my-2 font-semibold">
								Total Amount : {content[item].total} KKD
							</p>
						</div>
						{content[item].data[0].status === "marked" ? (
							<div className="bg-red-100 text-red-800 text-sm text-center p-2 rounded-md">
								<span>This registration is marked for correction</span>
							</div>
						) : (
							true && (
								<div className="flex gap-2 flex-col">
									<button
										disabled={loaders.verify === index}
										onClick={() => verifyReg(content[item].data, item, index)}
										className="bg-slate-900 flex justify-center items-center gap-2 text-sm text-white py-2 px-6 rounded-md w-full"
									>
										{loaders.verify === index ? (
											<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
										) : (
											<FiCheckCircle className="text-white" />
										)}
										Verify Registration
									</button>
									<button
										onClick={
											marked === index
												? () => cancelCorrection()
												: () => openCorrection(index)
										}
										className="border-slate-800 border-2 flex justify-center items-center gap-2 text-sm text-slate-800 py-2 px-6 rounded-md w-full"
									>
										<BiSolidError className="text-lg" />
										{marked === index ? "Cancel" : "Mark for Correction"}
									</button>
									{marked === index && (
										<>
											<textarea
												className="border border-gray-300 rounded-md p-2 w-full"
												placeholder="Enter the correction details"
												value={correction}
												onChange={(e) => setCorrection(e.target.value)}
											></textarea>
											<button
												disabled={loaders.correction}
												className="bg-slate-900 flex gap-2 items-center justify-center text-sm text-white py-2 px-6 rounded-md w-full"
												onClick={() => submitCorrection(content[item].data)}
											>
												Submit
												{loaders.correction && (
													<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
												)}
											</button>
										</>
									)}
								</div>
							)
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Tabs;
