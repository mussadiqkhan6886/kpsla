import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema({
  name: { type: String, required: true}, 
  role: { type: String, required: true}, 
  text: { type: String, required: true}, 
});

export const ReviewsSchema = mongoose.models.Reviews || mongoose.model("Reviews", reviewsSchema)