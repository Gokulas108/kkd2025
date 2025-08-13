import { use } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import { Montserrat } from "next/font/google";
import type { Viewport } from "next";
import { routing } from "@/i18n/routing";

const space_g = Montserrat({
	weight: ["100", "200", "300", "400", "500", "700", "800", "900"], // Add all the available font weights
	subsets: ["latin"], // You can choose the subsets you need (e.g., 'latin', 'cyrillic', etc.)
});

export const metadata: Metadata = {
	title: "DDK-Fest | 2025",
	description: "Dance Drama & Kirtan Festival 2025",
};

export const viewport: Viewport = {
	themeColor: "#f54a00",
};

export default function RootLayout(
	props: Readonly<{
		children: React.ReactNode;
		params: any;
	}>
) {
	const params = use(props.params) as { locale: string };

	const { locale } = params;

	const { children } = props;

	// if (!routing.locales.includes(locale as any)) {
	// 	notFound();
	// }
	const messages = useMessages();

	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			<body className={space_g.className}>{children}</body>
		</NextIntlClientProvider>
	);
}
