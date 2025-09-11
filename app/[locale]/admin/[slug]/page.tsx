"use client";
import ChangeLang from "@/app/_components/ChangeLang";
import { MdArrowBack } from "react-icons/md";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/app/utils/supabase/client";
import * as XLSX from "xlsx";

const malaNameMapping: { [key: string]: string } = {
	nimai: "Nimai mala",
	nitai: "Nitai mala",
	vaijayanthi: "Vaijayanthi mala",
	tulasi: "Tulasi mala",
};

const validSlugs = Object.keys(malaNameMapping);

async function getData(
	slug: string,
	search: string,
	sort: string,
	order: string,
	page: number
) {
	const supabase = createClient();
	let query = supabase
		.from("kkd2025")
		.select("*", { count: "exact" })
		.eq("mala", malaNameMapping[slug]);
	if (search) {
		query = query.or(
			`name.ilike.%${search}%,email.ilike.%${search}%,phone_no.ilike.%${search}%,chakra.ilike.%${search}%,mahachakrapathi.ilike.%${search}%,malapathi.ilike.%${search}%`
		);
	}
	if (sort) {
		query = query.order(sort, { ascending: order === "asc" });
	}
	// Remove pagination: fetch all rows
	const { data, error, count } = await query;
	return { data, error, count };
}

function Loader() {
	return (
		<div className="flex justify-center items-center h-32">
			<div className="animate-spin rounded-full h-12 w-12 border-t-4 border-orange-500 border-solid"></div>
		</div>
	);
}

function ErrorMsg({ error }: { error: string }) {
	return <div className="text-red-600 text-center p-4">{error}</div>;
}

function ExportCSV({ rows }: { rows: any[] }) {
	// Get mala value from first row, fallback to ""
	const mala = rows[0]?.mala || "";
	function handleExport() {
		if (!rows.length) return;
		const exportColumns = [
			"name",
			"age",
			"volunteer",
			"email",
			"phone_no",
			"chakra",
			"chakrapathi",
			"mahachakrapathi",
			"malapathi",
			"mala",
			"fees",
			"created_at",
		];
		// Prepare data for SheetJS
		const data = [
			exportColumns,
			...rows.map((row) => exportColumns.map((col) => row[col] ?? "")),
		];
		const worksheet = XLSX.utils.aoa_to_sheet(data);
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, "KKD2025");
		const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
		const blob = new Blob([wbout], {
			type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
		});
		const url = URL.createObjectURL(blob);
		// Format date as YYYYMMDD
		const now = new Date();
		const dateStr = `${now.getFullYear()}${(now.getMonth() + 1)
			.toString()
			.padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}`;
		// Use mala mapping for file name
		const malaLabel = malaNameMapping[mala] || mala;
		const filename = `DDK-Fest_${malaLabel}_${dateStr}.xlsx`;
		const a = document.createElement("a");
		a.href = url;
		a.download = filename;
		a.click();
		URL.revokeObjectURL(url);
	}
	return (
		<button
			className="bg-white border-orange-50 border-2 text-orange-500 px-2 py-0.5 rounded text-xs"
			onClick={handleExport}
			disabled={!rows.length}
		>
			Export
		</button>
	);
}

const columns = [
	{ key: "name", label: "Name" },
	{ key: "age", label: "Age" },
	{ key: "volunteer", label: "Volunteer" },
	{ key: "email", label: "Email" },
	{ key: "phone_no", label: "Phone No" },
	{ key: "chakra", label: "Chakra" },
	{ key: "chakrapathi", label: "Chakrapathi" },
	{ key: "mahachakrapathi", label: "Mahachakrapathi" },
	// { key: "malapathi", label: "Malapathi" },
	{ key: "fees", label: "Fees" },
	{ key: "created_at", label: "Created At" },
];

