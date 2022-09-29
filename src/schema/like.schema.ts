import { string, object, TypeOf } from "zod";

const payload = {
  body: object({
    liked: string({ required_error: "liked (userId) is required" }),
  }),
};

export const likeActionSchema = object({ ...payload });
