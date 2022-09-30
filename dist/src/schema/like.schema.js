"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likeActionSchema = void 0;
const zod_1 = require("zod");
const payload = {
    body: (0, zod_1.object)({
        liked: (0, zod_1.string)({ required_error: "liked (userId) is required" }),
    }),
};
exports.likeActionSchema = (0, zod_1.object)(Object.assign({}, payload));
