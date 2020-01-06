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
      path: '/demo',
      name: 'Demo',
      component: resolve => { require(['@/views/muh/demo'], resolve) }
    },
    {
      path: '/cascader',
      name: 'Cascader',
      component: resolve => { require(['@/views/muh/cascader'], resolve) }
    },
    {
      path: '/sku',
      name: 'Sku',
      component: resolve => { require(['@/views/muh/sku'], resolve) }
    },
    {
      path: '/popup',
      name: 'Popup',
      component: resolve => { require(['@/views/muh/popup'], resolve) }
    },
    {
      path: '/bubble',
      name: 'Bubble',
      component: resolve => { require(['@/views/muh/bubble'], resolve) }
    },
    {
      path: '/lottery',
      name: 'Lottery',
      component: resolve => { require(['@/views/muh/lottery'], resolve) }
    },
    {
      path: '/circle',
      name: 'Circle',
      component: resolve => { require(['@/views/muh/canvas'], resolve) }
    }
//  {
//    path: '/button',
//    name: 'subButton',
//    component: resolve => { require(['@/views/sub/button.vue'], resolve) }
//  },
//  {
//    path: '/sku',
//    name: 'funSku',
//    component: resolve => { require(['@/views/fun/sku.vue'], resolve) }
//  },

//  {
//    path: '/layout_topfixed',
//    name: 'layoutTopfixed',
//    component: resolve => { require(['@/views/layout/topfixed.vue'], resolve) }
//  },
//  {
//    path: '/layout_fullscreen',
//    name: 'layoutFullscreen',
//    component: resolve => { require(['@/views/layout/fullscreen.vue'], resolve) }
//  }
  ]
})