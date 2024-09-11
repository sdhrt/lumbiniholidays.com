import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request: NextRequest) {
  const body = await request.json();
  const {
    firstName,
    lastName,
    email,
    message,
    nationality,
    arrivalDate,
    departureDate,
  } = body;

  const transporter = nodemailer.createTransport({
    host: "mail.lumbiniholidays.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_CREDENTIALS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: "info@lumbiniholidays.com",
      subject: `Lumbini holidays inquiry`,
      html: `
            <p>Name: ${firstName} ${lastName} </p>
            <p>Nationality: ${nationality} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            <p>Arrival Date: ${arrivalDate} </p>
            <p>Departure Date: ${departureDate} </p>
            `,
    });

    return Response.json({ message: "Message was sent" });
  } catch (error) {
    console.log(error);
    return Response.error();
  }
}
