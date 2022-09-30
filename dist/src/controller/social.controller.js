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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSocialHandler = exports.updateSocialHandler = exports.getSocialHandler = exports.createSocialHandler = void 0;
const social_service_1 = require("../service/social.service");
function createSocialHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = res.locals.user._id;
        const body = req.body;
        const social = yield (0, social_service_1.createSocial)(Object.assign(Object.assign({}, body), { user: userId, facebook_id: "", instragram_id: "" }));
        return res.send(social);
    });
}
exports.createSocialHandler = createSocialHandler;
function getSocialHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const _socialId = req.params.socialId;
        const social = yield (0, social_service_1.findSocial)({ _id: _socialId });
        if (!social) {
            res.status(403).send({ msg: "User not found" });
        }
        return res.status(200).send(social);
    });
}
exports.getSocialHandler = getSocialHandler;
function updateSocialHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = res.locals.user._id;
        const _socialId = req.params.socialId;
        const update = req.body;
        const social = yield (0, social_service_1.findSocial)({ _id: _socialId });
        if (!social) {
            return res.sendStatus(404);
        }
        if (String(social.user) !== userId) {
            return res.sendStatus(403);
        }
        const updatedSocial = yield (0, social_service_1.findAndUpdateSocial)({ _id: _socialId }, Object.assign({}, update), { new: true });
        return res.send(updatedSocial);
    });
}
exports.updateSocialHandler = updateSocialHandler;
function deleteSocialHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () { });
}
exports.deleteSocialHandler = deleteSocialHandler;
