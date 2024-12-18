import path from "path";
export default defineNuxtConfig({
  compatibilityDate: "2024-12-18",
  devtools: { enabled: true },
  css: ["~/assets/styles/main.scss"],
  modules: ["@pinia/nuxt"],
  $production: {
    routeRules: {
      "/**": { ssr: false },
    },
  },
  vite: {
    resolve: {
      alias: {
        "~/": `${path.resolve(__dirname, "./")}`,
      },
    },
  },
});