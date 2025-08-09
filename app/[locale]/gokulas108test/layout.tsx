import Image from "next/image";
import { notFound } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
	if (!children) {
		// Trigger the Not Found error
		notFound();
	}
	return (
		<>
			<div className="w-full mx-auto grid grid-cols-3 bg-slate-900">
				<div className="col-start-2 col-span-1 flex items-center justify-center relative">
					<Image
						src="/images/header-logo.png"
						alt="Kirtan-Ruci-2024"
						width={250}
						height={0}
						className="mx-auto my-3"
					/>
				</div>
				<div className="col-start-3 flex items-center justify-end px-4 m-2"></div>
			</div>
			{children}
		</>
	);
}
