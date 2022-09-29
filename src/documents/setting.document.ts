import mongoose from "mongoose";
import { UserDocument } from "./users.document";

export interface SettingDocument extends mongoose.Document {
  user: UserDocument["_id"];
  find_distance: string;
  find_age_min: number;
  find_age_max: number;
  find_sex: string;
  language: string;
  createdAt: Date;
  updatedAt: Date;
}
