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
exports.deleteSettings = exports.findAndUpdateSetting = exports.getOneSetting = exports.getSetting = exports.createSetting = void 0;
const setting_model_1 = __importDefault(require("../models/setting.model"));
function createSetting(input) {
    return __awaiter(this, void 0, void 0, function* () {
        return setting_model_1.default.create(input);
    });
}
exports.createSetting = createSetting;
function getSetting(query) {
    return __awaiter(this, void 0, void 0, function* () {
        return setting_model_1.default.find(query).lean();
    });
}
exports.getSetting = getSetting;
function getOneSetting(query) {
    return __awaiter(this, void 0, void 0, function* () {
        return setting_model_1.default.findOne(query).lean();
    });
}
exports.getOneSetting = getOneSetting;
function findAndUpdateSetting(query, update, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return setting_model_1.default.findOneAndUpdate(query, update, options);
    });
}
exports.findAndUpdateSetting = findAndUpdateSetting;
function deleteSettings(query) {
    return __awaiter(this, void 0, void 0, function* () {
        return setting_model_1.default.deleteOne(query);
    });
}
exports.deleteSettings = deleteSettings;
