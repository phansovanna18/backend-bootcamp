import mongoose from "mongoose"
import { UserDocument } from "./users.document"

export interface SocialDocument extends mongoose.Document{
    user: UserDocument['_id']
    facebook_id: string
    instragram_id: string
    createdAt: Date
    updatedAt: Date
}