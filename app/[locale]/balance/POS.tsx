"use client";
import { useEffect, useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { checkBalance } from "./actions";
import { ImSpinner } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa";

const POS = () => {
	const TIME_OUT = 15;
	const [QRCodeInput, setQRCodeInput] = useState("");
	const [scanStatus, setScanStatus] = useState("pending");
	const [balance, setBalance] = useState(0);

	// a modal to scan the qr code
	const [scan, setScan] = useState(false);

	const handleScan = async (data: any) => {
		console.log(data);
		let i = 0;
		for (i = 0; i < data.length; i++) {
			if (data[i].format === "qr_code") {
				await addTransactions(data[i].rawValue);
			}
		}
	};

	const addTransactions = async (qrCode: string) => {
		setScanStatus("scanning");

		let response: any = await checkBalance(qrCode);

		console.log(response);

		if (response.status === "success") {
			setScanStatus("success");
			setBalance(response.data);
		} else if (response.status === "error") {
			setScanStatus("pending");
			closeScanner();
			alert(response.data || "Error in Checkout! Please try again!");
		}
	};

	const handleError = (err: any) => {
		console.error(err);
		alert("Error! Please try again or try a different Device");
		closeScanner();
	};
	const openScanner = () => {
		setScanStatus("pending");
		setScan(true);
	};
	const closeScanner = () => {
		setScan(false);
	};

	// set a timer for 10 seconds to scan the qr code
	const [timer, setTimer] = useState(TIME_OUT);

	const handleTimer = () => {
		setTimer((prev) => {
			if (prev === 1) {
				setScanStatus("failed");
				return 0;
			}
			return prev - 1;
		});
	};

	useEffect(() => {
		if (scan && scanStatus === "pending") {
			const interval = setInterval(handleTimer, 1000);
			const timeout = setTimeout(() => {
				setScanStatus("failed");
				clearInterval(interval);
			}, TIME_OUT * 1000);
			return () => {
				clearInterval(interval);
				clearTimeout(timeout);
			};
		} else {
			setTimer(TIME_OUT);
		}
	}, [scanStatus, scan, timer]);

	return (
		<>
			<div
				className={
					"fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center" +
					(scan ? "" : " hidden")
				}
			>
				<div className="bg-white p-4 m-4 flex justify-center items-center flex-col rounded-lg w-full max-w-md">
					{scanStatus === "pending" ? (
						<Scanner
							paused={!scan}
							onScan={handleScan}
							onError={handleError}
							styles={{
								container: { width: "100%", height: "100%" },
								video: { width: "100%", height: "100%" },
							}}
							constraints={{ facingMode: "environment" }}
							scanDelay={300}
							components={{
								torch: true,
							}}
						/>
					) : scanStatus === "success" ? (
						<div className="flex flex-col items-center gap-4">
							<h1 className="text-3xl font-bold text-green-600">
								Your Balance is {balance} KKD
							</h1>
							<button
								onClick={() => {
									setScanStatus("pending");
									closeScanner();
								}}
								className="bg-blue-500 text-white py-2 px-4 rounded"
							>
								Close
							</button>
						</div>
					) : scanStatus === "failed" ? (
						<div className="flex flex-col items-center gap-4">
							<h1 className="text-3xl font-bold text-red-600">
								QR Code Scan Failed
							</h1>
							{/* a input that takes whole width and only number can be written with label : Code */}
							<input
								value={QRCodeInput}
								onChange={(e) => setQRCodeInput(e.target.value)}
								placeholder="Enter Code"
								className="w-full p-2 border border-gray-300 rounded"
							/>
							<div className="flex gap-4 w-full items-center justify-center">
								<button
									onClick={async () => {
										await addTransactions(QRCodeInput);
									}}
									className="bg-blue-500 text-white py-2 px-4 rounded"
								>
									Pay
								</button>
								<button
									onClick={() => {
										setScanStatus("pending");
									}}
									className="bg-red-500 text-white py-2 px-4 rounded"
								>
									Try Again
								</button>
							</div>
						</div>
					) : scanStatus === "scanning" ? (
						<ImSpinner className="h-10 w-10 animate-spin" />
					) : null}
					{scanStatus === "pending" && (
						<div className="justify-between w-full flex items-center">
							<button
								onClick={closeScanner}
								className="bg-red-500 text-white py-2 px-4 mt-4 rounded"
							>
								Close
							</button>
							{/* show remaining time */}
							{/* <span className="text-center text-lg text-gray-800 mt-4">
								{timer} seconds remaining
							</span> */}

							<div className="relative w-8 h-8 mt-4">
								<svg
									className="absolute w-full h-full"
									viewBox="0 0 12 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle
										cx="6"
										cy="6"
										r="5"
										stroke="#D1D5DB"
										strokeWidth="2"
										strokeOpacity="0.25"
										fill="none"
									/>
									<circle
										cx="6"
										cy="6"
										r="5"
										stroke="#2563EB"
										strokeWidth="2"
										strokeDasharray={`${(timer / TIME_OUT) * 2 * Math.PI * 5} ${
											2 * Math.PI * 5
										}`}
										strokeLinecap="round"
										fill="none"
									/>
								</svg>
								<span className="absolute w-full h-full text-sm flex items-center justify-center font-semibold text-blue-800">
									{timer}
								</span>
							</div>
						</div>
					)}
				</div>
			</div>
			<div className="mx-auto w-full h-dvh flex flex-col text-center">
				<div className="mx-auto w-full h-full flex flex-col justify-between items-center text-center">
					<div className="max-w-2xl mx-auto">
						<label className="text-gray-500 font-semibold text-center text-[9px] sm:text-xs tracking-[3px]">
							PREMA TARANGA PRESENTS
						</label>
						{/* <Image
						src="/images/logo-wb.png"
						alt="Kirtan-Ruci-2024"
						width={245}
						height={0}
						className="mx-auto mt-4 mb-2"
					/> */}
						<div className="italic text-gray-900">
							27th - 28th December 2024
						</div>
					</div>
					<div className="max-w-2xl mx-auto px-4 my-12 mb-4 flex flex-col gap-8">
						<div className="w-full border-t border-gray-800 flex flex-col gap-2 py-2">
							<button
								onClick={openScanner}
								className="flex w-full py-2 gap-2 bg-slate-800 text-white px-2 rounded justify-between text-sm items-center"
							>
								<span>Check your Balance</span>
								<FaArrowRight />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default POS;
