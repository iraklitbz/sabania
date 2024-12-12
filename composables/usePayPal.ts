import { loadScript } from "@paypal/paypal-js";
export const usePayPal = async () => {
  const config = useRuntimeConfig();
  const paypalPromise = loadScript({
    clientId: config.public.PAYPAL_CLIENT_ID,
    currency: "EUR",
    locale: "de_DE",
  });
  return paypalPromise;
};
