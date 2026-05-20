import { loadScript } from "@paypal/paypal-js";

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig();
  const paypal = await loadScript({
    clientId: config.public.PAYPAL_CLIENT_ID as string,
    currency: "EUR",
  });
  return { provide: { paypal } };
});
