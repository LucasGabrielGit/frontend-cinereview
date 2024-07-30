import { Review } from "./Review";
import { User } from "./User";

export interface Comment {
  comment_id?: string;
  review_id?: string;
  review?: Review;
  user_id?: string;
  user?: User;
  content?: string;
  created_at?: string; // ISO 8601 date string
  updated_at?: string; // ISO 8601 date string
}