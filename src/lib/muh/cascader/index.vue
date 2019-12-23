<template>
  <div class="muh-cascader" :class="option.show?'is-focus':''" @click="stop($event)">
    <input ref="input" class="muh-cascader-input" v-model="cascaderValue" type="text" readonly="readonly" placeholder="请选择" @focus="onfocus" @blur="onblur" @click="inputClick" @mousedown="mouseDown"/>
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
  props: ['list'],
  data () {
    return {
      crlist: [],
      reslist: [],
      option: {
        show: false
      },
      cascaderValue: '',
      focusAction: false // input是否聚焦中
    }
  },
  watch: {
    list () {
      this.init()
    }
  },
  mounted () {
    window.addEventListener('click', this.setClose, false)
  },
  destoryed () {
    window.removeEventListener('click', this.setClose, false)
  },
  methods: {
    init () {
      // this.crlist = [this.list]
      this.crlist = [{
        data: this.list,
        index: ''
      }]
    },
    onfocus () {
      this.option.show = true
      // console.log('focus')
      this.focusAction = true
    },
    onblur () {
      this.focusAction = false
    },
    setClose (e) {
      this.option.show = false
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
    stop (e) {
      e.stopPropagation()
    },
    mouseDown () {
      /* console.log('down')
      if (this.focusAction && this.option.show) {
        // this.option.show = false
      }
      if (this.focusAction && this.option.show) {
        console.log('已经聚焦过啦')
        this.option.show = false
      } */
    },
    inputClick () {
      //
    }
  }
}
</script>

<style lang="scss" scoped="scoped" src="./index.scss"></style>
