import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import sendEmail from "./nodeMailer.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const mailOptions = {
    from: '"Nexus Bank" <nexus.bank.org@gmail.com>',
    to: email,
    subject: "Verify Your Email",
    html: VERIFICATION_EMAIL_TEMPLATE.replace(
      "{verificationCode}",
      verificationToken
    ),
    category: "Email Verification",
  };
  sendEmail(mailOptions);
};
