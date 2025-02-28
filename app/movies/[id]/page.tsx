import React from "react";

async function getMoviesDetail(id: number) {
	const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

	const url = `${apiEndpoint}/3/movie/${id}?language=en-US`;

	const response = await fetch(url, {
		method: "GET",
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
		},
	});

	console.log(response);
	const data = await response.json();

	console.log(data);

	if (!response.ok) {
		throw new Error(data.message || "Failed to fetch data");
	}

	return data;
}

// {
//   "adult": false,
//   "backdrop_path": "/xZm5YUNY3PlYD1Q4k7X8zd2V4AK.jpg",
//   "belongs_to_collection": null,
//   "budget": 0,
//   "genres": [
//     {
//       "id": 28,
//       "name": "Action"
//     },
//     {
//       "id": 35,
//       "name": "Comedy"
//     }
//   ],
//   "homepage": "https://www.netflix.com/title/81307099",
//   "id": 993710,
//   "imdb_id": "tt21191806",
//   "origin_country": [
//     "US"
//   ],
//   "original_language": "en",
//   "original_title": "Back in Action",
//   "overview": "Fifteen years after vanishing from the CIA to start a family, elite spies Matt and Emily jump back into the world of espionage when their cover is blown.",
//   "popularity": 495.418,
//   "poster_path": "/3L3l6LsiLGHkTG4RFB2aBA6BttB.jpg",
//   "production_companies": [
//     {
//       "id": 7076,
//       "logo_path": "/8BFxn9NUWSgp0ndih569Gm62xiC.png",
//       "name": "Chernin Entertainment",
//       "origin_country": "US"
//     },
//     {
//       "id": 121737,
//       "logo_path": null,
//       "name": "Exhibit A",
//       "origin_country": "US"
//     },
//     {
//       "id": 228007,
//       "logo_path": null,
//       "name": "Good One",
//       "origin_country": "US"
//     }
//   ],
//   "production_countries": [
//     {
//       "iso_3166_1": "US",
//       "name": "United States of America"
//     }
//   ],
//   "release_date": "2025-01-15",
//   "revenue": 0,
//   "runtime": 114,
//   "spoken_languages": [
//     {
//       "english_name": "English",
//       "iso_639_1": "en",
//       "name": "English"
//     },
//     {
//       "english_name": "Polish",
//       "iso_639_1": "pl",
//       "name": "Polski"
//     }
//   ],
//   "status": "Released",
//   "tagline": "They're living their best lies.",
//   "title": "Back in Action",
//   "video": false,
//   "vote_average": 6.493,
//   "vote_count": 1040
// }

// type MovieDetail = {
//     adult: boolean;
//     backdrop_path: string;
//     belongs_to_collection: any[];
//     budget: number;
//     genres: { id: number; name: string }[];
//     homepage: string;
//     id: number;
//     imdb_id: string;
//     origin_country: string[];
//     original_language: string;
//     original_title: string;
//     overview: string;
//     popularity: number;
//     poster_path: string;
//     production_companies: { id: number; logo_path: string; name: string; origin_country: string }[];
//     production_countries: { iso_3166_1: string; name: string }[];
//     release_date: string;
//     revenue: number;
//     runtime: number;
//     spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
//     status: string;
//     tagline: string;
//     title: string;
//     video: boolean;
//     vote_average: number;
//     vote_count: number;
// }

async function page({ params: { id } }: { params: { id: number } }) {
	const moviesDetail = await getMoviesDetail(id);
	console.log(moviesDetail);

	return (
		<div>
			<div> Adult : {moviesDetail.adult ? "yes" : "no"}</div>
			<div>
				{" "}
				Backdrop Path :{" "}
				{`${process.env.NEXT_PUBLIC_API_IMAGE_PATH}${moviesDetail.backdrop_path}`}
			</div>
			<div> Budget : {moviesDetail.budget}</div>
			<div> Homepage : {moviesDetail.homepage}</div>
			<div> ID : {moviesDetail.id}</div>
			<div> IMDB ID : {moviesDetail.imdb_id}</div>
			<div> Original Language : {moviesDetail.original_language}</div>
			<div> Original Title : {moviesDetail.original_title}</div>
			<div> Overview : {moviesDetail.overview}</div>
			<div> Popularity : {moviesDetail.popularity}</div>
			<div>
				{" "}
				Poster Path :{" "}
				{`${process.env.NEXT_PUBLIC_API_IMAGE_PATH}${moviesDetail.poster_path}`}{" "}
			</div>

			<div>
				{" "}
				Production company :
				<div>
					{moviesDetail.production_companies.map((company: any) => (
						<div
							key={company.id}
							className=" flex"
						>
							<div> ID : {company.id}</div>
							<div> Logo Path : {company.logo_path}</div>
							<div> Name : {company.name}</div>
							<div> Origin Country : {company.origin_country}</div>
						</div>
					))}
				</div>
			</div>

			<div>
				Production Countries :
				{moviesDetail.production_countries.map((country: any) => (
					<div
						key={country.iso_3166_1}
						className="flex"
					>
						<div>ISO 3166 1 : {country.iso_3166_1}</div>
						<div>Name : {country.name}</div>
					</div>
				))}
			</div>

			<div> Release Date : {moviesDetail.release_date}</div>
			<div> Revenue : {moviesDetail.revenue}</div>
			<div> Runtime : {moviesDetail.runtime}</div>
			<div>
				Spoken Languages :
				{moviesDetail.spoken_languages.map((language: any) => (
					<div
						key={language.iso_639_1}
						className="flex"
					>
						<div>English Name : {language.english_name}</div>
						<div>ISO 639 1 : {language.iso_639_1}</div>
						<div>Name : {language.name}</div>
					</div>
				))}
			</div>
			<div> Status : {moviesDetail.status}</div>
			<div> Tagline : {moviesDetail.tagline}</div>
			<div> Title : {moviesDetail.title}</div>
			<div> Video : {moviesDetail.video}</div>
			<div> Vote Average : {moviesDetail.vote_average}</div>
			<div> Vote Count : {moviesDetail.vote_count}</div>
		</div>
	);
}

export default page;
