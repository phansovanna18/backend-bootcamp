import { DocumentDefinition, FilterQuery } from "mongoose";
import UserModel from "../models/user.model";
import { omit } from "lodash";
import { UserDocument } from '../documents/users.document'

export async function createUser(
  input: DocumentDefinition<
    Omit<UserDocument, "createAt" | "upateAt" | "comparePassword">
  >
) {
    const user = await UserModel.create(input);
    return omit(user.toJSON(), ["password"]);
}

export async function validatePassword({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const user = await UserModel.findOne({ username });
  if (!user) {
    return false;
  }
  const isValid = await user.comparePassword(password);
  if (!isValid) {
    return false;
  }
  return omit(user.toJSON(), ["password"]);
}

export async function findUser(query: FilterQuery<UserDocument>) {
  return UserModel.findOne(query).lean();
}
