"use client";

import React, { useMemo } from "react";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationPrevious,
} from "./ui/pagination";
import { AppDataTable } from "./app-data-table";
import { columnMovie } from "./columns/column-movie";
import { Select, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { SelectContent, SelectItem } from "./ui/select";

async function getMovies({ page }: { page: number }) {
	const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

	const url = `${apiEndpoint}/3/movie/popular?language=en-US&page=${page}`;

	const response = await fetch(url, {
		method: "GET",
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
		},
	});

	const data = await response.json();

	console.log(data);

	if (!response.ok) {
		throw new Error(data.message || "Failed to fetch data");
	}

	return data;
}

function ListingMovie() {
	const [page, setPage] = React.useState(1);

	const data = useMemo(async () => {
		const result = await getMovies({ page });
		return {
			page: result.page,
			results: result.results,
		};
	}, [page]);

	return (
		<div>
			<div className="container mx-auto py-10 ">
				<AppDataTable
					columns={columnMovie}
					data={data.results}
				/>

				<div className="pt-10">
					<Select onValueChange={(value) => setPage(value)}>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Page" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="1">1</SelectItem>
							<SelectItem value="2">2</SelectItem>
							<SelectItem value="3">3</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
		</div>
	);
}

export default ListingMovie;