const Page = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const params = useParams<{ slug: string }>();
	const { slug } = params;
	const [data, setData] = useState<any[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [count, setCount] = useState<number>(0);
	const [loading, setLoading] = useState<boolean>(true);
	const [search, setSearch] = useState<string>(
		searchParams.get("search") || ""
	);
	const [pendingSearch, setPendingSearch] = useState<string>(search);
	const [sort, setSort] = useState<string>(
		searchParams.get("sort") || "created_at"
	);
	const [order, setOrder] = useState<string>(
		searchParams.get("order") || "desc"
	);
	// Remove pagination
	const [page] = useState<number>(0);

	// Lock screen state
	const [locked, setLocked] = useState(true);
	const [pin, setPin] = useState("");
	const [pinError, setPinError] = useState("");

	const pinMapping = {
		nimai: "1618",
		nitai: "1018",
		vaijayanthi: "1181",
		tulasi: "1016",
	};

	const malapathiMapping = {
		nimai: "Padmanabha Nitai Das",
		nitai: "Shivnath Ramdas",
		vaijayanthi: "Raghuram Lakshman das",
		tulasi: "Shiromoni Gaura das",
	};

	const correctPin: string =
		pinMapping[slug as keyof typeof pinMapping] || "2025";

	useEffect(() => {
		if (locked) return;
		// scroll to top
		window.scrollTo(0, 0);
		if (!validSlugs.includes(slug)) {
			router.push("/error");
			return;
		}
		setLoading(true);
		getData(slug, search, sort, order, 0)
			.then(({ data, error, count }) => {
				setData(data || []);
				setError(error ? error.message : null);
				setCount(count || 0);
			})
			.finally(() => setLoading(false));
	}, [locked, slug, search, sort, order, page]);

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSearch(pendingSearch);
	};

	const handleSort = (col: string) => {
		if (sort === col) {
			setOrder(order === "asc" ? "desc" : "asc");
		} else {
			setSort(col);
			setOrder("asc");
		}
	};

	if (locked) {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
				<div className="bg-white rounded-lg shadow p-6 flex flex-col items-center gap-4">
					<h2 className="text-lg font-bold text-orange-600">
						Admin Access Locked
					</h2>
					<input
						type="password"
						value={pin}
						onChange={(e) => setPin(e.target.value)}
						placeholder="Enter PIN"
						className="border px-4 py-2 rounded text-lg text-center"
						maxLength={8}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								if (pin === correctPin) {
									setLocked(false);
									setPinError("");
								} else {
									setPinError("Incorrect PIN");
								}
							}
						}}
					/>
					<button
						className="bg-orange-500 text-white px-4 py-2 rounded font-semibold"
						onClick={() => {
							if (pin === correctPin) {
								setLocked(false);
								setPinError("");
							} else {
								setPinError("Incorrect PIN");
							}
						}}
					>
						Unlock
					</button>
					{pinError && <div className="text-red-500 text-sm">{pinError}</div>}
				</div>
			</div>
		);
	}

	return (
		<div className="flex flex-col items-center justify-start gap-1 min-h-screen bg-gray-50">
			<div className="w-full mx-auto grid grid-cols-3 bg-orange-600 h-12 items-center">
				<div className="col-start-2 col-span-1 flex items-center justify-center relative">
					<h1 className="text-xs sm:text-sm text-white font-bold text-nowrap">
						{malaNameMapping[slug as keyof typeof malaNameMapping]}{" "}
						{`(${
							malapathiMapping[slug as keyof typeof malapathiMapping] || ""
						})`}
					</h1>
				</div>
				<div className="col-start-3 flex items-center justify-end px-2">
					<ChangeLang select={true} />
				</div>
			</div>
			<div className="flex flex-col justify-center gap-1 bg-white rounded-lg p-2 w-full max-w-6xl shadow">
				<div className="flex flex-col md:flex-row gap-1 items-center justify-between mb-1">
					<span className="text-xs font-semibold">Total: {count ?? 0}</span>
					<form
						className="flex gap-1 flex-wrap w-full max-w-md"
						onSubmit={handleSearch}
					>
						<input
							name="search"
							value={pendingSearch}
							onChange={(e) => setPendingSearch(e.target.value)}
							placeholder="Search Database"
							className="border px-2 py-1 rounded text-xs w-40 sm:w-80 flex-1 min-w-0"
						/>
						<button
							type="submit"
							className="bg-orange-500 text-white px-2 py-0.5 rounded text-xs"
						>
							Search
						</button>
						<button
							type="button"
							className="bg-gray-300 text-gray-700 px-2 py-0.5 rounded text-xs ml-2"
							onClick={() => {
								setPendingSearch("");
								setSearch("");
							}}
						>
							Reset
						</button>
					</form>
					<ExportCSV rows={data || []} />
				</div>
				{error && <ErrorMsg error={error} />}
				{loading ? (
					<Loader />
				) : (
					<div className="overflow-x-auto">
						<table className="min-w-full text-xs border rounded">
							<thead>
								<tr>
									{columns.map((col) => (
										<th
											key={col.key}
											className="p-1 border-b cursor-pointer hover:bg-orange-100 whitespace-nowrap"
											onClick={() => handleSort(col.key)}
										>
											{col.label}
											{sort === col.key ? (order === "asc" ? " ▲" : " ▼") : ""}
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{data && data.length === 0 && (
									<tr>
										<td
											colSpan={columns.length}
											className="text-center p-2 text-xs"
										>
											No data found.
										</td>
									</tr>
								)}
								{data &&
									data.map((row: any) => (
										<tr key={row.id} className="hover:bg-orange-50">
											{columns.map((col) => (
												<td
													key={col.key}
													className="p-1 border-b whitespace-nowrap"
												>
													{col.key === "created_at" && row[col.key]
														? (() => {
																const d = new Date(row[col.key]);
																return `${d
																	.getDate()
																	.toString()
																	.padStart(2, "0")}/${(d.getMonth() + 1)
																	.toString()
																	.padStart(2, "0")}/${d
																	.getFullYear()
																	.toString()
																	.slice(-2)}`;
														  })()
														: row[col.key]?.toString() || ""}
												</td>
											))}
										</tr>
									))}
							</tbody>
						</table>
					</div>
				)}
				{/* Pagination removed */}
			</div>
		</div>
	);
};

export default Page;
