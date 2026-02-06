"use server";

import { transporter } from "@/lib/mail/transporter";
import { dark_email_color, light_email_color } from "../coaches";

// !! UPDATE EMAILS

type AdminContactDataType = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  notes: string;
};

export async function sendAdminContactEmail({
  firstName,
  lastName,
  phone,
  email,
  notes,
}: AdminContactDataType) {
  await transporter.sendMail({
    from: `"Contact Form" <${process.env.SMTP_USER}>`,
    to: `<${process.env.SMTP_USER}>`,
    replyTo: `<${email}>`,
    subject: "You have a new inquiry",
    text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Notes:
        ${notes ?? "—"}
    `,
    html: `
      <div style="font-family: 'Arial', sans-serif; line-height: 1.6; background-color: ${light_email_color};">

        <div style="padding: 25px; text-align: center; background-color: ${dark_email_color}; color: ${light_email_color}; font-size: 22px; font-weight: 700;">
          New Contact Form Submission
        </div>

        <div style="padding: 25px; color: ${dark_email_color}; font-size: 16px;">
          <p><strong style="color: ${dark_email_color};">Name:</strong> ${firstName} ${lastName}</p>
          <p><strong style="color: ${dark_email_color};">Email:</strong> ${email}</p>
          <p><strong style="color: ${dark_email_color};">Phone:</strong> ${phone}</p>
          <p><strong style="color: ${dark_email_color};">Notes:</strong><br/>${notes ? notes.replace(/\n/g, "<br/>") : "—"}</p>
        </div>

        <div style="padding: 20px; text-align: center; font-size: 14px; color: ${dark_email_color};">
          This is an automated notification from your website.
        </div>
        
      </div>
    `,
  });
}

type UserContactDataType = {
  firstName: string;
  email: string;
};

export async function sendUserContactEmail({
  firstName,
  email,
}: UserContactDataType) {
  await transporter.sendMail({
    from: `"ESB Wellness Center" <${process.env.SMTP_USER}>`,
    to: `<${email}>`,
    replyTo: `<${process.env.SMTP_USER}>`,
    subject: "Thank You For Reaching Out to ESB Wellness Center",
    text: `
      Thank You for Contacting Us. We have received your message 
      and will get back to you as soon as possible. We look forward 
      to working with you!
    `,
    html: `
      <div style="font-family: 'Arial', sans-serif; line-height: 1.6; background-color: ${light_email_color}; margin: auto;">
        <div style="padding: 20px; text-align: center; background-color: ${dark_email_color}; color: ${light_email_color}; font-size: 22px; font-weight: 700;">
          Thank You for Contacting Us
        </div>

        <div style="padding: 20px; color: ${dark_email_color}; font-size: 16px;">
          <p>Hi ${firstName},</p>
          
          <p>Thank you for reaching out! We have received your message and will get back to you as soon as possible. We look forward to working with you!</p>
          
          <p>Best regards,<br/>
          <strong>ESB Wellness Center</strong></p>
        </div>

        <div style="padding: 20px; text-align: center; font-size: 14px; color: ${dark_email_color};">
          This is an automated confirmation email. Please do not reply directly to this message.
        </div>
      </div>
    `,
  });
}
