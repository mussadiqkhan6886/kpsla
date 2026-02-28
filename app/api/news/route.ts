import cloudinary from "@/lib/config/cloudinary";
import { connectDB } from "@/lib/config/database";
import { NewsSchema } from "@/lib/models/NewsSchema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    await connectDB()

    const news = await NewsSchema.find({})

    return NextResponse.json({success: true, news}, {status: 200})
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const formData = await req.formData();
    const file = formData.get("image") as File;

    if (!file) return NextResponse.json({ error: "No image provided" }, { status: 400 });

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadResult: any = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: "kpsla" },
        (error, result) => (error ? reject(error) : resolve(result))
      ).end(buffer);
    });

    const news = await NewsSchema.create({ image: uploadResult.secure_url });
    return NextResponse.json(news, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();
    const { id } = await req.json();
    await NewsSchema.findByIdAndDelete(id);
    return NextResponse.json({ message: "News deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}