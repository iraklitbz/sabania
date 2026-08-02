const CANONICAL_HOST = "www.sabania.eu";

export default defineEventHandler((event) => {
  const host = getRequestHost(event, { xForwardedHost: true });
  if (!host || host === CANONICAL_HOST) return;

  if (host.endsWith("sabania.de")) {
    sendRedirect(event, `https://${CANONICAL_HOST}${event.path}`, 301);
  }
});
