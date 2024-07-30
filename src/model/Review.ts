import { MovieSeries } from "./MovieSeries";
import { User } from "./User";

export interface Review {
  review_id?: string;
  user_id?: string;
  user?: User;
  movie_series_id?: string;
  movie_series?: MovieSeries;
  rating?: number;
  comment?: string;
  created_at?: string;
  updated_at?: string;
  comments?: Comment[];
}