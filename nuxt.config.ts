// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  build: {
    transpile: ['@heroicons/vue'],
  },
  buildModules: [
    // other build modules
  ],
  components: true, // Ensure components are auto-imported
})