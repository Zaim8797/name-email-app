// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },

  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
  ],

  compatibilityDate: "2025-03-22",
})