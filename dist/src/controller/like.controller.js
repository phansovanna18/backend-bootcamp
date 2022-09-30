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
exports.getAllMatchedUsersHandler = exports.dislikeAUserHandler = exports.likeAUserHandler = exports.getLikedUsersHandler = void 0;
const like_service_1 = require("../service/like.service");
const logger_1 = __importDefault(require("../utils/logger"));
function getLikedUsersHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userId = res.locals.user._id;
            const likedUsers = yield (0, like_service_1.getAllLikedUsers)(userId);
            res.json(likedUsers);
        }
        catch (e) {
            logger_1.default.error(e);
            return res.status(409).send(e.message);
        }
    });
}
exports.getLikedUsersHandler = getLikedUsersHandler;
function likeAUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userId = res.locals.user._id;
            res.json(yield (0, like_service_1.likeAUser)(req.body, userId));
        }
        catch (e) {
            logger_1.default.error(e);
            return res.status(409).send(e.message);
        }
    });
}
exports.likeAUserHandler = likeAUserHandler;
function dislikeAUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userId = res.locals.user._id;
            res.json(yield (0, like_service_1.dislikeAUser)(req.body, userId));
        }
        catch (e) {
            logger_1.default.error(e);
            return res.status(409).send(e.message);
        }
    });
}
exports.dislikeAUserHandler = dislikeAUserHandler;
function getAllMatchedUsersHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userId = res.locals.user._id;
            res.json(yield (0, like_service_1.getAllMatchedUsers)(userId));
        }
        catch (e) {
            logger_1.default.error(e);
            return res.status(409).send(e.message);
        }
    });
}
exports.getAllMatchedUsersHandler = getAllMatchedUsersHandler;
