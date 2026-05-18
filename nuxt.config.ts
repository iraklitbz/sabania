export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  app: {
    layoutTransition: { name: "fade", mode: "out-in" },
    pageTransition: { name: "fade", mode: "out-in" },
    head: {
      titleTemplate: "%s | Sabania Apartments",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Sabania Apartments – Komfortable Ferienwohnungen und Monteurunterkünfte für Geschäftsreisende und längere Aufenthalte. Jetzt verfügbare Wohnungen finden und direkt buchen.",
        },
        {
          name: "keywords",
          content:
            "Ferienwohnung mieten, Monteurwohnung, Kurzzeitmiete, Apartment mieten, Wohnung auf Zeit, Geschäftsreise Unterkunft, Sabania Apartments",
        },
        { name: "robots", content: "index, follow" },
        { name: "theme-color", content: "#4D1B26" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Sabania Apartments" },
        {
          property: "og:description",
          content:
            "Komfortable Ferienwohnungen und Monteurunterkünfte. Flexibel, unkompliziert und günstig – direkt online buchen.",
        },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
    },
  },
  modules: [
    "@nuxtjs/strapi",
    "@nuxtjs/tailwindcss",
    "nuxt-svgo",
    "@nuxt/image",
    "@pinia/nuxt",
    "@formkit/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxt/eslint",
    'nuxt-paypal',
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      'Outfit': [400, 500, 600, 700],
      'Inter': [300, 400, 500, 600, 700],
    },
    display: 'swap',
  },
  paypal: {
    clientId: process.env.PAYPAL_CLIENT_ID,
  },
  eslint: {
    config: {
      stylistic: {
        indent: "tab",
        semi: true,
      },
    },
  },
  build: {
    transpile: ["@vuepic/vue-datepicker", "@fawmi/vue-google-maps"],
  },
  strapi: {
    url: process.env.STRAPI_URL || "http://localhost:1337",
    prefix: "/api",
    version: "v4",
    cookie: {
      path: "/",
      maxAge: 14 * 24 * 60 * 60,
      secure: process.env.NODE_ENV === "production",
      sameSite: true,
    },
    cookieName: "jwt",
  },
  tailwindcss: {
    cssPath: "~/assets/css/main.scss",
    exposeConfig: true,
  },
  svgo: {
    autoImportPath: "./assets/icons/",
  },
  runtimeConfig: {
    strapiUrl: process.env.STRAPI_URL || "http://localhost:1337",
    strapiToken: process.env.STRAPI_TOKEN || "",
    revalidateSecret: process.env.REVALIDATE_SECRET || "",
    cloudflareApiToken: process.env.CLOUDFLARE_API_TOKEN || "",
    cloudflareZoneId: process.env.CLOUDFLARE_ZONE_ID || "",
    public: {
      SMOOBU_API_URL: process.env.SMOOBU_API_URL ?? "",
      SMOOBU_API_KEY: process.env.SMOOBU_API_KEY ?? "",
      PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
      GOOGLE_MAPS_ID: process.env.GOOGLE_MAPS_ID,
    },
  },
  routeRules: {
    "account/**": {
      ssr: false,
    },
    login: {
      ssr: false,
    },
    register: {
      ssr: false,
    },
    "activate-user": {
      ssr: false,
    },
    thanks: {
      ssr: false,
    },
    "book/**": {
      ssr: false,
    },
  },
  devtools: { enabled: true },
});
