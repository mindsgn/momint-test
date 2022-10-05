import dotenv from 'dotenv';
import { Schema, model } from "mongoose";
dotenv.config()

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
    }
  },
);

export default model("Nft", userSchema, "nft");