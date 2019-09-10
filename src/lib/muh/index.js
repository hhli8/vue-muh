import Hello from './hello'
import Test1 from './test1'
import MuhSku from './sku'
import LayTpfix from './layout/topfixed' // 顶部固定(状态栏、吸顶等)
// import LayFlscreen from './layout/fullscreen.vue' // 全屏且有状态栏等

let components = [
  Hello,
  Test1,
  MuhSku,
  LayTpfix
]
components.forEach((item) => {
  item.install = (Vue, options) => {
    Vue.component(item.name, item)
  }
})
export {
  Hello,
  Test1,
  MuhSku,
  LayTpfix
}