import cloudinary from "@/lib/config/cloudinary";
import { connectDB } from "@/lib/config/database";
import { EventSchema } from "@/lib/models/EventSchema";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const events = await EventSchema.find({}).sort({ date: -1 });
  return NextResponse.json(events);
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const formData = await req.formData();
    
    const file = formData.get("image") as File;
    const title = formData.get("title");
    const description = formData.get("description");
    const date = formData.get("date");
    const time = formData.get("time");
    const location = formData.get("location");
    const category = formData.get("category");
    const isPast = formData.get("isPast") === "true";

    let imageUrl = "";
    if (file && file.size > 0) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const uploadResult: any = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          { folder: "kpsla", resource_type: "image" },
          (error, result) => (error ? reject(error) : resolve(result))
        ).end(buffer);
      });
      imageUrl = uploadResult.secure_url;
    }

    const newEvent = await EventSchema.create({
      title,
      description,
      date,
      time,
      location,
      category,
      image: imageUrl,
      isPast,
    });

    return NextResponse.json(newEvent, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add event" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();
    const { id } = await req.json();
    await EventSchema.findByIdAndDelete(id);
    return NextResponse.json({ message: "Event deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    await connectDB();
    const { id, isPast } = await req.json();
    const updatedEvent = await EventSchema.findByIdAndUpdate(
      id, 
      { isPast: isPast }, 
      { new: true }
    );
    return NextResponse.json(updatedEvent);
  } catch (error) {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}