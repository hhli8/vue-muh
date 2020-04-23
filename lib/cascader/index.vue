<template>
  <div class="muh-cascader" ref="muhcascader" :class="option.show?'is-focus':''" @click="stop($event)">
    <input ref="input" class="muh-cascader-input" v-model="cascaderValue" type="text" readonly="readonly" placeholder="请选择" @focus="onfocus" @click="inputClick" @mousedown="mouseDown"/>
    <div ref="cascader" class="muh-cascader-content" v-show="option.show">
      <div class="muh-cascader-menu" v-for="(item, index) in crlist" :key="index">
        <div class="menu-item" v-for="(sitem, sindex) in item.data" :class="sindex===item.index?'index-act':''" :key="sindex" @click="onClickItem($event, sitem, sindex, index)">
          {{sitem.categoryName}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'muhCascader',
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    value: {
      type: Array,
      default: () => {
        return []
      }
    },
    nextUpdata: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: 'value'
  },
  data () {
    return {
      crlist: [],
      reslist: [],
      option: {
        show: false
      },
      cascaderValue: ''
    }
  },
  watch: {
    list () {
      this.init()
    }
  },
  created () {
    //
  },
  mounted () {
    document.addEventListener('click', this.setClose, false)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.setClose, false)
  },
  methods: {
    init () {
      // this.crlist = [this.list]
      this.crlist = [{
        data: this.list,
        index: ''
      }]
      // 初始化默认值
      if (!this.isArray(this.value)) return
      if (this.value && this.value.length) {
        let clist = []
        let reslist = []
        let tag = [this.list]
        let str = ''
        let Tag = null
        for (let index = 0, L = this.value.length; index < L; index++) {
          let c = this.value[index]
          Tag = false
          for (let i = 0, l = tag[index].length; i < l; i++) {
            if (tag[index][i].categoryName === c) {
              str += c + (index + 1 === this.value.length ? '' : ' / ')
              if (tag[index][i].children) tag[index + 1] = tag[index][i].children
              Tag = true
              // 列表选中状态处理
              clist.push({
                data: tag[index],
                index: i
              })
              reslist.push(tag[index][i])
              break
            }
          }
          if (!Tag) {
            break
          }
        }
        if (Tag) { 
          this.cascaderValue = str
          this.crlist = clist
          this.reslist = reslist
        }
      }
    },
    onfocus () {
      if (!this.mousedowned) {
        this.option.show = true
      }
      this.mousedowned = false
      // console.log('focus')
    },
    setClose (e) {
      // 解决注册多个同组件的时候关闭问题  bug:点击另外一个的时候，其他的没有关闭掉
      if (!(e.target === this.$refs.muhcascader || this.$refs.muhcascader.contains(e.target))) {
        this.option.show = false
      }
      // this.option.show = false
    },
    onClickItem (e, item, sindex, findex) {
      let children = item.children
      let i = findex + 1
      this.crlist = this.crlist.slice(0, i) // 下面展示的
      this.reslist = this.reslist.slice(0, findex) // 选择的结果
      this.crlist[findex].index = sindex
      this.reslist[findex] = item
      if (children && children.length) {
        // this.crlist.push(children)
        this.crlist.push({
          data: children,
          index: ''
        })
      } else {
        this.cascaderValue = ''
        this.reslist.forEach((c, i) => {
          this.cascaderValue += c.categoryName + (i + 1 === this.reslist.length ? '' : ' / ')
        })
        this.option.show = false
      }
    },
    needNextUpdata () {
      //
    },
    stop (e) {
      // e.stopPropagation()
    },
    mouseDown () {
      // console.log('down')
      if (this.option.show) {
        // 如果是显示的，则变为不显示
        this.option.show = false
        // 假如执行了这边，那么focus那边不要再执行
        this.mousedowned = true
      } else {
        this.option.show = true
      }
    },
    inputClick () {
      // console.log('click')
    }
  }
}
</script>

<style lang="scss" scoped="scoped" src="./index.scss"></style>

