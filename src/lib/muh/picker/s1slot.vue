<template>
  <div class="picker-slot-wrapper" :class="pageClass" ref="wrapper" :style='"transition-duration: "+transition+"s;"'>
    <div class="picker-item" v-for="(item, index) in list" :class="{act: defaultIndex===index}"  :style='defaultIndex===index?"color:"+APP_COLOR+";":""'  :key="index" @click="itemClick(item, index)">{{item}}</div>
  </div>
</template>

<script>
import translateUtil from './translate'
import { mapState } from 'vuex'
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    visibleCount: {
      type: Number,
      default: 5
    },
    defaultSelected: {
      type: Number,
      default: 1
    },
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      transition: 0,
      defaultIndex: 1, // 选中的值
      originDefault: 1, // 显示的值在第二行
      itemHeight: 0,
      maxbottom: 0
    }
  },
  computed: {
    ...mapState(['pageClass'])
  },
  watch: {
    defaultSelected (index) {
      //
    }
  },
  mounted () {
    // 处理初始化默认值
    this.defaultIndex = this.defaultSelected
    let el = this.$refs.wrapper
    let pitem = el.querySelectorAll('.picker-item')[0]
    this.$emit('getHeight', pitem.getBoundingClientRect().height * this.visibleCount)
    let isDragging = false
    let dragState = {}
    let itemHeight = pitem.getBoundingClientRect().height
    this.itemHeight = itemHeight
    let pitems = el.querySelectorAll('.picker-item')
    // let bottom = (pitems.length - this.visibleCount) * itemHeight
    let mintop = this.originDefault * itemHeight
    let maxbottom = (pitems.length - this.visibleCount + 2) * itemHeight
    this.maxbottom = maxbottom
    let velocityTranslate, prevTranslate
    // 处理初始化默认值
    // translateUtil.translateElement(el, null, -itemHeight * (this.list.length - 2)) // 初始化滚动到最上面
    translateUtil.translateElement(el, null, -itemHeight * (this.defaultIndex + 1 - 2)) // 初始化滚动到最上面
    let options = {
      start: (e) => {
        dragState = {
          start: new Date(),
          startTop: e.pageY,
          startTranslateTop: translateUtil.getElementTranslate(el).top // 已滚动距离
        }
      },
      drag: (e) => {
        dragState.top = e.pageY
        var deltaY = dragState.top - dragState.startTop
        var translate = dragState.startTranslateTop + deltaY
        // 最顶部和最底部处理
        if (dragState.startTranslateTop >= mintop && deltaY > 0) { // 0 => mintop
          return
        }
        if (dragState.startTranslateTop <= -this.maxbottom && deltaY < 0) { // bottom => maxbottom
          return
        }
        // 获取方向
        velocityTranslate = translate - prevTranslate || translate
        prevTranslate = translate
        //
        if (translate >= mintop) translate = mintop // 0 => mintop
        if (translate <= -this.maxbottom) translate = -this.maxbottom // bottom => maxbottom
        translateUtil.translateElement(el, null, translate)
      },
      end: (e) => {
        let momentumTranslate = 0
        let moved = translateUtil.getElementTranslate(el).top
        var duration = new Date() - dragState.start
        if (duration < 300) {
          momentumTranslate = moved + velocityTranslate * 10
        }
        let distance = Math.abs(dragState.startTranslateTop - moved)
        if (distance < 6) {
          return
        }
        this.$nextTick(() => {
          this.transition = 0.3
          let translate = Math.round((momentumTranslate || moved) / itemHeight) * itemHeight
          // 阻止超出
          // console.log(translate, mintop, -maxbottom)
          if (translate >= mintop) translate = mintop // 0 => mintop
          if (translate <= -this.maxbottom) translate = -this.maxbottom // bottom => maxbottom
          // console.log(translate / itemHeight)
          this.defaultIndex = translate === mintop ? 0 : this.getSelected(Math.abs(translate / itemHeight))
          this.$emit('getSelect', {
            type: this.type,
            index: this.defaultIndex,
            val: this.list[this.defaultIndex]
          })
          translateUtil.translateElement(el, null, translate)
          setTimeout(() => {
            this.transition = 0
            isDragging = false
          }, 3000)
        })
      }
    }
    el.addEventListener('touchstart', function (event) {
      if (isDragging) return false
      document.onselectstart = function () { return false }
      document.ondragstart = function () { return false }
      isDragging = true
      options.start(event.changedTouches[0] || event.touches[0])
    })
    const moveFn = function () {
      options.drag(event.changedTouches[0] || event.touches[0])
    }
    const endFn = function () {
      document.onselectstart = null
      document.ondragstart = null
      isDragging = false
      options.end(event.changedTouches[0] || event.touches[0])
    }
    el.addEventListener('touchmove', moveFn)
    el.addEventListener('touchend', endFn)
  },
  methods: {
    getSelected (value) {
      let defaultIndex = 1
      return value + defaultIndex
    },
    setSlotInit (index) {
      // console.log(index, this.defaultSelected)
      this.defaultIndex = index
      let el = this.$refs.wrapper
      translateUtil.translateElement(el, null, this.itemHeight)
      this.$nextTick(() => {
        let length = this.list.length
        this.maxbottom = (length - this.visibleCount + 2) * this.itemHeight
      })
    },
    itemClick (item, index) {
      /* console.log(item, index, this.type)
      this.$emit('getSelect', {
        type: '',
        index: 1
      }) */
    }
  }
}
</script>

<style scoped="scoped" lang="scss">
/*@import '~@/assets/scss/common';*/
.picker-slot-wrapper {
    flex: 1;
    transition-timing-function: ease-out;
    backface-visibility: hidden;
    .picker-item {
        height: 52px;
        line-height: 52px;
        box-sizing: content-box;
        padding: 20px 0;
        color: #8C9FAD;
        font-size: 28px;
        font-family:Roboto-Regular,Roboto;
        font-weight:400;
    }
    .picker-item.act {
        font-size: 36px;
        /*color: $wisekredit;*/
        font-family:Roboto-Medium,Roboto;
        font-weight:500;
    }
}
/**/
/*.picker-slot-wrapper.creditbean {
  .picker-item.act { color: $creditbean; }
}
.picker-slot-wrapper.creditbus {
  .picker-item.act { color: $creditbus; }
}*/
</style>
