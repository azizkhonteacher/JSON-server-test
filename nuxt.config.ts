// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  // modules: ["@nuxtjs/axios"],
  // runtimeConfig: {
  //   public: {
  //     apiBase: 'http://localhost:3001' // JSON Server URL
  //   }
  // }
  nitro: {
    output: {
      publicDir: '.output/public',
    },
  },
});
