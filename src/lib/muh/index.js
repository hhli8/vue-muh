import Hello from './hello'
import Test1 from './test1'
import MuhSku from './sku'

let components = [
  Hello,
  Test1,
  MuhSku
]
components.forEach((item) => {
  item.install = (Vue, options) => {
    Vue.component(item.name, item)
  }
})
export {
  Hello,
  Test1,
  MuhSku
}