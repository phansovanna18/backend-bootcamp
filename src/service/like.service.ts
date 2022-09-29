import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";
import LikeModel from "../models/like.model";
import { LikeDocument } from "../documents/like.document";
import { UserDocument } from "../documents/users.document";
import UserModel from "../models/user.model";

export async function getAllLikedUsers(userId: string) {
  return (await LikeModel.find({ user: await UserModel.findById(userId) })).map(
    (ele) => {
      ele.liked;
    }
  );
}

export async function likeAUser(
  input: DocumentDefinition<
    Omit<LikeDocument, "createdAt" | "updatedAt" | "user">
  >,
  userId: string
) {
  const user = await UserModel.findById(userId);

  const existing_Liked = await LikeModel.findOne({
    user: user,
    liked: input.liked,
  });

  // If CURRENT USER already like the given user
  if (existing_Liked) return existing_Liked;

  return LikeModel.create({
    user: user,
    liked: input.liked,
  });
}

export async function dislikeAUser(
  query: DocumentDefinition<
    Omit<LikeDocument, "createdAt" | "updatedAt" | "user">
  >,
  userId: string
) {
  return LikeModel.findOneAndDelete({
    user: await UserModel.findById(userId),
    liked: query.liked,
  });
}

export async function getAllMatchedUsers(
  userId: string
) {
  const user = await UserModel.findById(userId);

  const likedUsers = await getAllLikedUsers(userId);

  const matches = [];

  for (let i = 0; i < likedUsers.length; i++) {
    const matched = await LikeModel.findOne({
      user: likedUsers[i],
      liked: user,
    });
    if (matched) matches.push(matched);
  }

  return matches;
}
