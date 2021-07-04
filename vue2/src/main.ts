import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from '@/store/index'
import VueYouTubeEmbed from 'vue-youtube-embed'

import '@/assets/style.css'

Vue.config.productionTip = false

Vue.use(VueYouTubeEmbed, { global: true, componentId: "youtube-media" })

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
