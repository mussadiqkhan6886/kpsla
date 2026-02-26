import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/config/database";
import { TeamSchema } from "@/lib/models/TeamMemberSchema";
import cloudinary from "@/lib/config/cloudinary";

export async function GET() {
  await connectDB();
  const members = await TeamSchema.find().sort({ order: 1 });
  return NextResponse.json(members);
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const formData = await req.formData();
    const file = formData.get("image") as File;
    const name = formData.get("name");
    const role = formData.get("role");
    const bio = formData.get("bio");
    const order = formData.get("order");

    let imageUrl = "";
    if (file) {
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

    const newMember = await TeamSchema.create({ name, role, bio, order, image: imageUrl });
    return NextResponse.json(newMember, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  await connectDB();
  const { id, ...updates } = await req.json();
  const updated = await TeamSchema.findByIdAndUpdate(id, updates, { new: true });
  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest) {
  await connectDB();
  const { id } = await req.json();
  await TeamSchema.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted" });
}