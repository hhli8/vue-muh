import Vue from 'vue'
import App from './App.vue'
import router from './routes'
//import { keyboard, loading } from './lib/index.js'
//Vue.use(keyboard)
// .use(loading)
   
//import { Keyboard, Loading, AweWait, Sku } from './lib/index.js'
//Vue.use(Keyboard)
// .use(Loading)
// .use(AweWait)
// .use(Sku)
import { MuhSku } from './lib/muh'
Vue.use(MuhSku)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
