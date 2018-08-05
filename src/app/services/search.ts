interface Search {
  page: number;
  results: {
    adult: boolean;
    poster_path: string;
    overview: string;
    release_date: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number
  }[];
  total_results: number;
  total_pages: number;
}
