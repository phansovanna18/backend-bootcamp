import mongoose from "mongoose";
import { UserDocument } from "./users.document";

export interface LikeDocument extends mongoose.Document {
  user: UserDocument["_id"];
  liked: UserDocument["_id"];
}
