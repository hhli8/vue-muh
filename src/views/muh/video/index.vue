<template>
  <div>
    <p style="text-align: center;padding: 30px 0;font-size: 38px;">this is video</p>
    <div class="muh-video">
      <video
        ref="video"
        src="./ckin.mp4"
        data-title="The curious case of Chameleon...">
      </video>
      <div class="xg-poster" :class="[inplay?'inplay':'']" :style='"background-image: url("+videoposter+");"'></div>
      <!-- :poster="videoposter"   poster="./ckin.jpg"  -->
      <div class="xg-start" :class="[inplay?'inplay':'']" @click="play">开始</div>
      <div class="xg-bottom" :class="[inplay?'inplay':'']">
        <div class="time time-cur">{{curtime}}</div>
        <div class="progress">line </div>
        <div class="time time-total">{{duration}}</div>
        <div class="toggle-view">全</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      videosrc: '',
      videoposter: '',
      duration: '00:00',
      curtime: '00:00',
      curTIME: 0,
      inplay: false,
      interval: null
    }
  },
  created () {
    setTimeout(() => {
      // this.videosrc = 1
      this.videoposter = 'https://desk-fd.zol-img.com.cn/g2/M00/0D/01/Cg-4WlV-bIyIX4Z0ACE5oAIZt3wAAFYHQEQn1EAITm4695.jpg' // ./ckin.jpg
    }, 30)
  },
  mounted () {
    let video = this.$refs.video
    video.oncanplay = () => {
      let t = video.duration
      let m = parseInt(t)
      let s = parseInt((t - s) * 60)
      this.duration = (s >= 10 ? s : '0' + s) + ':' + (m >= 10 ? m : '0' + m)
    }
  },
  methods: {
    play () {
      this.inplay = true
      this.interval = setInterval(() => {
        this.curTIME++
        let s = parseInt(this.curTIME / 60)
        let m = this.curTIME % 60
        this.curtime = (s >= 10 ? s : '0' + s) + ':' + (m >= 10 ? m : '0' + m)
      }, 1000)
      this.$refs.video.play()
    },
    pause () {
      //
    }
  }
}
</script>

<style scoped="scoped" lang="scss" src="./index.scss">
</style>
