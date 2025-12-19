// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'system',
    fallback: 'light'
  },
  app: {
    head: {
      title: 'ANT - Common Data Environment',
      meta: [
        { name: 'description', content: 'ANT is the online platform for data-driven collaboration in infrastructure design and construction projects.' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/ant_logo_flat_cropped.png' }
      ]
    }
  }
})