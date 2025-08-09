import React from "react";

export default function Loading() {
	return (
		<div className="h-screen w-full flex justify-center items-center">
			{/* big spinner */}
			<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
		</div>
	);
}

Loading;
