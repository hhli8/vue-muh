import Demo from './demo'
import MCascader from './cascader'

let components = [
  Demo,
  MCascader
]
components.forEach((item) => {
  item.install = (Vue, options) => {
    Vue.component(item.name, item)
  }
})
export {
  Demo,
  MCascader
}
