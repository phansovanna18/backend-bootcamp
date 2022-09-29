import mongoose from "mongoose";
import { SettingDocument } from "../documents/setting.document";

const settingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    find_distance: { type: String, required: true },
    find_age_min: { type: Number, required: true, default: 18 },
    find_age_max: { type: Number, required: true, default: 50 },
    find_sex: { type: String, required: true },
    language: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const settingModel = mongoose.model<SettingDocument>("Setting", settingSchema);

export default settingModel;
