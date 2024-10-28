import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: true,
  auth: {
    user: "nexus.bank.org@gmail.com",
    pass: "jorflyednbaqnmst",
  },
});

const sendEmail = async (mailOptions) => {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.log("Error occurred: " + error.message);
    throw new Error("Email could not be sent.");
  }
};
export default sendEmail;
