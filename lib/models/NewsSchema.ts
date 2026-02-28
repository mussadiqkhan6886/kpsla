import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  image: { type: String, required: true}, 
});

export const NewsSchema = mongoose.models.News || mongoose.model("News", newsSchema)