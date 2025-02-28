import React from "react";
import "@/styles/globals.css";

function layout({ children }: { children: React.ReactNode }) {
	return (
		<html className="">
			<body>
				<main>{children}</main>
			</body>
		</html>
	);
}

export default layout;
