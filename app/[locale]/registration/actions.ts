"use server";

import nodemailer from "nodemailer";
import QRCode from "qrcode";
import { createClient } from "@/app/utils/supabase/server";
import { redirect } from "next/navigation";

export async function submitForm({ summary, slots, lang }: any) {
	const client = await createClient();

	// const email_res = await client
	// 	.from("registered_users")
	// 	.select("email")
	// 	.eq("email", summary.email.trim());

	// if (email_res.error) {
	// 	redirect("/error");
	// }

	// if (email_res?.data?.length !== 0) {
	// 	redirect("/email-error");
	// }

	// #2025
	// slots = slots.map((slot: any) => {
	// 	switch (slot) {
	// 		case "slot_1":
	// 			return 1;
	// 		case "slot_2":
	// 			return 2;
	// 		case "slot_3":
	// 			return 3;
	// 		default:
	// 			return 1;
	// 	}
	// });

	let toInsert = summary.members.map((member: any) => {
		if (slots.length === 0) return null;
		if (member.name === "" || member.age === "") return null;
		if (
			summary.phone_no === "" ||
			summary.email === "" ||
			summary.chakra === ""
		)
			return null;
		if (summary.topUpCredit === "" || summary.topUpCredit === 0) return null;

		if (isNaN(parseInt(member.age))) return null;

		const fee_per_slot = 10;
		let topUpCredit;
		let registration_fees;
		let total_amt;

		const age = parseInt(member.age);

		if (age < 10) {
			registration_fees = 0;
			topUpCredit = 0;
			total_amt = 0;
		} else {
			registration_fees = fee_per_slot;
			topUpCredit = parseInt(summary.topUpCredit);
			total_amt = (registration_fees + topUpCredit) * slots.length;
		}
		return {
			// slots: slots,
			name: member.name,
			age,
			phone_no: summary.phone_no,
			email: summary.email.trim(),
			chakra: summary.chakra,
			volunteer: member?.volunteer ? "Yes" : "No",
			// topUpCredit, #2025
			fees: registration_fees,
			// total_amt, #2025
			// lang_used: lang, // #2025
		};
	});

	console.log(toInsert);

	// if it contains null return 400
	if (toInsert.includes(null)) {
		redirect("/error");
	}

	// Insert the summary data into the database
	const { data, error } = await client.from("kkd2025").insert(toInsert);

	if (error) {
		console.error("Error inserting data:", error);
		redirect("/error");
	}

	console.log("Data inserted successfully:", data);

	redirect("/registration/confirm");
}

export async function sendEmail({ to }: any) {
	// Create a Nodemailer transporter using Gmail

	const url = to || "";
	let text = "";

	const qrCodeImage = await QRCode.toDataURL(url);
	text = `<div><h3>Please Show this QR Code at the Entrance!</h3><br/><img src="cid:qrImage"/></div>`;
	console.log(qrCodeImage);

	let transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.GMAIL_USER,
			pass: process.env.GMAIL_PASS,
		},
	});

	// Define email options
	let mailOptions = {
		from: process.env.GMAIL_USER,
		to,
		subject: "Welcome To Music & Food Festival 2024",
		html: text,
		attachments: [
			{
				// data uri as an attachment
				path: qrCodeImage,
				cid: "qrImage",
			},
		],
	};

	try {
		await transporter.sendMail(mailOptions);
	} catch (error: any) {
		console.error("Error sending email:", error);
		return { success: false, message: error.message };
	}

	return { success: true, message: "Email sent successfully" };
}
