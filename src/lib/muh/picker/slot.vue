<template>
  <div class="picker-slot-wrapper" ref="wrapper" :style='"transition-duration: "+transition+"s;"'>
    <div class="picker-item" v-for="(item, index) in list" :class="{act: defaultIndex===index}" :key="index" @click="itemClick(item, index)">{{item.name}}</div>
  </div>
</template>

<script>
import translateUtil from './translate'
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    defaultSelected: { // 状态选择中的项:哪一行为默认开始的时候选择行(与默认滚动相关)
      type: Number,
      default: 0
    },
    visibleCount: {
      type: Number,
      default: 0
    },
    /* originDefault: { // 滚动的位置-滚动的个数
      type: Number,
      default: 1
    }, */
    actLine: {
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
      defaultIndex: 1, // 默认选择中的项
      itemHeight: 0, // 单个的高度
      maxbottom: 0,
      // actLine: 2 // 哪一行设为act行, 1开始
      // actLine: 2 // 得大于等于一半？
      // 规则：偶数行时，一般中上行，奇数行时，居中显示
    }
  },
  watch: {
    list () {
      this.init()
    }
  },
  mounted () {
    //
  },
  methods: {
    init () {
      this.defaultIndex = this.defaultSelected
      this.$emit('getSelect', {
        type: this.type,
        index: this.defaultIndex,
        val: this.list[this.defaultIndex]
      })
      let el = this.$refs.wrapper
      this.$nextTick(() => {
        let pitems = el.querySelectorAll('.picker-item')
        let pitem = pitems[0]
        this.itemHeight = pitem.getBoundingClientRect().height
        this.$emit('getHeight', this.itemHeight * this.visibleCount)
        let isDragging = false
        let dragState = {}
        // let mintop = this.originDefault * this.itemHeight
        let mintop = (this.actLine - 1) * this.itemHeight
        // let maxbottom = (pitems.length - this.visibleCount + 2) * this.itemHeight
        let maxbottom = (pitems.length - this.actLine) * this.itemHeight
        this.maxbottom = maxbottom
        let velocityTranslate, prevTranslate
        // translateUtil.translateElement(el, null, -this.itemHeight * (this.defaultIndex - 1)) // 初始化滚动到最上面
        translateUtil.translateElement(el, null, -this.itemHeight * (this.defaultIndex + 1 - this.actLine)) // 初始化滚动到最上面
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
              let translate = Math.round((momentumTranslate || moved) / this.itemHeight) * this.itemHeight
              // 阻止超出
              // console.log(translate, mintop, -maxbottom)
              if (translate >= mintop) translate = mintop // 0 => mintop
              if (translate <= -this.maxbottom) translate = -this.maxbottom // bottom => maxbottom
              // console.log(translate / itemHeight)
              // this.defaultIndex = translate === mintop ? 0 : this.getSelected((translate / this.itemHeight))
              this.defaultIndex = this.actLine - 1 - (translate / this.itemHeight) // this.getSelected(translate / this.itemHeight)
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
        //
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
        //
      })
    },
    getSelected (value) { // 推理-可删
      return this.actLine - 1 - value
      /* if (value < 0) {
        return Math.abs(value) + (this.actLine - 1)
      } else {
        return this.actLine - 1 - value
      } */
    },
    itemClick () {
      //
    }
  }
}
</script>

<style lang="scss" scoped="scoped" src="./slot.scss">
</style>
