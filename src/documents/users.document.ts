import mongoose from "mongoose"

export interface UserDocument extends mongoose.Document {
    name: string
    username: string
    email: string
    password: string
    bio: string
    gender: string
    likes: UserDocument['_id']
    image: string
    location: string
    settingId: string
    socialId: string
    active: boolean
    createAt: Date;
    upateAt: Date;
    comparePassword(candidatePassword: string) : Promise<Boolean>;
  }