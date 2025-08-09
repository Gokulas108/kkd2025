"use client";
import Form from "./_comps/Form";
import Slot from "./_comps/Slot";
import { useEffect, useState } from "react";
import Summary from "./_comps/Summary";
import { createClient } from "@/app/utils/supabase/client";

export default function App() {
	useEffect(() => {
		// Scroll to the top of the page when the component is mounted
		window.scrollTo(0, 0);
		// Create a supabase client on the browser with project's credentials
	}, []);

	return (
		<div className="App">
			<Form />
		</div>
	);
}
