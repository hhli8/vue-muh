import Demo from './demo'
import MCascader from './cascader'
import MSku from './sku'
import MPopup from './popup'
import MBubble from './bubble'
import MLottery from './lottery'
import MCircle from './canvas/circle'
import MProgress from './progress'
import MLoading from './loading'
import MVideo from './video'
import MDialog from './dialog'
import MPicker from './picker'

import 'default-passive-events'

let components = [
  Demo,
  MCascader,
  MSku,
  MPopup,
  MBubble,
  MLottery,
  MCircle,
  MProgress,
  MLoading,
  MVideo,
  MDialog,
  MPicker
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
  MLottery,
  MCircle,
  MProgress,
  MLoading,
  MVideo,
  MDialog,
  MPicker
}
