module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Babafemi's Portfolio" || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "My personal Portfolio" || ""
      },
      {
        hid: "og:url",
        name: "og:url",
        content: "https://babafemi-portfolio.netlify.app/" || ""
      },
      {
        hid: "og:type",
        name: "og:type",
        content: "website" || ""
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Babafemi's Portfolio" || ""
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "My personal Portfolio" || ""
      },
      {
        hid: "og:image",
        name: "og:image",
        content: '/static/ogImage.png' || ""
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary" || ""
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: "@femiadot" || ""
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: "@femiadot" || ""
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    '~assets/scss/_global.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-confetti.ts', mode: 'client' },
    { src: '~/plugins/vue-scroll-to.ts', mode: 'client' },
    {src: '~/plugins/vue-typer.ts', ssr: false}
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxt/typescript-build","@nuxtjs/color-mode"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    "@nuxtjs/bulma",
    '@nuxtjs/style-resources',
    'vue-scrollto/nuxt',
  ],
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  styleResources: {
    scss: ['./assets/scss/*.scss']
  }
};
