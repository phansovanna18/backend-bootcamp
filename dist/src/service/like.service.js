"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMatchedUsers = exports.dislikeAUser = exports.likeAUser = exports.getAllLikedUsers = void 0;
const like_model_1 = __importDefault(require("../models/like.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
function getAllLikedUsers(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield like_model_1.default.find({ user: yield user_model_1.default.findById(userId) })).map((ele) => {
            ele.liked;
        });
    });
}
exports.getAllLikedUsers = getAllLikedUsers;
function likeAUser(input, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield user_model_1.default.findById(userId);
        const existing_Liked = yield like_model_1.default.findOne({
            user: user,
            liked: input.liked,
        });
        // If CURRENT USER already like the given user
        if (existing_Liked)
            return existing_Liked;
        return like_model_1.default.create({
            user: user,
            liked: input.liked,
        });
    });
}
exports.likeAUser = likeAUser;
function dislikeAUser(query, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return like_model_1.default.findOneAndDelete({
            user: yield user_model_1.default.findById(userId),
            liked: query.liked,
        });
    });
}
exports.dislikeAUser = dislikeAUser;
function getAllMatchedUsers(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield user_model_1.default.findById(userId);
        const likedUsers = yield getAllLikedUsers(userId);
        const matches = [];
        for (let i = 0; i < likedUsers.length; i++) {
            const matched = yield like_model_1.default.findOne({
                user: likedUsers[i],
                liked: user,
            });
            if (matched)
                matches.push(matched);
        }
        return matches;
    });
}
exports.getAllMatchedUsers = getAllMatchedUsers;
