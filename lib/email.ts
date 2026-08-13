import nodemailer from "nodemailer";

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: SendEmailParams) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const developerEmail = process.env.DEVELOPER_EMAIL;

  // Option 1: Send via Resend REST API (No SMTP setup needed!)
  if (resendApiKey) {
    try {
      const from = process.env.EMAIL_FROM || "TeamSetu <onboarding@resend.dev>";
      const bccList = developerEmail ? [developerEmail] : [];

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          bcc: bccList,
          subject,
          html,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Email sent successfully via Resend API:", data.id);
        return true;
      } else {
        const errorData = await response.json();
        console.error("Resend API returned error:", errorData);
      }
    } catch (error) {
      console.error("Failed to send email via Resend API:", error);
    }
  }

  // Option 2: Fallback to SMTP if SMTP credentials are provided
  if (process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      const from = process.env.SMTP_FROM || `"TeamSetu" <${process.env.SMTP_USER}>`;
      const mailOptions: nodemailer.SendMailOptions = {
        from,
        to,
        subject,
        html,
      };

      if (developerEmail) {
        mailOptions.bcc = developerEmail;
      }

      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully via SMTP:", info.messageId);
      return true;
    } catch (error) {
      console.error("Failed to send email via SMTP:", error);
    }
  }

  console.warn("No email dispatch credentials found. Please set RESEND_API_KEY or SMTP credentials in your .env file.");
  return false;
}
