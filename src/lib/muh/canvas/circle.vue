<template>
  <div>
    <canvas class="muh-cv-circle" ref="target"></canvas>
  </div>
</template>

<script>
export default {
  name: 'muhCircle',
  props: {
    option: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      inter: null
    }
  },
  computed: {
    mwidth () {
      return this.option.mwidth || 750
    },
    width (value) {
      let w = this.option.width || 200
      return this.returnCW(w)
    },
    height () {
      let h = this.option.height || 200
      return this.returnCW(h)
    },
    start () {
      return this.option.start || 0
    },
    end () {
      return this.option.end || 360
    },
    tcoclor () {
      return this.option.tcoclor || '#00ABEB'
    },
    bcolor () {
      return this.option.bcolor || '#fff'
    },
    outradius () {
      var l = this.option.outradius || 80
      return this.returnCW(l)
    },
    innerRadius () {
      if (this.outradius && this.thickness) {
        var l = this.outradius - this.thickness
        return l
      }
    },
    thickness () {
      var l = this.option.thickness || 10
      return this.returnCW(l)
    },
    percent () {
      return this.option.percent || 100
    },
    distance () {
      return this.option.distance || 80
    }
  },
  created () {
    this.clientWidth = document.documentElement.clientWidth
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    // clearInterval(this.inter)
    /* cancelAnimationFrame(this.inter)
    this.inter = null */
  },
  methods: {
    init () {
      let canvas = this.$refs.target
      let ctx = canvas.getContext('2d')
      if (window.devicePixelRatio) {
        canvas.style.width = this.width + 'px'
        canvas.style.height = this.height + 'px'
        // this.width + 'px'
        // this.height + 'px'
        canvas.height = this.height  * window.devicePixelRatio
        canvas.width = this.width * window.devicePixelRatio
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      }
      ctx.translate(this.width / 2, this.height / 2)
      ctx.rotate(90 * Math.PI / 180)
      ctx.fillStyle = '#eee'
      // this.render(ctx, this.start, this.end)
      var lingrad = ctx.createLinearGradient(0, 0, 150, 0);
      lingrad.addColorStop(0, this.tcoclor)
      lingrad.addColorStop(1, this.bcolor)
      ctx.fillStyle = lingrad
      // this.render(ctx, this.start, this.end)
      let tempAngle = this.start
      let percent = this.percent / 100
      let twoEndAngle = percent * (this.end - this.start) + this.start
      let step = (twoEndAngle - this.start) / this.distance
      /* this.inter = setInterval(() => {
        if (tempAngle > twoEndAngle) {
          clearInterval(this.inter)
          this.inter = null
        } else {
          tempAngle += step
        }
        this.render(ctx, this.start, tempAngle)
      }, 20) */
      let the = this
      if (window.requestAnimationFrame) {
        this.inter = window.requestAnimationFrame(function fn () {
          if (tempAngle > twoEndAngle) {
            cancelAnimationFrame(the.inter)
          } else {
            tempAngle += step
            the.inter = window.requestAnimationFrame(fn)
          }
          the.render(ctx, the.start, tempAngle)
        })
      }
    },
    render (t, s, e) {
      t.beginPath()
      let x = 0
      let y = 0
      t.arc(x, y, this.outradius, (s * Math.PI / 180), e * Math.PI / 180) // 默认逆时针0=>Math.PI * 2
      t.arc(x, y, this.innerRadius, (e * Math.PI / 180), s * Math.PI / 180, true)
      t.fill()
    },
    returnCW (l) {
      return l * this.clientWidth / this.mwidth
    }
  }
}
</script>

<style scoped="scoped">
.muh-cv-circle {}
</style>
