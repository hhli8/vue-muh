import Vue from 'vue'
import App from './App.vue'
import router from './routes'

import mixinBase from '@/mixins/base'
//import { keyboard, loading } from './lib/index.js'
//Vue.use(keyboard)
// .use(loading)
   
//import { Keyboard, Loading, AweWait, Sku } from './lib/index.js'
//Vue.use(Keyboard)
// .use(Loading)
// .use(AweWait)
// .use(Sku)
//import { MuhSku, MuhPopup, LayTpfix, LayFlscreen } from './lib/muh'
//Vue.use(MuhSku)
// .use(MuhPopup)
// .use(LayTpfix)
// .use(LayFlscreen)
import { Demo, MCascader } from './lib/muh'
Vue.use(Demo)
   .use(MCascader)
   
Vue.mixin(mixinBase)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
