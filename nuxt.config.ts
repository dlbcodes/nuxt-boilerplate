// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    // Make environment variables accessible here
    public: {
      NODE_ENV: process.env.NODE_ENV,
      BASE_URL: process.env.BASE_URL,
      AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
      AWS_BUCKET_REGION: process.env.AWS_BUCKET_REGION,
      CLOUDFRONT_URL: process.env.NUXT_PUBLIC_CLOUDFRONT_URL || "",
      GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
      // Add more environment variables as needed
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: ["@vueuse/nuxt", "@pinia/nuxt", "@nuxtjs/supabase", "nuxt-gtag", "nuxt-headlessui"],
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      include: ["/admin(/*)?"],
    },
  },
  gtag: {
    initMode: "manual", // Prevent auto-loading
    initCommands: [
      [
        "consent",
        "default",
        {
          ad_user_data: "denied",
          ad_personalization: "denied",
          ad_storage: "denied",
          analytics_storage: "denied",
          wait_for_update: 500,
        },
      ],
    ],
    id: process.env.GOOGLE_ANALYTICS_ID || "", // Google Analytics Measurement ID
    enabled: process.env.NODE_ENV === "production", // Enable only in production
  },
});