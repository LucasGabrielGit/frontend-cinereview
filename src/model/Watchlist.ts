import { MovieSeries } from "./MovieSeries";
import { User } from "./User";

export interface Watchlist {
  watchlist_id: string;
  user_id: string;
  movie_series_id: string;
  created_at: string;
  movie_series: MovieSeries;
  user: User;
}