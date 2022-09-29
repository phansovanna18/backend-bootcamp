import mongoose from "mongoose";
import { SettingDocument } from "../documents/setting.document";


const settingSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        find_distance: { type: String, required: true },
        find_age: { type: String, required: true },
        find_sex: { type: String, required: true },
        language: { type: String, required: true },
    },
    {
        timestamps: true
    }
)

const settingModel = mongoose.model<SettingDocument>("Setting", settingSchema)

export default settingModel