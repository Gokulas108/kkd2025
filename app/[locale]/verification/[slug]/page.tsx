import { notFound, redirect } from "next/navigation";
import { chakrasData } from "../_utils/chakras";
import { cookies } from "next/headers";
import Tabs from "./Tabs";
import { createClient } from "@/app/utils/supabase/server";

export default async function Page({
	params,
	searchParams,
}: {
	params: Promise<{ slug: string }>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
	const slug = (await params).slug;

	//get cookies named AuthToken
	const cookieStore = await cookies();
	const authToken = cookieStore.get("authToken");

	if (!authToken || authToken.value !== btoa(slug)) {
		redirect(`/verification/${slug}/login`);
	}

	const chakra = chakrasData.find((chakra) => chakra.slug === slug);
	if (chakra === undefined) {
		// Trigger the Not Found error
		notFound();
	}

	const client = await createClient();
	const { data, error } = await client
		.from("registered_users")
		.select(
			"id, name, slots, age, phone_no, email, total_amt, topUpCredit, status"
		)
		.eq("chakra", chakra.name)
		.order("email");

	if (error) {
		console.error(error);
		redirect("/error");
	}

	let grandTotal = 0;

	const groupByEmail = (data: any) => {
		return data.reduce((acc: any, curr: any) => {
			const cleanedEmail = curr.email.trim().toLowerCase();
			let status = curr.status === "paid" ? "paid" : "registered";
			if (!acc[status]) {
				acc[status] = {};
			}
			if (acc[status]?.[cleanedEmail]) {
				acc[status][cleanedEmail].data.push(curr);
				acc[status][cleanedEmail].total += curr.total_amt;
			} else {
				acc[status][cleanedEmail] = {
					data: [curr],
					total: curr.total_amt,
				};
			}
			grandTotal = grandTotal + curr.total_amt;
			return acc;
		}, {});
	};

	const groupedData = groupByEmail(data || []);
	console.log(groupedData);

	const registered = groupedData.registered || {};
	const paid = groupedData.paid || {};

	return (
		<div className="w-full mx-auto max-w-xl">
			<h1 className="text-xl font-bold text-center my-4">{chakra.name}</h1>
			<div className="w-full ">
				<p className="text-center bg-slate-100 rounded py-2 mx-2 font-semibold border-2 text-sm border-slate-800 text-slate-800">
					Total Amount to be paid : {grandTotal} KKD
				</p>
			</div>
			<Tabs registered={registered} paid={paid} slug={slug} />
		</div>
	);
}
