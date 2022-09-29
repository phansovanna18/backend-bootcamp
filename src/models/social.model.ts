import mongoose from "mongoose";
import { SocialDocument } from "../documents/social.document";

const socialSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        facebook_id: { type: String },
        instragram_id: { type: String },
    },
    {
        timestamps: true
    }
)

const SocialModel = mongoose.model<SocialDocument>("Social", socialSchema)

export default SocialModel