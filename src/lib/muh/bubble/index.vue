<template>
  <div>
    <div class="muh-swiper">
      <div class="muh-swiper-scroll" ref="swiperScroll" :style="'transition: all ease-in-out '+transtime+'s;transform: translate3d(0px, '+transy+'px, 0px);'">
        <!--<div ref="item" class="muh-swiper-item" v-for="(item, index) in thelists" :key="index" :style='"opacity:"+((index===2)?1:(index===1?opcity1:(index===3?opcity3:0)))+";"'>-->
        <div ref="item" class="muh-swiper-item" v-for="(item, index) in thelists" :key="index" :style='"opacity:"+calculate(index)+";"'>
          <slot :row="item"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'muhBubble',
  data () {
    return {
      settime: null,
      transtime: 0, // 移动一格的过渡时间
      transy: 0, // 一格的距离
      opcity1: 1,
      opcity3: 0,
      thelists: []
    }
  },
  props: {
    option: {
      type: Object,
      default: () => {
        return {}
      }
    },
    lists: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    Time () {
      return (this.option && this.option.transtime) || 800
    },
    Cuttime () {
      return (this.option && this.option.intervaltime) || 1800
    },
    ShowCount () {
      return (this.option && this.option.showcount && this.option.showcount >= 1) || 2
    }
  },
  watch: {
    lists (val) {
      if (val && val.length) {
        var arrN = this.clone(val)
        var n = [arrN.pop()]
        arrN = n.concat(arrN)
        this.thelists = arrN
        this.move()
      }
    }
  },
  methods: {
    move () {
      this.$nextTick(() => {
        let item = this.$refs.item[0].getBoundingClientRect()
        let item1 = this.$refs.item[1].getBoundingClientRect()
        var arr = this.thelists
        let trans = item1.top - item.top
        this.settime = setInterval(() => {
          this.transtime = this.Time / 1000
          this.transy += -trans
          // 每毫秒增加的透明度, (Time/60)*x=1,每个60毫秒透明度变化乘以x等于1
          var add = 60 / this.Time
          var setOp = setInterval(() => {
            this.opcity1 -= add
            this.opcity3 += add
          }, 60) // 过渡帧
          setTimeout(() => {
            var s = arr.shift() // 去首至尾
            arr = arr.concat(s)
            this.thelists = arr
            this.transtime = 0
            this.transy = 0
            clearInterval(setOp)
            setOp = null
            this.opcity1 = 1
            this.opcity3 = 0
          }, this.Time)
        }, this.Cuttime)
      })
    },
    destroy () {
      clearInterval(this.settime)
      this.settime = null
    },
    calculate (index) {
      if (this.ShowCount >= 2) {
        return (index > 1 && this.ShowCount >= index) ? 1: (index === 1 ? this.opcity1 : (index === this.ShowCount + 1 ? this.opcity3 : 0))
        // return (index===2)?1:(index===1?this.opcity1:(index===3?this.opcity3:0))
      } else {
        return index === 1 ? this.opcity1 : (index === 2 ? this.opcity3 : 0)
      }
    }
  },
  beforeDestroy () {
    this.destroy()
  }
}
</script>

<style>
</style>
