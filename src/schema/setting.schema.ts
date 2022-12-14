import { string, object, TypeOf, number } from "zod";

const payload = {
  body: object({
    find_distance: string({ required_error: "find_distance is required" }),
    find_age_min: number({ required_error: "find_age_min is required" }),
    find_age_max: number({ required_error: "find_age_max is required" }),
    find_sex: string({ required_error: "find_sex is required" }),
    language: string({ required_error: "language is required" }),
  }),
};
const params = {
  params: object({
    settingId: string({ required_error: "Title is required" }),
  }),
};

export const createSettingSchema = object({
  ...payload,
});

export const updateSettingSchema = object({
  ...payload,
  ...params,
});

export type CreateSettingInput = TypeOf<typeof createSettingSchema>;
export type UpdateSettingInput = TypeOf<typeof updateSettingSchema>;
