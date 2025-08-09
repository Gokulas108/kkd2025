"use client";
import { useState } from "react";

export default function Page() {
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);

	const handleEmail = (e: any) => {
		setEmail(e.target.value);
	};

	const handleSubmit = () => {
		setLoading(true);
		//check if email is valid
		if (email === "") {
			alert("Email is required");
		} else if (!email.includes("@") || !email.includes(".")) {
			alert("Email is invalid");
		} else {
			// sendEmail({ to: email })
			// 	.then((res) => {
			// 		if (res.success) {
			// 			alert("Email sent successfully");
			// 		} else {
			// 			alert(res.message || "Error sending email");
			// 		}
			// 	})
			// 	.finally(() => {
			// 		setLoading(false);
			// 	});
		}
	};

	return (
		<div className="w-full mx-auto justify-center items-center p-10">
			<h1 className="text-xl font-bold my-4">Email Confirmation</h1>
			<h2 className="text-slate-600 italic my-4">Enter Email :</h2>
			<input
				onChange={handleEmail}
				type="text"
				className="border-2 border-gray-900 rounded-md p-2"
			/>
			<button
				disabled={loading}
				onClick={handleSubmit}
				className="bg-slate-900 text-white mt-4 py-2 px-6 rounded-md flex items-center justify-center gap-2"
			>
				Send Email
				{loading && (
					<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
				)}
			</button>
		</div>
	);
}
