<template>
  <div>
    this is canvas<br />
    <canvas class="cv-circle" ref="target"></canvas>
    <div class="demo"></div>
    <muh-circle :option="option"></muh-circle>
    <!--<m-circle :diameter="390"></m-circle>-->
    <div id="codeView" v-highlight v-html='htmlEncode(code)'></div>
  </div>
</template>

<script>
import usecode from './circle.txt'
// import mCircle from './c.vue'
export default {
  components: {
    // mCircle
  },
  data () {
    return {
      code: '',
      start: 0,
      // 0 * Math.PI / 180
      end:  360,
      option2: {
        width: 300, // 宽
        height: 300, // 高
        start: 0, // 起点角度
        end: 360, // 结束角度
        tcoclor: 'red',
        bcolor: '#fff',
        outradius: 85,
        thickness: 10,
        percent: 98,
        distance: 100, // 间距，越大，速度越小
        mwidth: 340 // 设计稿默认宽度
      },
      option: {
        width: 390, // 宽
        height: 390, // 高
        start: 45, // 起点角度
        end: 320, // 结束角度
        tcoclor: 'red',
        bcolor: '#fff',
        outradius: 85,
        thickness: 10,
        percent: 100,
        distance: 100, // 间距，越大，速度越小
        mwidth: 750 // 设计稿默认宽度
      }
    }
  },
  mounted () {
    this.code = usecode
    var canvas = this.$refs.target
    canvas.width = 300
    canvas.height = 300
    
    var ctx = canvas.getContext('2d')
     var width = canvas.width,
         height=canvas.height
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    canvas.height = height * window.devicePixelRatio;
    canvas.width = width * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    ctx.translate(canvas.width / 2, canvas.height / 2)
    // ctx.rotate(this.angle2Radian(225)) // 将画布旋转225度
    ctx.rotate(90 * Math.PI / 180)
    ctx.fillStyle = "#eee"
    let startAngle = -90 // 开始角度
    let endAngle = 180 // 结束角度
    var renderRing = (t, s, e) => {
      t.beginPath()
      let x = -150 // 圆心x坐标
      let y = 150 // 圆心y坐标
      let radius = 110 // 外环半径
      let thickness = 10 // 圆环厚度
      let innerRadius = radius - thickness // 内环半径
      // ctx.arc(x, y, radius, angle2Radian(s), angle2Radian(e))
//    ctx.arc(x, y, radius, 0, Math.PI * 2) // 默认逆时针0=>Math.PI * 2
//    ctx.arc(x, y, innerRadius, Math.PI * 2, 0, true)
      ctx.arc(x, y, radius, (s * Math.PI / 180), e * Math.PI / 180) // 默认逆时针0=>Math.PI * 2
      ctx.arc(x, y, innerRadius, (e * Math.PI / 180), s * Math.PI / 180, true)
      // 计算开始点坐标
      let endAngle = 360
      let oneCtrlPoint = calcRingPoint(x, y, innerRadius + thickness / 2, endAngle)
      // 绘制外环与内环第一个连接处的圆环
      // ctx.arc(oneCtrlPoint.x, oneCtrlPoint.y, thickness / 2, angle2Radian(-90), angle2Radian(270))
      t.fill()
      // t.stroke()
    }
    renderRing(ctx, this.start, this.end)
    function angle2Radian (angle) {
      return angle * Math.PI / 180
    }
    function calcRingPoint (x, y, radius, angle) {
      let res = {}
      res.x = x + radius * Math.cos(angle * Math.PI / 180)
      res.y = y + radius * Math.sin(angle * Math.PI / 180)
      return res
    }
    var lingrad = ctx.createLinearGradient(0, 0, 150, 0);
    lingrad.addColorStop(0, '#00ABEB');
    lingrad.addColorStop(1, '#fff');
    ctx.fillStyle = lingrad
    // renderRing(ctx, this.start, this.end)
    let tempAngle = this.start
    let total = 100 // 总分
    let now = 100 // 当前分数
    let percent = now / total
    let twoEndAngle = percent * (this.end - this.start) + this.start
    let step = (twoEndAngle - this.start) / 80
//  let numberSpan = document.querySelector('.number')
    let inter = setInterval(() => {
      if (tempAngle > twoEndAngle) {
        clearInterval(inter)
      } else {
        // numberSpan.innerText = percent * 100
        tempAngle += step
      }
      renderRing(ctx, this.start, tempAngle)
    }, 20)
  },
  methods: {
    //
  }
}
</script>

<style>
</style>
