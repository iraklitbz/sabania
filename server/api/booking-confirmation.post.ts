import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { order, apartment } = body;

  if (!order || !apartment) {
    throw createError({ statusCode: 400, statusMessage: "Order and apartment data required." });
  }

  const config = useRuntimeConfig();
  const resend = new Resend(config.resendApiKey);

  const checkin = new Date(order.checkin).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
  const checkout = new Date(order.checkout).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
  const fullName = `${order.firstName} ${order.lastName}`.trim();

  // 1. Customer confirmation email
  const customerHtml = `<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;">
        <tr><td style="background-color:#4D1B26;padding:32px;text-align:center;">
          <h1 style="color:#C2BEB5;margin:0;font-size:24px;font-weight:600;">Sabania</h1>
        </td></tr>
        <tr><td style="padding:40px 32px;">
          <h2 style="color:#301118;margin:0 0 16px;font-size:20px;">Buchungsbestätigung</h2>
          <p style="color:#374151;font-size:16px;line-height:1.6;margin:0 0 16px;">
            Hallo ${fullName},
          </p>
          <p style="color:#374151;font-size:16px;line-height:1.6;margin:0 0 24px;">
            vielen Dank für Ihre Buchung! Wir haben Ihre Reservierung erhalten und werden uns in Kürze mit weiteren Details bei Ihnen melden.
          </p>
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb;border-radius:6px;padding:20px;margin:0 0 24px;">
            <tr><td style="padding:20px;">
              <p style="color:#374151;font-size:14px;margin:0 0 8px;"><strong>Unterkunft:</strong> ${apartment.name}</p>
              <p style="color:#374151;font-size:14px;margin:0 0 8px;"><strong>Check-in:</strong> ${checkin}</p>
              <p style="color:#374151;font-size:14px;margin:0 0 8px;"><strong>Check-out:</strong> ${checkout}</p>
              <p style="color:#374151;font-size:14px;margin:0 0 8px;"><strong>Gäste:</strong> ${order.travelers}</p>
              <p style="color:#374151;font-size:14px;margin:0;"><strong>Betrag:</strong> ${order.amountPayed} €</p>
            </td></tr>
          </table>
          <p style="color:#374151;font-size:16px;line-height:1.6;margin:0 0 16px;">
            <strong>Bestellnummer:</strong> #${order.orderID}
          </p>
          <p style="color:#6b7280;font-size:14px;line-height:1.6;margin:0;">
            Bei Fragen können Sie uns jederzeit unter info@sabania.eu erreichen.
          </p>
        </td></tr>
        <tr><td style="background-color:#301118;padding:24px 32px;text-align:center;">
          <p style="color:#C2BEB5;font-size:13px;margin:0;">© 2026 Sabania. Alle Rechte vorbehalten.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  // 2. Internal notification email
  const cmsLink = order.documentId
    ? `https://cms.sabania.eu/admin/content-manager/collection-types/api::order.order/${order.documentId}`
    : "";

  const internalHtml = `<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;">
        <tr><td style="background-color:#4D1B26;padding:32px;text-align:center;">
          <h1 style="color:#C2BEB5;margin:0;font-size:24px;font-weight:600;">Neue Buchung</h1>
        </td></tr>
        <tr><td style="padding:40px 32px;">
          <h2 style="color:#301118;margin:0 0 16px;font-size:20px;">Buchungsdetails</h2>
          <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#374151;">
            <tr><td style="padding:6px 0;"><strong>Name:</strong></td><td style="padding:6px 0;">${fullName}</td></tr>
            <tr><td style="padding:6px 0;"><strong>E-Mail:</strong></td><td style="padding:6px 0;">${order.email}</td></tr>
            <tr><td style="padding:6px 0;"><strong>Telefon:</strong></td><td style="padding:6px 0;">${order.phonePrefix || ""} ${order.phone || "–"}</td></tr>
            <tr><td style="padding:6px 0;"><strong>Unterkunft:</strong></td><td style="padding:6px 0;">${apartment.name}</td></tr>
            <tr><td style="padding:6px 0;"><strong>Check-in:</strong></td><td style="padding:6px 0;">${checkin}</td></tr>
            <tr><td style="padding:6px 0;"><strong>Check-out:</strong></td><td style="padding:6px 0;">${checkout}</td></tr>
            <tr><td style="padding:6px 0;"><strong>Gäste:</strong></td><td style="padding:6px 0;">${order.travelers}</td></tr>
            <tr><td style="padding:6px 0;"><strong>Betrag:</strong></td><td style="padding:6px 0;">${order.amountPayed} €</td></tr>
            <tr><td style="padding:6px 0;"><strong>PayPal ID:</strong></td><td style="padding:6px 0;">${order.orderID}</td></tr>
          </table>
          ${cmsLink ? `<table cellpadding="0" cellspacing="0" style="margin:24px 0 0;"><tr><td style="background-color:#4D1B26;border-radius:6px;padding:14px 28px;"><a href="${cmsLink}" style="color:#C2BEB5;text-decoration:none;font-size:14px;font-weight:600;">Im CMS öffnen</a></td></tr></table>` : ""}
        </td></tr>
        <tr><td style="background-color:#301118;padding:24px 32px;text-align:center;">
          <p style="color:#C2BEB5;font-size:13px;margin:0;">© 2026 Sabania. Alle Rechte vorbehalten.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  // Send both emails
  const [customerResult, internalResult] = await Promise.allSettled([
    resend.emails.send({
      from: "Sabania <noreply@sabania.eu>",
      to: order.email,
      subject: `Buchungsbestätigung #${order.orderID}`,
      html: customerHtml,
    }),
    resend.emails.send({
      from: "Sabania <noreply@sabania.eu>",
      to: "info@sabania.eu",
      subject: `Neue Buchung: ${fullName} – ${apartment.name}`,
      html: internalHtml,
    }),
  ]);

  if (customerResult.status === "rejected") {
    console.error("Customer email error:", customerResult.reason);
  }
  if (internalResult.status === "rejected") {
    console.error("Internal email error:", internalResult.reason);
  }

  return { success: true };
});
