import {
  createSocialSchema,
  updateSocialSchema,
  getSocialSchema,
  deleteSocialSchema,
} from "./schema/social.schema";
import { Express } from "express";
import { createUserHandler, getOwnUserHandler } from "./controller/user.controller";
import {
  createSocialHandler,
  updateSocialHandler,
  getSocialHandler,
  deleteSocialHandler,
} from "./controller/social.controller";
import {
  createSessionHandler,
  getSessionsHandler,
  deleteSessionHandler,
} from "./controller/session.controller";
import {
  createSettingHandler,
  getSettingHandler,
  updateSettingHandler,
  deleteSettingsHandler,
} from "./controller/setting.controller";
import { createUserSchema } from "./schema/user.schema";
import { createSessionSchema } from "./schema/session.schema";
import { createSettingSchema, updateSettingSchema } from "./schema/setting.schema";
import validateResource from "./middleware/validateResource";
import requireUser from "./middleware/requiredUser";

function routes(app: Express) {
  app.post("/api/users", validateResource(createUserSchema), createUserHandler);
  app.get("/api/users/me", requireUser, getOwnUserHandler);
  app.post(
    "/api/sessions",
    validateResource(createSessionSchema),
    createSessionHandler
  );
  app.get("/api/sessions", requireUser, getSessionsHandler);
  app.delete("/api/sessions", requireUser, deleteSessionHandler);
  app.post(
    "/api/socials",
    [requireUser, validateResource(createSocialSchema)],
    createSocialHandler
  );
  app.patch(
    "/api/socials/:socialId",
    [requireUser, validateResource(updateSocialSchema)],
    updateSocialHandler
  );
  app.get(
    "/api/socials/:socialId",
    validateResource(getSocialSchema),
    getSocialHandler
  );
  app.delete(
    "/api/socials",
    [requireUser, validateResource(deleteSocialSchema)],
    deleteSocialHandler
  );
  app.post(
    "/api/settings",
    requireUser,
    validateResource(createSettingSchema),
    createSettingHandler
  );
  app.get("/api/settings", requireUser, getSettingHandler);
  app.patch(
    "/api/settings/:settingId",
    [requireUser, validateResource(updateSettingSchema)],
    updateSettingHandler
  );
  app.delete("/api/settings", requireUser, deleteSettingsHandler);
}
export default routes;
