import { Resend } from "resend";
import InquiryEmailTemplate from "../../emails/InquiryEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, phone } = req.body;

    const { data, error } = await resend.emails.send({
      from: "info@digitalfry.in",
      to: ["lll.rg3.lll@gmail.com"],
      subject: `Inquiry Raised by ${name}`,
      react: InquiryEmailTemplate({
        clientName: name,
        clientNumber: phone,
      }),
    });

    if (error) {
      console.log(error);
      return res.status(405).json({ message: "An error occured" });
    }
    console.log(data);

    return res.status(200).json({ message: "successfully sent email" });
  } else {
    // Method Not Allowed
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method not allowed" });
  }
}
