import cloudinary from "@/lib/config/cloudinary";
import { connectDB } from "@/lib/config/database";
import { RegistrationSchema } from "@/lib/models/RegistrationSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const formData = await req.formData();
    
    // Extract file
    const file = formData.get("profilePicture") as File;
    let imageUrl = "";

    if (file && file.size > 0) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const uploadResult: any = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          { folder: "kpsla" },
          (error, result) => (error ? reject(error) : resolve(result))
        ).end(buffer);
      });
      imageUrl = uploadResult.secure_url;
    }

    // Convert FormData to Object
    const data = Object.fromEntries(formData.entries());
    
    // Handle arrays and booleans manually
    const registration = await RegistrationSchema.create({
      ...data,
      profilePicture: imageUrl,
      extracurriculars: formData.getAll("extracurriculars"),
      parentalConsent: data.parentalConsent === "true",
    });

    return NextResponse.json(registration, { status: 201 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message || "Registration failed" }, { status: 500 });
  }
}

export async function GET() {
  await connectDB();
  const students = await RegistrationSchema.find({}).sort({ registeredAt: -1 });
  return NextResponse.json(students);
}

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();
    const { id } = await req.json();
    await RegistrationSchema.findByIdAndDelete(id);
    return NextResponse.json({ message: "Record deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}