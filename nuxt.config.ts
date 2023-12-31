// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //开启ssr服务端渲染，默认开启
  ssr: true,
  devtools: { enabled: true },
  modules: ['@vant/nuxt'],
  head: {
    meta: { name: 'referrer', content: 'no-referrer' },
  },
})
