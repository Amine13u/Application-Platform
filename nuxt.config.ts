// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-pdfeasy",
    [
      "nuxt-mail",
      {
        message: {
          to: "mohamedamine.mannai@enit.utm.tn",
        },
        smtp: {
          host: "smtp.gmail.com",
          port: 587,
          auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_PASSWORD,
          },
        },
      },
    ],
  ],
});
