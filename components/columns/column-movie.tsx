"use client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Button } from "../ui/button";

// type Movie = {
// 	adult: boolean;
// 	backdrop_path: string;
// 	genre_ids: number[];
// 	id: number;
// 	original_language: string;
// 	original_title: string;
// 	overview: string;
// 	popularity: number;
// 	poster_path: string;
// 	release_date: string;
// 	title: string;
// 	video: boolean;
// 	vote_average: number;
// 	vote_count: number;
// };

export const columnMovie: ColumnDef<Movie>[] = [
	{
		accessorKey: "adult",
		header: "Adult",
	},
	{
		accessorKey: "backdrop_path",
		header: "Backdrop Path",
		cell: ({ row }) => {
			const backdrop_path = parseFloat(row.getValue("backdrop_path"));

			const full_url = `${process.env.NEXT_PUBLIC_API_IMAGE_PATH}${backdrop_path}`;

			return (
				<div className="text-right font-medium">
					<a href={full_url}>{full_url}</a>
				</div>
			);
		},
	},
	{
		accessorKey: "genre_ids",
		header: "Genre IDs",
	},
	{
		accessorKey: "id",
		header: "ID",
	},
	{
		accessorKey: "original_language",
		header: "Original Language",
	},
	{
		accessorKey: "original_title",
		header: "Original Title",
	},
	{
		accessorKey: "overview",
		header: "Overview",
	},
	{
		accessorKey: "popularity",
		header: "Popularity",
	},
	{
		accessorKey: "poster_path",
		header: "Poster Path",
		cell: ({ row }) => {
			const poster_path = parseFloat(row.getValue("poster_path"));

			const full_url = `${process.env.NEXT_PUBLIC_API_IMAGE_PATH}${poster_path}`;

			return (
				<div className="text-right font-medium">
					<a href={full_url}>{full_url}</a>
				</div>
			);
		},
	},
	{
		accessorKey: "release_date",
		header: "Release Date",
	},
	{
		accessorKey: "title",
		header: "Title",
	},
	{
		accessorKey: "video",
		header: "Video",
	},
	{
		accessorKey: "vote_average",
		header: "Vote Average",
	},
	{
		accessorKey: "vote_count",
		header: "Vote Count",
	},
	{
		accessorKey: "actions",
		header: "Actions",
		cell: ({ row }) => {
			const id = row.getValue("id");

			return (
				<div className="">
					<Link href={`/movies/${id}/`}>
						<Button variant="default">View</Button>
					</Link>
				</div>
			);
		},
	},
];
