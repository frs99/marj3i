export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // router: {
  //   base: '/marj3i/'
  // },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'marj3i',
    htmlAttrs: {
      lang: 'ar'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name:'theme-color', content:'#33313b' },
      { name: 'msapplication-navbutton-color', content: '#33313b' },
      { name:'apple-mobile-web-app-status-bar-style', content:'#33313b' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&display=swap' }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/1a4bb73a43.js', crossorigin: 'anonymous' },
      { src: 'assets/js/min.js', async: true, defer: true },

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@./assets/css/style.css',
    '@./assets/css/header.css',
    '@./assets/css/footer.css',

    /* HOME */
    '@./assets/css/home/stylehome.css',
    '@./assets/css/home/mediahome.css',
    
    /* BLOG */
    '@./assets/css/blog/style.blog.css',
    '@./assets/css/blog/text.blog.css',
    '@./assets/css/blog/media.blog.css'
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
    '@nuxt/content'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: '/nuxt/'
  }
}
