import { Request, Response } from "express";
import { LikeDocument } from "../documents/like.document";
import {
  dislikeAUser,
  getAllLikedUsers,
  getAllMatchedUsers,
  likeAUser,
} from "../service/like.service";
import { findUser } from "../service/user.service";
import log from "../utils/logger";

export async function getLikedUsersHandler(req: Request, res: Response) {
  try {
    const userId = res.locals.user._id;

    const likedUsers = await getAllLikedUsers(userId);
    res.json(likedUsers);
  } catch (e: any) {
    log.error(e);
    return res.status(409).send(e.message);
  }
}

export async function likeAUserHandler(req: Request, res: Response) {
  try {
    const userId = res.locals.user._id;

    res.json(await likeAUser(req.body, userId));
  } catch (e: any) {
    log.error(e);
    return res.status(409).send(e.message);
  }
}

export async function dislikeAUserHandler(req: Request, res: Response) {
  try {
    const userId = res.locals.user._id;

    res.json(await dislikeAUser(req.body, userId));
  } catch (e: any) {
    log.error(e);
    return res.status(409).send(e.message);
  }
}

export async function getAllMatchedUsersHandler(req: Request, res: Response) {
  try {
    const userId = res.locals.user._id;

    res.json(await getAllMatchedUsers(userId));
  } catch (e: any) {
    log.error(e);
    return res.status(409).send(e.message);
  }
}
