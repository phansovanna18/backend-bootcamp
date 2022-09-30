"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSocialSchema = exports.deleteSocialSchema = exports.updateSocialSchema = exports.createSocialSchema = void 0;
const zod_1 = require("zod");
const payload = {
    body: (0, zod_1.object)({}),
};
const params = {
    params: (0, zod_1.object)({
        socialId: (0, zod_1.string)({
            required_error: "socialId is required",
        }),
    }),
};
exports.createSocialSchema = (0, zod_1.object)(Object.assign({}, payload));
exports.updateSocialSchema = (0, zod_1.object)(Object.assign(Object.assign({}, params), payload));
exports.deleteSocialSchema = (0, zod_1.object)(Object.assign({}, params));
exports.getSocialSchema = (0, zod_1.object)(Object.assign({}, params));
