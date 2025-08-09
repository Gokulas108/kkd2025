"use server";
import { createClient } from "@/app/utils/supabase/server";

export async function checkBalance(qrCode: string) {
	try {
		const client = await createClient();
		const { data, error } = await client
			.from("balance")
			.select("balance")
			.eq("qrcode", qrCode)
			.single();

		// return { status: "success", data: "Your Balance is " };
		if (data) {
			return { status: "success", data: data.balance };
		} else {
			return { status: "error", data: "No balance data found" };
		}
	} catch (error: any) {
		console.error(error);
		return { status: "error", data: error.message };
	}
}
