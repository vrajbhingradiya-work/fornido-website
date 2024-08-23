import { Resend } from "resend";
import * as React from "react";
import EmailTemplate from "../../../emails/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, phone } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "information@alroshangroups.com",
      to: ["lll.rg3.lll@gmail.com"],
      subject: `Inquiry Raised by ${name}`,
      react: EmailTemplate({
        clientName: name,
        clientNumber: phone,
      }) as React.ReactElement,
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "An error occurred." }), {
      status: 500,
    });
  }
}
