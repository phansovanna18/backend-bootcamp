import mongoose from "mongoose"
import { UserDocument } from "./users.document"

export interface SettingDocument extends mongoose.Document{
    user: UserDocument['_id']
    find_distance: string
    find_age: string
    find_sex: string
    language: string
    createdAt: Date
    updatedAt: Date
}