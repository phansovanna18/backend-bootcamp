"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const socialSchema = new mongoose_1.default.Schema({
    user: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" },
    facebook_id: { type: String },
    instragram_id: { type: String },
}, {
    timestamps: true
});
const SocialModel = mongoose_1.default.model("Social", socialSchema);
exports.default = SocialModel;
