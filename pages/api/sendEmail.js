import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { message } = req.body;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com",
        pass: "your-email-password",
      },
    });

    try {
      await transporter.sendMail({
        from: "your-email@gmail.com",
        to: "lindiwethaby@hotmail.com",
        subject: "New Contact Form Submission",
        text: message,
      });
      res.status(200).send("Email sent");
    } catch (error) {
      res.status(500).send("Error sending email");
    }
  } else {
    res.status(405).send("Method not allowed");
  }
}
