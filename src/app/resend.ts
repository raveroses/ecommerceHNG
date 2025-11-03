import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, userName } = await request.json();

    await resend.emails.send({
      from: "odekunlewaris@gmail.com", // Use verified domain
      to: email,
      subject: "Your Order is in Process",
      html: `<p>Hi ${userName},</p><p>Congrats on your <strong>purchase</strong>!</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }
  }
}
