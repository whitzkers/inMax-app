export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'inMax-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
     
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/bootstrap.css',
    '@/assets/css/card-home.css',
    '@/assets/css/themingBootstrap.compiled.css',
    '@/assets/css/Navigation-Clean.css',
    '@/assets/css/Footer-Clean',
    '@/assets/css/swiper.min.css'
  ],
  js: [
    '@/assets/js/bootstrap.min.js',
    '@/jquery.min.js',
    '@/Simple-Slider.js',
    '@/swiper.jquery.min.js'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
