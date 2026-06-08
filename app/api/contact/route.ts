import { NextResponse } from "next/server";
import { Resend } from "resend";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    
   // Connect MongoDB
await connectDB();

const ipAddress =
  request.headers.get("x-forwarded-for") ||
  request.headers.get("x-real-ip") ||
  "unknown";

// Daily limits
const today = new Date();
today.setHours(0, 0, 0, 0);

// 3 submissions per email per day
const emailCount = await Contact.countDocuments({
  email,
  createdAt: {
    $gte: today,
  },
});

if (emailCount >= 3) {
  return NextResponse.json(
    {
      success: false,
      message:
        "You have reached the maximum number of enquiries allowed today. Please try again tomorrow.",
    },
    { status: 429 }
  );
}

// Max 10 submissions per IP per day
const ipCount = await Contact.countDocuments({
  ipAddress,
  createdAt: {
    $gte: today,
  },
});

if (ipCount >= 10) {
  return NextResponse.json(
    {
      success: false,
      message:
        "Too many requests from your network. Please try again tomorrow.",
    },
    { status: 429 }
  );
}

// Save enquiry
const savedContact = await Contact.create({
  name,
  email: email.toLowerCase().trim(),
  subject,
  message,
  ipAddress,
});

// console.log("Contact Saved:", savedContact._id);

    // Admin Email
    const adminEmailResponse = await resend.emails.send({
      from: "Konetrix Solutions <contact@konetrixsolutions.in>",
      to: "admin@konetrixsolutions.in", 
      replyTo: email,
      subject: `New Contact Request: ${subject}`,
      html: `
        <h2>New Contact Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (adminEmailResponse.error) {
      // console.error(adminEmailResponse.error);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send admin email",
          error: adminEmailResponse.error,
        },
        { status: 500 }
      );
    }

    // Auto Reply
    const userEmailResponse = await resend.emails.send({
      from: "support @Konetrix Solutions <support@konetrixsolutions.in>",
      to: email, // user email
      subject: "We've received your message",
      html: `
        <h2>Thank you for contacting Konetrix Solutions</h2>

        <p>Hi ${name},</p>

        <p>
          We have received your enquiry successfully.
        </p>

        <p>
          Our team will review your request and get back to you shortly.
        </p>

        <br />

        <p>Regards,</p>
        <p>Konetrix Solutions</p>
      `,
    });

    if (userEmailResponse.error) {
      // console.error(userEmailResponse.error);

      return NextResponse.json(
        {
          success: false,
          message: "Admin email sent but auto-reply failed",
          error: userEmailResponse.error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully",
        enquiryId: savedContact._id,
        adminEmailId: adminEmailResponse.data?.id,
        userEmailId: userEmailResponse.data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    // console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}