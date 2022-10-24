import Mail from "@sendgrid/mail";
import { NextApiHandler } from "next";

const mailHandler: NextApiHandler = async (req, res) => {
  Mail.setApiKey(process.env.SENDGRID_API_KEY || "");

  const msg = {
    to: req.body.email,
    from: process.env.SENDGRID_API_EMAIL || "test@gmail.com",
    subject: process.env.SENDGRID_API_SUBJECT || "error",
    text: process.env.SENDGRID_API_TEXT || "Error message"
  };

  /* TODO: handle sending emails as newsletters */

  try {
    // dont send if an error happens
    if (!req.body.error) {
      await Mail.send(msg);
      res.send(req.body);
    }
  } catch (error) {
    console.error(error);
  }
};

export default mailHandler;
