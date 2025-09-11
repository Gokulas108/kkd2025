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
			mala: summary.mala,
			malapathi: summary.malapathi,
			mahachakrapathi: summary.maha,
			chakrapathi: summary.chakrapathi,
			// chakra_id: summary.chakra_id, // #2025
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
		redirect("/error?mala=" + summary.url_mala);
	}

	// Insert the summary data into the database
	const { data, error } = await client.from("kkd2025").insert(toInsert);

	if (error) {
		console.error("Error inserting data:", error);
		redirect("/error?mala=" + summary.url_mala);
	}

	console.log("Data inserted successfully:", data);
	await sendEmail({ summary });

	redirect("/registration/confirm?mala=" + summary.url_mala);
}

export async function sendEmail({ summary }: any) {
	// Create a Nodemailer transporter using Gmail

	const dateMapping: { [key: string]: string } = {
		nimai: "12th December 2025",
		nitai: "19th December 2025",
		vaijayanthi: "5th December 2025",
		tulasi: "26th December 2025",
	};

	const url = summary.email || "";
	const to = url.trim();
	let eventDate = dateMapping[summary.url_mala] || ""; // Replace with your actual event date

	let membersList = summary.members
		.map((member: any) => `<li>${member.name} (Age: ${member.age})</li>`)
		.join("");

	let text = `
<table width="100%" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; color: #333; background-color: #f4f4f4; padding: 20px;">
  <tr>
    <td align="center">
      <!-- Main Container -->
      <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #ddd;">
        
        <!-- Header Banner -->
        <tr>
          <td style="background-color: #0056b3; color: #ffffff; text-align: center; padding: 20px;">
            <h1 style="margin: 0; font-size: 24px;">DDK Fest 2025</h1>
          </td>
        </tr>
        
        <!-- Body Content -->
        <tr>
          <td style="padding: 20px;">
            <h2 style="color: #0056b3; margin-top: 0;">Welcome!</h2>

            <!-- Event Details -->
			<p><strong>Mala:</strong> ${summary.mala}</p>
			<p><strong>Chakra:</strong> ${summary.chakra}</p>
            <p><strong>Event Date:</strong> ${eventDate}</p>

            <p>Thank you for registering for the event. The following members have been successfully registered:</p>
            <ul style="padding-left: 20px; margin-top: 10px; margin-bottom: 20px;">
              ${membersList}
            </ul>
            <p>We look forward to your participation and hope you have an enjoyable experience at DDK Fest 2025.</p>
            <p style="margin-top: 30px;">Best regards,<br><em>The DDK Fest Team</em></p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color: #f0f0f0; color: #555; text-align: center; font-size: 12px; padding: 15px;">
            <p style="margin: 0;">For any questions, please contact us at <a href="mailto:kkd.sdo@gmail.com" style="color: #0056b3; text-decoration: none;">kkd.sdo@gmail.com</a></p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
`;

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
		subject: "Registration Confirmation for DDK Fest 2025",
		html: text,
	};

	try {
		await transporter.sendMail(mailOptions);
	} catch (error: any) {
		console.error("Error sending email:", error);
		return { success: false, message: error.message };
	}

	return { success: true, message: "Email sent successfully" };
}
