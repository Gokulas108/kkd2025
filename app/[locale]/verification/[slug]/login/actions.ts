"use server";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { chakrasData } from "../../_utils/chakras";

export async function login(slug: string, pin: string) {
	//get cookies named AuthToken

	const chakra = chakrasData.find((chakra) => chakra.slug === slug);
	if (chakra === undefined) {
		// Trigger the Not Found error
		notFound();
	}

	if (chakra?.password === parseInt(pin)) {
		// redirect to the chakra page
		const cookieStore = await cookies();
		cookieStore.set("authToken", btoa(slug), {
			path: `/`,
			maxAge: 60 * 60, // Valid for 1 hour
		});

		redirect(`/verification/${slug}`);
	} else {
		return "Invalid pin";
	}
}
