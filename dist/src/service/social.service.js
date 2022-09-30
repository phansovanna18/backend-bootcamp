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
exports.deleteSocial = exports.findAndUpdateSocial = exports.findSocial = exports.createSocial = void 0;
const social_model_1 = __importDefault(require("../models/social.model"));
function createSocial(input) {
    return __awaiter(this, void 0, void 0, function* () {
        return social_model_1.default.create(input);
    });
}
exports.createSocial = createSocial;
function findSocial(query) {
    return __awaiter(this, void 0, void 0, function* () {
        return social_model_1.default.findOne(query).lean();
    });
}
exports.findSocial = findSocial;
function findAndUpdateSocial(query, update, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return social_model_1.default.findOneAndUpdate(query, update, options);
    });
}
exports.findAndUpdateSocial = findAndUpdateSocial;
function deleteSocial(query) {
    return __awaiter(this, void 0, void 0, function* () {
        return social_model_1.default.deleteOne(query);
    });
}
exports.deleteSocial = deleteSocial;
