
import { AppDataTable } from "@/components/app-data-table";
import { columnMovie } from "@/components/columns/column-movie";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import React from "react";

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
// {
//       "adult": false,
//       "backdrop_path": "/hAQnXxOwCjgYcKRgTdYPRC8neqL.jpg",
//       "genre_ids": [
//         28,
//         18
//       ],
//       "id": 811941,
//       "original_language": "te",
//       "original_title": "దేవర: Part 1",
//       "overview": "Devara, a fearless man from a coastal region, embarks on a perilous journey into the treacherous world of the sea to safeguard the lives of his people. Unbeknownst to him, his brother Bhaira is plotting a conspiracy against him. As events unfold, Devara passes on his legacy to his mild-mannered and timid son, Varada.",
//       "popularity": 381.982,
//       "poster_path": "/ystWz0wW4vwgcWzmkhPXavms9jz.jpg",
//       "release_date": "2024-09-26",
//       "title": "Devara: Part 1",
//       "video": false,
//       "vote_average": 7.1,
//       "vote_count": 163
//     },

async function page() {
	const result = await getMovies({ page: 1 });

	

	return (
		<div className="container mx-auto py-10 ">
			<AppDataTable
				columns={columnMovie}
				data={result.results}
			/>

			<div className="pt-10">
				<Pagination>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious href="#" />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">1</PaginationLink>
						</PaginationItem>

						<PaginationItem>
							<PaginationLink href="#">1</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<PaginationNext href="#" />
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</div>
	);
}

export default page;
