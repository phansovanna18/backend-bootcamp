"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const social_schema_1 = require("./schema/social.schema");
const user_controller_1 = require("./controller/user.controller");
const social_controller_1 = require("./controller/social.controller");
const session_controller_1 = require("./controller/session.controller");
const setting_controller_1 = require("./controller/setting.controller");
const user_schema_1 = require("./schema/user.schema");
const session_schema_1 = require("./schema/session.schema");
const setting_schema_1 = require("./schema/setting.schema");
const validateResource_1 = __importDefault(require("./middleware/validateResource"));
const requiredUser_1 = __importDefault(require("./middleware/requiredUser"));
const like_controller_1 = require("./controller/like.controller");
const like_service_1 = require("./service/like.service");
const like_schema_1 = require("./schema/like.schema");
function routes(app) {
    app.post("/api/users", (0, validateResource_1.default)(user_schema_1.createUserSchema), user_controller_1.createUserHandler);
    app.get("/api/users/me", requiredUser_1.default, user_controller_1.getOwnUserHandler);
    app.patch("/api/users/me", requiredUser_1.default, user_controller_1.getOwnUserHandler);
    app.post("/api/sessions", (0, validateResource_1.default)(session_schema_1.createSessionSchema), session_controller_1.createSessionHandler);
    app.get("/api/sessions", requiredUser_1.default, session_controller_1.getSessionsHandler);
    app.delete("/api/sessions", requiredUser_1.default, session_controller_1.deleteSessionHandler);
    app.post("/api/socials", [requiredUser_1.default, (0, validateResource_1.default)(social_schema_1.createSocialSchema)], social_controller_1.createSocialHandler);
    app.patch("/api/socials/:socialId", [requiredUser_1.default, (0, validateResource_1.default)(social_schema_1.updateSocialSchema)], social_controller_1.updateSocialHandler);
    app.get("/api/socials/:socialId", (0, validateResource_1.default)(social_schema_1.getSocialSchema), social_controller_1.getSocialHandler);
    app.delete("/api/socials", [requiredUser_1.default, (0, validateResource_1.default)(social_schema_1.deleteSocialSchema)], social_controller_1.deleteSocialHandler);
    app.post("/api/settings", requiredUser_1.default, (0, validateResource_1.default)(setting_schema_1.createSettingSchema), setting_controller_1.createSettingHandler);
    app.get("/api/settings", requiredUser_1.default, setting_controller_1.getSettingHandler);
    app.patch("/api/settings/:settingId", [requiredUser_1.default, (0, validateResource_1.default)(setting_schema_1.updateSettingSchema)], setting_controller_1.updateSettingHandler);
    app.delete("/api/settings", requiredUser_1.default, setting_controller_1.deleteSettingsHandler);
    // LIKE route
    app.get("/api/like", requiredUser_1.default, like_service_1.getAllLikedUsers);
    app.put("/api/like", [requiredUser_1.default, (0, validateResource_1.default)(like_schema_1.likeActionSchema)], like_controller_1.likeAUserHandler);
    app.delete("/api/like", [requiredUser_1.default, (0, validateResource_1.default)(like_schema_1.likeActionSchema)], like_controller_1.dislikeAUserHandler);
    app.get("/api/like/matched", requiredUser_1.default, like_controller_1.getAllMatchedUsersHandler);
}
exports.default = routes;
