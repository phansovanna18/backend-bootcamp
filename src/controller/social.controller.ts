import { Request, Response } from "express";
import {
  CreateSocialInput,
  UpdateSocialInput,
  ReadSocialInput,
  DeleteSocialInput,
} from "../schema/social.schema";
import {
  createSocial,
  findSocial,
  findAndUpdateSocial,
} from "../service/social.service";

export async function createSocialHandler(
  req: Request<{}, {}, CreateSocialInput["body"]>,
  res: Response
) {
  const userId = res.locals.user._id;
  const body = req.body;
  const social = await createSocial({
    ...body, user: userId,
    facebook_id: "",
    instragram_id: ""
  });
  return res.send(social);
}
export async function getSocialHandler(req: Request, res: Response) {
  const _socialId = req.params.socialId
  const social = await findSocial({ _id: _socialId })
  if(!social){
    res.status(403).send({ msg: "User not found"})
  }
  return res.status(200).send(social)
}
export async function updateSocialHandler(req: Request, res: Response) {
  const userId = res.locals.user._id;
  const _socialId = req.params.socialId;
  const update = req.body;
  const social = await findSocial({ _id: _socialId });

  if (!social) {
    return res.sendStatus(404);
  }

  if (String(social.user) !== userId) {
    return res.sendStatus(403);
  }
  const updatedSocial = await findAndUpdateSocial({ _id: _socialId },{...update}, {new: true});
  return res.send(updatedSocial);
}

export async function deleteSocialHandler(req: Request, res: Response) {}
