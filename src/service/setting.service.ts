import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";
import SettingModel from "../models/setting.model";
import { SettingDocument } from "../documents/setting.document";

export async function createSetting(
  input: DocumentDefinition<Omit<SettingDocument, "createdAt" | "updatedAt">>
) {
  return SettingModel.create(input);
}

export async function getSetting(query: FilterQuery<SettingDocument>) {
  return SettingModel.find(query).lean();
}

export async function getOneSetting(query: FilterQuery<SettingDocument>) {
  return SettingModel.findOne(query).lean();
}

export async function findAndUpdateSetting(
  query: FilterQuery<SettingDocument>,
  update: UpdateQuery<SettingDocument>,
  options: QueryOptions
) {
  return SettingModel.findOneAndUpdate(query, update, options);
}

export async function deleteSettings(query: FilterQuery<SettingDocument>) {
  return SettingModel.deleteOne(query);
}
