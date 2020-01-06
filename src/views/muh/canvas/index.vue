<template>
  <div>
    this is canvas<br />
    <canvas class="cv-circle" ref="target"></canvas>
  </div>
</template>

<script>
export default {
  mounted () {
    var canvas = this.$refs.target
    canvas.width = 300
    canvas.height = 300
    var ctx = canvas.getContext('2d')
    ctx.translate(canvas.width / 2, canvas.height / 2)
    ctx.rotate(this.angle2Radian(225)) // 将画布旋转225度
    ctx.fillStyle = "#eee"
    let startAngle = -90 // 开始角度
    let endAngle = 180 // 结束角度
    this.renderRing(t, startAngle, endAngle)
  },
  methods: {
    renderRing (t, s, e) {
      t.beginPath()
      let x = 0 // 圆心x坐标
      let y = 0 // 圆心y坐标
      let radius = 95 // 外环半径
      ctx.arc(x, y, radius, this.angle2Radian(s), this.angle2Radian(e))
      t.fill()
    },
    // 角度转弧度
    angle2Radian (angle) {
      return angle * Math.PI / 180
    }
  }
}
</script>

<style scoped="scoped" lang="scss" src="./index.scss">
</style>
