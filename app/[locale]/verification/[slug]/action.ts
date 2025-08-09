"use server";

import nodemailer from "nodemailer";
import QRCode from "qrcode";
import getHTMLEmail from "../_utils/html_code";
import { createClient } from "@/app/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import crypto from "crypto";

function generateCode(email: string) {
	const hash = crypto.createHash("md5").update(email).digest("hex");
	const code = hash.slice(0, 6).toUpperCase();
	return code;
}

// export async function sendEmail({ to }: any) {
// 	// Create a Nodemailer transporter using Gmail

// 	const url = to || "";
// 	let text = "";

// 	const qrCodeImage = await QRCode.toDataURL(url);
// 	text = html;
// 	console.log(qrCodeImage);

// 	let transporter = nodemailer.createTransport({
// 		host: "smtp.titan.email",
// 		port: 465, // or 587 for TLS
// 		secure: true,
// 		auth: {
// 			user: process.env.GMAIL_USER,
// 			pass: process.env.GMAIL_PASS,
// 		},
// 	});

// 	const basePath = process.env.BASE_URL || "http://localhost:3000";

// 	const attachmentPath1 = basePath + "/images/1.png";
// 	const attachmentPath2 = basePath + "/images/3.png";

// 	console.log(attachmentPath1, attachmentPath2);

// 	// Define email options
// 	let mailOptions = {
// 		from: process.env.GMAIL_USER,
// 		to,
// 		subject: "Welcome To Kirtan Ruci 2024",
// 		html: text,
// 		attachments: [
// 			{
// 				// data uri as an attachment
// 				path: qrCodeImage,
// 				cid: "qrImage",
// 			},
// 			{
// 				// data uri as an attachment
// 				path: attachmentPath1,
// 				cid: "1",
// 			},
// 			{
// 				// data uri as an attachment
// 				path: attachmentPath2,
// 				cid: "3",
// 			},
// 		],
// 	};

// 	try {
// 		await transporter.sendMail(mailOptions);
// 	} catch (error: any) {
// 		console.error("Error sending email:", error);
// 		return { success: false, message: error.message };
// 	}

// 	return { success: true, message: "Email sent successfully" };
// }

export async function sendConfirmationMail({ to, details, code }: any) {
	// Create a Nodemailer transporter using Gmail

	const url = code;
	let text = "";

	const qrCodeImage = await QRCode.toDataURL(url);
	text = getHTMLEmail(details, code);

	let transporter = nodemailer.createTransport({
		host: "smtp.titan.email",
		port: 465, // or 587 for TLS
		secure: true,
		auth: {
			user: process.env.GMAIL_USER,
			pass: process.env.GMAIL_PASS,
		},
	});

	const basePath = process.env.BASE_URL || "http://localhost:3000";

	const attachmentPath1 = basePath + "/images/1.png";
	const attachmentPath2 = basePath + "/images/3.png";

	console.log(attachmentPath1, attachmentPath2);

	// Define email options
	let mailOptions = {
		from: process.env.GMAIL_USER,
		to,
		subject: `E-TICKET: ${code} - Kirtan Ruci 2024`,
		html: text,
		attachments: [
			{
				// data uri as an attachment
				path: qrCodeImage,
				cid: "qrImage",
			},
			{
				// data uri as an attachment
				path: attachmentPath1,
				cid: "1",
			},
			{
				// data uri as an attachment
				path: attachmentPath2,
				cid: "3",
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

type Correction = {
	details: any;
	correction: string;
	slug: string;
};

export async function markForCorrection({
	details,
	correction,
	slug,
}: Correction) {
	const ids = details.map((item: any) => item.id);

	const client = await createClient();
	const { data, error } = await client
		.from("corrections")
		.insert([{ email: ids.join(","), correction }]);

	if (error) {
		console.error("Error inserting data:", error);
		return { success: false, message: error.message };
	}

	//update registered_users set status = 'marked' where email = email
	const { data: updateData, error: updateError } = await client
		.from("registered_users")
		.update({ status: "marked" })
		.in("id", ids);

	if (updateError) {
		console.error("Error updating data:", updateError);
		return { success: false, message: updateError.message };
	}

	console.log("Data inserted successfully:", data);
	console.log("Data updated successfully:", updateData);
	revalidatePath(`/verification/${slug}`);
	return { success: true, message: "Updated" };
}

export const verifyRegistration = async (
	details: any,
	email: string,
	slug: string
) => {
	const client = await createClient();

	let cleanEmail = email.trim().toLowerCase();
	let code = generateCode(cleanEmail);

	let ids = details.map((item: any) => item.id);

	const groupedBySlots = details.reduce((acc: any, item: any) => {
		item.slots.forEach((slot: any) => {
			if (!acc[slot.toString()]) {
				acc[slot.toString()] = [];
			}
			acc[slot.toString()].push(item);
		});
		return acc;
	}, {});

	const { data, error } = await client
		.from("registered_users")
		.update({ status: "paid", code })
		.in("id", ids);

	if (error) {
		console.error("Error updating data:", error);
		return { success: false, message: error.message };
	}

	let response = await sendConfirmationMail({
		to: cleanEmail,
		details: groupedBySlots,
		code,
	});
	console.log(response.success, response.message);

	if (!response.success) {
		return { success: false, message: response.message };
	}

	console.log(groupedBySlots);

	console.log("Data updated successfully:", data);
	revalidatePath(`/verification/${slug}`);
	return { success: true, message: "Updated" };
};
