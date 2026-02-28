import { connectDB } from "@/lib/config/database";
import { ReviewsSchema } from "@/lib/models/ReviewSchema";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const reviews = await ReviewsSchema.find({}).sort({ _id: -1 });
    return NextResponse.json(reviews, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const { name, role, text } = body;

    if (!name || !role || !text) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const newReview = await ReviewsSchema.create({ name, role, text });
    return NextResponse.json(newReview, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create review" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();
    const { id } = await req.json();
    
    if (!id) return NextResponse.json({ error: "ID is required" }, { status: 400 });

    await ReviewsSchema.findByIdAndDelete(id);
    return NextResponse.json({ message: "Review deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}