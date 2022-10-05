import dotenv from 'dotenv';
import { Schema, model } from "mongoose";
dotenv.config()

const userSchema = new Schema(
  {
    name: {
      type: String,
      index: { unique: true },
      required: true,
    },
    wallets: {
      type: [String],
    },
    following: {
      type: [Schema.Types.ObjectId],
    }
  }
);

export default model("User", userSchema, 'user');