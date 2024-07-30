import { MovieSeries } from "./MovieSeries";

export interface Genre {
  genre_id?: string;
  name?: string;
  created_at?: string;
  updated_at?: string;
  movieSeries?: MovieSeries[];
}