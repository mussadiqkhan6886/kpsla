import cloudinary from "@/lib/config/cloudinary";
import { connectDB } from "@/lib/config/database";
import { EventSchema } from "@/lib/models/EventSchema";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const events = await EventSchema.find({ isPast: true }).sort({ date: -1 });
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
    const location = formData.get("location");
    const category = formData.get("category");

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
      location,
      category,
      image: imageUrl,
      isPast: true,
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