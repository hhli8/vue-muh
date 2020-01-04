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
import { Demo, MCascader, MSku, MPopup, MBubble, MLottery } from './lib/muh'
Vue.use(Demo)
   .use(MCascader)
   .use(MSku)
   .use(MPopup)
   .use(MBubble)
   .use(MLottery)
   
Vue.mixin(mixinBase)

import Highlight from '@/util/highlight'
Vue.use(Highlight)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
