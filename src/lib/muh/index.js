import Hello from './hello'
import Test1 from './test1'
import MuhSku from './sku'
import LayTpfix from './layout/topfixed'
import LayFlscreen from './layout/fullscreen'

let components = [
  Hello,
  Test1,
  MuhSku,
  LayTpfix,
  LayFlscreen
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
  LayTpfix,
  LayFlscreen
}