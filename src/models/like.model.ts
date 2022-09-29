import mongoose from "mongoose";
import { LikeDocument as LikeDocument } from "../documents/like.document";

const likeSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    liked: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const LikeModel = mongoose.model<LikeDocument>("Like", likeSchema);
export default LikeModel;
