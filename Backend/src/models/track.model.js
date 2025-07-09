import mongoose, { Schema } from "mongoose";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";

const trackSchema = new Schema(
  {
    count: {
      type: Number,
      required: true,
      trim: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);


export const Track = mongoose.model("Track", trackSchema); 
