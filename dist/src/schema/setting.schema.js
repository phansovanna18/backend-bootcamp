"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSettingSchema = exports.createSettingSchema = void 0;
const zod_1 = require("zod");
const payload = {
    body: (0, zod_1.object)({
        find_distance: (0, zod_1.string)({ required_error: "find_distance is required" }),
        find_age_min: (0, zod_1.number)({ required_error: "find_age_min is required" }),
        find_age_max: (0, zod_1.number)({ required_error: "find_age_max is required" }),
        find_sex: (0, zod_1.string)({ required_error: "find_sex is required" }),
        language: (0, zod_1.string)({ required_error: "language is required" }),
    }),
};
const params = {
    params: (0, zod_1.object)({
        settingId: (0, zod_1.string)({ required_error: "Title is required" }),
    }),
};
exports.createSettingSchema = (0, zod_1.object)(Object.assign({}, payload));
exports.updateSettingSchema = (0, zod_1.object)(Object.assign(Object.assign({}, payload), params));
