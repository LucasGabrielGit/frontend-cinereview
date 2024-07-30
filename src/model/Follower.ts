import { User } from "./User";

export interface Follower {
  follower_id: string;
  user_id: string;
  followed_user_id: string;
  created_at: string;
  followed_user: User;
  user: User;
}