"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const settingSchema = new mongoose_1.default.Schema({
    user: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" },
    find_distance: { type: String, required: true },
    find_age_min: { type: Number, required: true, default: 18 },
    find_age_max: { type: Number, required: true, default: 50 },
    find_sex: { type: String, required: true },
    language: { type: String, required: true },
}, {
    timestamps: true,
});
const settingModel = mongoose_1.default.model("Setting", settingSchema);
exports.default = settingModel;
