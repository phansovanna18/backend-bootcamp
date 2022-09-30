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
exports.deleteSettingsHandler = exports.updateSettingHandler = exports.getSettingHandler = exports.createSettingHandler = void 0;
const setting_service_1 = require("../service/setting.service");
function createSettingHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = res.locals.user._id;
        const body = Object.assign({}, req.body);
        const setting = yield (0, setting_service_1.createSetting)(body);
        return res.send(setting);
    });
}
exports.createSettingHandler = createSettingHandler;
function getSettingHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = res.locals.user._id;
        const setting = yield (0, setting_service_1.getSetting)({ user: userId });
        if (!setting) {
            return res.status(403).send({ msg: "Setting not not found!" });
        }
        return res.status(200).send(setting);
    });
}
exports.getSettingHandler = getSettingHandler;
function updateSettingHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = res.locals.user._id;
        const settingId = req.params.settingId;
        const body = req.body;
        const setting = yield (0, setting_service_1.getOneSetting)({ _id: settingId });
        if (!setting) {
            return res.status(403).send({ msg: "setting not foung" });
        }
        if (String(setting.user) !== userId) {
            return res.status(401).send({ msg: "Not allowed" });
        }
        const updateSetting = yield (0, setting_service_1.findAndUpdateSetting)({ _id: settingId }, Object.assign({}, body), { new: true });
        return res.send(updateSetting);
    });
}
exports.updateSettingHandler = updateSettingHandler;
function deleteSettingsHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const settingsId = req.body.settingsId;
        settingsId.forEach((id) => {
            (0, setting_service_1.deleteSettings)({ _id: id });
        });
        return res.status(200).send({ msg: "Deleted Successfully" });
    });
}
exports.deleteSettingsHandler = deleteSettingsHandler;
