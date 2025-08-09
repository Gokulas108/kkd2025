"use client";

import { useRouter, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default function ChangeLang({ select = false }) {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	const handleChange = (e) => {
		if (select) {
			if (
				confirm(
					"Changing language will reload the page. Are you sure you want continue?"
				)
			)
				router.push(pathname, { locale: e });
		} else router.push(pathname, { locale: e });
	};

	const langs = [
		{
			label: "English",
			value: "en",
		},
		{
			label: "हिंदी",
			value: "hi-IN",
		},
		{
			label: "বাংলা",
			value: "bn-IN",
		},
		{
			label: "தமிழ்",
			value: "ta-IN",
		},
		{
			label: "മലയാളം",
			value: "ml-IN",
		},
		{
			label: "తెలుగు",
			value: "te-IN",
		},
		{
			label: "ಕನ್ನಡ",
			value: "kn-IN",
		},
	];

	return select ? (
		<></>
	) : (
		// Uncomment the following lines if you want to use change language #2025
		// <select
		// 	className="text-xs text-right bg-transparent text-slate-100"
		// 	value={locale}
		// 	onChange={(e) => handleChange(e.target.value)}
		// >
		// 	{langs.map((lang, index) => (
		// 		<option key={index} value={lang.value}>
		// 			{lang.label}
		// 		</option>
		// 	))}
		// </select>
		<div className="flex justify-center flex-wrap gap-4 p-1 px-4 w-full">
			{langs.map((lang, index) => {
				return (
					<button
						key={index}
						onClick={() => handleChange(lang.value)}
						className={`border-2 border-slate-700 ${
							lang.value === locale
								? "bg-slate-800 text-slate-100"
								: "text-slate-700"
						} hover:bg-slate-700 hover:text-slate-100 px-2 rounded-lg transition-all`}
						value={lang.value}
					>
						{lang.label}
					</button>
				);
			})}
		</div>
	);
}
