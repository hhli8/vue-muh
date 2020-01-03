<template>
  <div>
    <div class="muh-swiper">
      <div class="muh-swiper-scroll" ref="swiperScroll" :style="'transition: all ease-in-out '+transtime+'s;transform: translate3d(0px, '+transy+'px, 0px);'">
        <div ref="item" class="muh-swiper-item" v-for="(item, index) in thelists" :key="index" :style='"opacity:"+((index===2)?1:(index===1?opcity1:(index===3?opcity3:0)))+";"'>
          <!--:style='"opacity:"+((index===2)?1:(index===1?opcity1:(index===3?opcity3:0)))+";"'-->
          <!--0-0 1-opcity1 2-1 3-opcity3-->
          <slot :item="item"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'muhBubble1',
  props: ['option', 'lists'],
  data () {
    return {
      settime: null,
      transtime: 0, // 移动一格的过渡时间
      transy: 0, // 一格的距离
      opcity1: 1,
      opcity3: 0,
      // Time: 800, // 气泡移动一格的移动时间
      // Cuttime: 1800, // 定时器时间
      isCreated: false,
      thelists: []
    }
  },
  computed: {
    Time () {
      return (this.option && this.option.transtime) || 800
    },
    Cuttime () {
      return (this.option && this.option.intervaltime) || 1800
    }
  },
  watch: {
    lists (val) {
      if (val && val.length && !this.isCreated) {
        if (!this.isCreated) {
          var arrN = this.lists
          var n = [arrN.pop()]
          arrN = n.concat(arrN)
          this.thelists = arrN
          this.move()
          this.isCreated = true
        }
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
    }
  },
  beforeDestroy () {
    this.destroy()
  },
  mounted () {
    //
  }
}
</script>

<style scoped="scoped" lang="scss" src="./type1.scss"></style>
