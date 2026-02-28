import mongoose from "mongoose";


const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String }, 
  category: { type: String, enum: ['Conference', 'Workshop', 'Competition', 'Seminar'] },
  isPast: { type: Boolean, default: false },
});

export const EventSchema = mongoose.models.Event || mongoose.model("Event", eventSchema)