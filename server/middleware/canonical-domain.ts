const CANONICAL_HOST = "sabania.eu";

export default defineEventHandler((event) => {
  const host = getRequestHost(event, { xForwardedHost: true });
  if (!host || host === CANONICAL_HOST) return;

  if (host.endsWith("sabania.de") || host === `www.${CANONICAL_HOST}`) {
    const target = `https://${CANONICAL_HOST}${event.path}`;
    sendRedirect(event, target, 301);
  }
});
