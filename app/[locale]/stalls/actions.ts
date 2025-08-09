"use server";

import nodemailer from "nodemailer";
import QRCode from "qrcode";
import { createClient } from "@/app/utils/supabase/server";
import { redirect } from "next/navigation";

export async function submitForm({
	name,
	email,
	phone_no,
	chakra,
	stalls,
	lang,
	hennaStallResponse,
	clothingStallResponse,
}: any) {
	const client = await createClient();
	let toInsert = stalls.map((stall: any) => {
		return {
			CR_name: name,
			CR_email: email,
			CR_phone_no: phone_no,
			chakra,
			type: stall.stall,
			contribution_type: stall.type,
			preferred_day: stall.preferred_day,
			cusine_1: stall.cuisine1,
			cusine_2: stall.cuisine2,
			cusine_3: stall.cuisine3,
			stall_incharge_name: stall.stall_incharge_name,
			stall_incharge_phone_no: stall.stall_incharge_phone,
			kitchen_equipments: stall.equipment_needed || "",
			lang,
		};
	});

	if (hennaStallResponse) {
		toInsert[0].mehendi_contact = hennaStallResponse;
	}
	if (clothingStallResponse) {
		toInsert[0].cloth_stall_contact = clothingStallResponse;
	}

	console.log(toInsert);

	// Insert the summary data into the database
	const { data, error } = await client.from("stalls").insert(toInsert);

	if (error) {
		console.error("Error inserting data:", error);
		redirect("/error");
	}

	console.log("Data inserted successfully:", data);

	redirect("/stalls_x/confirm");
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
