import * as brevo from "@getbrevo/brevo";

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY as string
);

const smtpEmail = new brevo.SendSmtpEmail();

interface Params {
  subject: string;
  to: { email: string; name: string }[];
  htmlContent: string;
}

// Send email
export async function sendEmail({ subject, to, htmlContent }: Params) {
  smtpEmail.subject = subject;
  smtpEmail.to = to;
  smtpEmail.htmlContent = `<html><body>${htmlContent}</body></html>`;
  smtpEmail.sender = {
    name: "john doe",
    email: "example@example.com",
  };

  await apiInstance.sendTransacEmail(smtpEmail);
}
