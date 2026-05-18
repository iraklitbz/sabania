import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, subject, textarea } = body;

  if (!email || !subject || !textarea) {
    throw createError({ statusCode: 400, statusMessage: "Alle Felder sind erforderlich." });
  }

  const config = useRuntimeConfig();
  const resend = new Resend(config.resendApiKey);

  await resend.emails.send({
    from: "Sabania Kontakt <noreply@sabania.eu>",
    to: "info@sabania.eu",
    replyTo: email,
    subject: subject,
    html: `<p><strong>Von:</strong> ${email}</p><p><strong>Nachricht:</strong></p><p>${textarea.replace(/\n/g, "<br>")}</p>`,
  });

  return { success: true };
});
