export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const body = await readBody(event);

  setHeader(event, "Cache-Control", "public, max-age=0, s-maxage=600, stale-while-revalidate=86400");
  setHeader(event, "Vary", "Accept-Language");

  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (config.strapiToken) {
    headers["Authorization"] = `Bearer ${config.strapiToken}`;
  }

  return $fetch(`${config.strapiUrl}/graphql`, {
    method: "POST",
    headers,
    body,
  });
});
