import Demo from './demo'
import MCascader from './cascader'
import MSku from './sku'

let components = [
  Demo,
  MCascader,
  MSku
]
components.forEach((item) => {
  item.install = (Vue, options) => {
    Vue.component(item.name, item)
  }
})
export {
  Demo,
  MCascader,
  MSku
}
