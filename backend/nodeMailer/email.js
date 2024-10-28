import {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./emailTemplates.js";
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

export const sendWelcomeEmail = async (email, name) => {
  const mailOptions = {
    from: '"Nexus Bank" <nexus.bank.org@gmail.com>',
    to: email,
    subject: "Welcome to Nexus Bank",
    html: `<p>Welcome to Nexus Bank, ${name}!</p>`,
    category: "Welcome Email",
  };
  sendEmail(mailOptions);
};

export const sendPasswordResetEmail = async (email, resetPasswordLink) => {
  const mailOptions = {
    from: '"Nexus Bank" <nexus.bank.org@gmail.com>',
    to: email,
    subject: "Password Reset",
    html: PASSWORD_RESET_REQUEST_TEMPLATE.replace(
      "{resetURL}",
      resetPasswordLink
    ),
    category: "Password Reset Email",
  };
  sendEmail(mailOptions);
};

export const sendResetSuccessEmail = async (email) => {
  const mailOptions = {
    from: '"Nexus Bank" <nexus.bank.org@gmail.com>',
    to: email,
    subject: "Password Reset Successful",
    html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    category: "Password Reset Successful",
  };
  sendEmail(mailOptions);
};
