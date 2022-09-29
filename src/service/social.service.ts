import { SocialDocument } from "../documents/social.document";
import SocialModel from "../models/social.model";

import {
  DocumentDefinition,
  FilterQuery,
  QueryOptions,
  UpdateQuery,
} from "mongoose";

export async function createSocial(
  input: DocumentDefinition<Omit<SocialDocument, "createdAt" | "updatedAt">>
) {
  return SocialModel.create(input);
}

export async function findSocial(
  query: FilterQuery<SocialDocument>
) {
    return SocialModel.findOne(query).lean();
}

export async function findAndUpdateSocial(
  query: FilterQuery<SocialDocument>,
  update: UpdateQuery<SocialDocument>,
  options: QueryOptions
) {
  return SocialModel.findOneAndUpdate(query, update, options);
}

export async function deleteSocial(query: FilterQuery<SocialDocument>) {
  return SocialModel.deleteOne(query);
}
