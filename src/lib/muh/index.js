import Demo from './demo'
import MCascader from './cascader'
import MSku from './sku'
import MPopup from './popup'
import MBubble from './bubble'
import MLottery from './lottery/draw.vue'

let components = [
  Demo,
  MCascader,
  MSku,
  MPopup,
  MBubble,
  MLottery
]
components.forEach((item) => {
  item.install = (Vue, options) => {
    Vue.component(item.name, item)
  }
})
export {
  Demo,
  MCascader,
  MSku,
  MPopup,
  MBubble,
  MLottery
}
