import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: resolve => { require(['@/views/index.vue'], resolve) }
    },
    {
      path: '/button',
      name: 'subButton',
      component: resolve => { require(['@/views/sub/button.vue'], resolve) }
    },
    {
      path: '/sku',
      name: 'funSku',
      component: resolve => { require(['@/views/fun/sku.vue'], resolve) }
    },
    {
      path: '/popup',
      name: 'funPopup',
      component: resolve => { require(['@/views/fun/popup.vue'], resolve) }
    },
    {
      path: '/layout_topfixed',
      name: 'layoutTopfixed',
      component: resolve => { require(['@/views/layout/topfixed.vue'], resolve) }
    },
    {
      path: '/layout_fullscreen',
      name: 'layoutFullscreen',
      component: resolve => { require(['@/views/layout/fullscreen.vue'], resolve) }
    }
  ]
})