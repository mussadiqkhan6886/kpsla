import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, email, role, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Organizer App" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Organizer Application: ${firstName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #2563eb;">New Volunteer/Organizer Application</h2>
          <p><strong>Name:</strong> ${firstName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Preferred Role:</strong> ${role}</p>
          <p><strong>Experience/Message:</strong></p>
          <p style="background: #f8fafc; padding: 15px; border-radius: 8px;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Application sent successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}