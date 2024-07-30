import { Favorite } from "./Favorite";
import { Genre } from "./Genre";
import { Review } from "./Review";
import { Watchlist } from "./Watchlist";

export interface MovieSeries {
  id?: string;
  title?: string;
  description?: string;
  release_date?: string;
  genre?: Genre[];
  director?: string;
  cast?: string;
  trailer_url?: string;
  poster_url?: string;
  type?: string;
  created_at?: string;
  updated_at?: string;
  favorites?: Favorite[];
  reviews?: Review[];
  watchlist?: Watchlist[];
}