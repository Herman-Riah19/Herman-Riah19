"use server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEmailAction(
  email: string,
  subject: string,
  message: string
) {
  const mailOptions = {
    from: process.env.EMAIL_USER, 
    to: process.env.EMAIL_TO,    
    subject,
    text: message,
    replyTo: email                
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email envoyé !");
  } catch (error) {
    console.error("Erreur envoi email:", error);
  }
}
