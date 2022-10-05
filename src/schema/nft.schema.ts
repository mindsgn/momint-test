import dotenv from 'dotenv';
import { Schema, model } from "mongoose";
dotenv.config()

const nftSchema = new Schema(
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

export default model("Nft", nftSchema, "nft");