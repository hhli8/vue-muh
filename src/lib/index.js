import AweWait from './aweWait.vue'
import Keyboard from './keyboard'
import Loading from './loading.vue'
import Sku from './sku'

let components = [
  AweWait,
  Keyboard,
  Loading,
  Sku
]
components.forEach((item) => {
  item.install = (Vue, options) => {
    Vue.component(item.name, item)
  }
})
export {
  AweWait,
  Keyboard,
  Loading,
  Sku
}
//import vue_keyboard from './keyboard.vue'
//import vue_loading from './loading.vue'
//const keyboard = {
//  install (Vue, options) {
//        Vue.component(vue_keyboard.name, vue_keyboard)
//  }
//}
//const loading = {
//  install (Vue, options) {
//        Vue.component(vue_loading.name, vue_loading)
//  }
//}
//export {
//keyboard,
//loading
//}

