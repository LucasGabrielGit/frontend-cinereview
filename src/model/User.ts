import { Favorite } from "./Favorite";
import { Follower } from "./Follower";
import { Review } from "./Review";
import { Watchlist } from "./Watchlist";

export interface User {
  user_id?: string;
  username?: string;
  email?: string;
  password_hash?: string;
  profile_image?: string;
  bio?: string;
  created_at?: string;
  updated_at?: string;
  name?: string;
  surname?: string;
  comments?: Comment[];
  favorites?: Favorite[];
  following?: Follower[];
  followers?: Follower[];
  reviews?: Review[];

  watchlist?: Watchlist[];
}