import Vue from 'vue'
import App from './App.vue'
import router from './routes'

import mixinBase from '@/mixins/base'
// .use(LayTpfix)
// .use(LayFlscreen)
import { Demo, MCascader, MSku, MPopup, MBubble, MLottery, MCircle, MProgress, MLoading } from './lib/muh'
Vue.use(Demo)
   .use(MCascader)
   .use(MSku)
   .use(MPopup)
   .use(MBubble)
   .use(MLottery)
   .use(MCircle)
   .use(MProgress)
   .use(MLoading)
   
Vue.mixin(mixinBase)

import Highlight from '@/util/highlight'
Vue.use(Highlight)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
