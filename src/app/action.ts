"use server";

import { sendEmail } from "@/lib/brevo";
import { redirect } from "next/navigation";

export const handleForm = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const subject = formData.get("subject");

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  console.log({
    subject,
    name,
    email,
    message,
  });

  // Send email
  await sendEmail({
    subject: subject as string,
    to: [{ email: email as string, name: name as string }],
    htmlContent: message as string,
  });

  redirect("/success");
};
