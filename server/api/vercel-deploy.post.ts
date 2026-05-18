import { createHmac } from "crypto";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);

  const signature = getHeader(event, "x-vercel-signature");
  const rawBody = await readRawBody(event);

  if (!rawBody || !signature) {
    throw createError({ statusCode: 400, statusMessage: "Missing body or signature" });
  }

  const expected = createHmac("sha1", config.vercelWebhookSecret).update(rawBody).digest("hex");
  if (signature !== expected) {
    throw createError({ statusCode: 401, statusMessage: "Invalid signature" });
  }

  const body = JSON.parse(rawBody);

  if (body.type !== "deployment.succeeded") {
    return { ok: true, skipped: true };
  }

  const result = await $fetch<{ success: boolean; errors?: unknown[] }>(
    `https://api.cloudflare.com/client/v4/zones/${config.cloudflareZoneId}/purge_cache`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.cloudflareApiToken}`,
        "Content-Type": "application/json",
      },
      body: { purge_everything: true },
    },
  );

  if (!result.success) {
    throw createError({ statusCode: 502, statusMessage: "Cloudflare purge failed", data: result.errors ?? [] });
  }

  return { ok: true };
});
