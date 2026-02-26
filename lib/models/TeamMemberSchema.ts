import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true }, 
  bio: { type: String },
  image: { type: String },
  order: { type: Number }, // To control who shows first (Chairman = 1)
});

export const TeamSchema = mongoose.models.Team || mongoose.model("Team", teamSchema)