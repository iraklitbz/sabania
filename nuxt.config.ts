export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/strapi',
    '@formkit/nuxt'
  ],
  build: {
    transpile: ['@vuepic/vue-datepicker']
  },
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {
      path: '/',
      maxAge: 14 * 24 * 60 * 60,
      secure: process.env.NODE_ENV === 'production',
      sameSite: true
    },
    cookieName: 'jwt'
  },
  tailwindcss: {
    exposeConfig: true,
    cssPath: '~/assets/scss/main.scss',
  },
  icon: {
    customCollections: [
      {
        prefix: 'icon',
        dir: './assets/icons'
      },
    ],
  },
  runtimeConfig: {
    public: {
      SMOOBU_API_URL: process.env.SMOOBU_API_URL ?? '',
      SMOOBU_API_KEY: process.env.SMOOBU_API_KEY ?? ''
    }
  },
  devtools: { enabled: true }
})