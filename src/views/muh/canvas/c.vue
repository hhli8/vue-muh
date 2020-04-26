<template>
  <div class="muh-circle">
    <canvas class="muh-trans-circle" ref="target"></canvas>
  </div>
</template>

<script>
export default {
  props: {
    diameter: {
      type: Number,
      default: 300
    }
  },
  data () {
    return {
      clientWidth: '', // 屏幕宽度
      mwidth: 750 // 设计稿宽度
    }
  },
  computed: {
    // 获取渲染值
    udiameter () {
      return this.diameter * this.clientWidth / this.mwidth
    }
  },
  created () {
    this.clientWidth = document.documentElement.clientWidth
  },
  mounted () {
    let canvas = this.$refs.target
    let ctx = canvas.getContext('2d')
    canvas.style.width = this.udiameter + 'px'
    canvas.style.height = this.udiameter + 'px'
    canvas.height = this.udiameter
    canvas.width = this.udiameter
    ctx.fillStyle = 'linear-gradient(90deg, #8aaaff, #fa8cff)'
    // 'linear-gradient(-90deg,rgba(40,88,214,1),rgba(74,249,255,1))'
    ctx.beginPath()
    ctx.arc(this.udiameter / 2, this.udiameter / 2, this.udiameter / 2, 0 * Math.PI,  4 / 3 * Math.PI)
    ctx.arc(this.udiameter / 2, this.udiameter / 2, 80, 4 / 3 * Math.PI, 0 * Math.PI, true)
    
    ctx.fill()
  },
  methods: {}
}
</script>

<style scoped="scoped" lang="scss">
.muh-trans-circle {
  vertical-align: bottom;
  transform: rotate(150deg);
}
</style>
