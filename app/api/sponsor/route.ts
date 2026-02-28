import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { companyName, corporateEmail } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Sponsor Inquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Sponsorship Inquiry: ${companyName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #059669;">New Sponsorship Inquiry</h2>
          <p><strong>Company:</strong> ${companyName}</p>
          <p><strong>Corporate Email:</strong> ${corporateEmail}</p>
          <p>Please follow up with this lead as soon as possible.</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Inquiry sent successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send inquiry" }, { status: 500 });
  }
}