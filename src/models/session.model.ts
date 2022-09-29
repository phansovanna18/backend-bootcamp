import { UserDocument } from '../documents/users.document'
import mongoose from "mongoose";

export interface SessionDocument extends mongoose.Document {
    user: UserDocument["_id"];
    valid: boolean;
    userAgent: string;
    createAt: Date;
    upateAt: Date;
  }
  
  const sessionSchema = new mongoose.Schema(
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
      valid: { type: Boolean, default: true },
      userAgent: { type: String}
    },
    {
      timestamps: true,
    }
  );
    
  const SessionModel = mongoose.model<SessionDocument>("Session", sessionSchema);
  export default SessionModel;
  