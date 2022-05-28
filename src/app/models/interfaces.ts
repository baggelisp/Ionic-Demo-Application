export interface MoviesResponse {
	page: number;
	total_results: number;
	total_pages: number;
	results: Movie[];
}

export interface Movie {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}



interface GernesInt {
	id: number;
	name: string;
}

export interface MovieDetails {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: any;
	budget: number;
	genres: GernesInt[];
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: any;
	production_countries: any;
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: any;
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}