import { number, object, string, TypeOf } from 'zod'

const payload = {
    body: object({
      
    }),
  };
  
  const params = {
    params: object({
      socialId: string({
        required_error: "socialId is required",
      }),
    }),
  };

  export const createSocialSchema = object({
    ...payload
  })

  export const updateSocialSchema  = object({
    ...params,
    ...payload
  })

  export const deleteSocialSchema = object({
    ...params,
  });
  
  export const getSocialSchema = object({
    ...params,
  });
  
export type CreateSocialInput = TypeOf<typeof createSocialSchema>;
export type UpdateSocialInput = TypeOf<typeof updateSocialSchema>;
export type ReadSocialInput = TypeOf<typeof getSocialSchema>;
export type DeleteSocialInput = TypeOf<typeof deleteSocialSchema>;
