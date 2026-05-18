export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);

  // Validate webhook secret (header or Bearer token)
  const headerSecret = getHeader(event, "x-webhook-secret");
  const authHeader = getHeader(event, "authorization");
  const bearerSecret = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : null;

  if (!config.revalidateSecret) {
    throw createError({ statusCode: 500, statusMessage: "REVALIDATE_SECRET is not configured" });
  }
  if (headerSecret !== config.revalidateSecret && bearerSecret !== config.revalidateSecret) {
    throw createError({ statusCode: 401, statusMessage: "Invalid webhook secret" });
  }
  if (!config.cloudflareApiToken || !config.cloudflareZoneId) {
    throw createError({ statusCode: 500, statusMessage: "CLOUDFLARE_API_TOKEN and CLOUDFLARE_ZONE_ID are required" });
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
