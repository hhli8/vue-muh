<template>
  <div>
    <p style="text-align: center;padding: 30px 0;font-size: 38px;">this is video</p>
    <div class="muh-video">
      <video
        ref="video"
        src="./ckin.mp4"
        preload="metadata"
        data-title="The curious case of Chameleon...">
      </video>
      <div class="xg-poster" :class="[posterHide]" :style='"background-image: url("+videoposter+");"'></div>
      <!-- :poster="videoposter"   poster="./ckin.jpg"  -->
      <div class="xg-cover" @click="showCover">
        <div class="xg-start" @click="play" v-show="!inplay">
          <i></i>
          <!--<svg t="1579229661841" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2510" width="200" height="200"><path d="M512 68.191078c-245.204631 0-443.808922 198.60429-443.808922 443.808922s198.60429 443.808922 443.808922 443.808922 443.808922-198.60429 443.808922-443.808922S757.203608 68.191078 512 68.191078zM423.23842 711.713554 423.23842 312.285422l266.284739 199.713554L423.23842 711.713554z" p-id="2511"></path></svg>-->
        </div>
        <div class="xg-pause" v-show="inplay" @click="pause" :class="[isHide]">
          <div class="icon-i">
            <i></i><i></i>
          </div>
          <!--<svg t="1579229745379" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3794" width="200" height="200"><path d="M511.091 960.558c-60.438 0-119.086-11.844-174.313-35.203-53.328-22.556-101.213-54.839-142.329-95.954-41.115-41.114-73.398-89.001-95.954-142.328-23.359-55.228-35.204-113.875-35.204-174.314 0-60.438 11.844-119.086 35.204-174.313 22.555-53.328 54.839-101.213 95.954-142.329 41.115-41.115 89.001-73.398 142.329-95.954 55.228-23.359 113.875-35.204 174.313-35.204 60.439 0 119.086 11.844 174.314 35.204 53.327 22.555 101.214 54.839 142.328 95.954 41.115 41.115 73.398 89.001 95.954 142.329 23.359 55.228 35.203 113.875 35.203 174.313 0 60.439-11.844 119.086-35.203 174.314-22.556 53.327-54.839 101.214-95.954 142.328-41.114 41.115-89.001 73.398-142.328 95.954-55.227 23.359-113.875 35.203-174.314 35.203z m0-831.599c-211.627 0-383.799 172.172-383.799 383.799s172.172 383.799 383.799 383.799S894.89 724.385 894.89 512.758 722.719 128.959 511.091 128.959z" fill="" p-id="3795"></path><path d="M386.797 319.996h64v383.888h-64zM575.797 318.996h64v383.888h-64z" fill="" p-id="3796"></path></svg>-->
        </div>
        <div class="xg-bottom" :class="[isHide]">
          <div class="time time-cur">{{curtime}}</div>
          <div class="progress">
            <div class="cache" :style='"width: "+(totalTime!==0?buffered*100/totalTime:0)+"%;"'></div>
            <div class="played" :style='"width: "+(totalTime!==0?curTIME*100/totalTime:0)+"%;"'><div class="dot"></div></div>
          </div>
          <div class="time time-total">{{duration}}</div>
          <div class="toggle-view">
            <svg t="1579244056022" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4554" width="200" height="200"><path d="M224 416H160V192l32-32h224v64H224zM832 864h-224v-64h192v-192h64v224z" fill="#ffffff" p-id="4555"></path><path d="M416 864H192l-32-32v-224h64v192h192zM864 416h-64V224h-192V160h224l32 32z" fill="#ffffff" p-id="4556"></path></svg>
          </div>
        </div>
      </div>
    </div>
    
    <div>
      {{d}}
      <p>{{x}}</p>
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      videosrc: '', // 视频链接
      videoposter: '', // 背景图链接
      duration: '00:00',
      curtime: '00:00',
      curTIME: 0, // 当前时间秒数
      inplay: false, // 是否播放中
      isHide: '', // 可隐藏组件是否隐藏中 hide ''
      posterHide: '', // 背景图隐藏 hide ''
      interval: null, // 时间定时器
      timeout: null,
      status: 'pause',
      buffered: 0, // 缓存下来的时间
      loadover: false, // 播放完成
      totalTime: 0, // 总秒数
      d: '',
      x: 0
    }
  },
  created () {
    setTimeout(() => {
      // this.videosrc = 1
      // this.videoposter = 'https://desk-fd.zol-img.com.cn/g2/M00/0D/01/Cg-4WlV-bIyIX4Z0ACE5oAIZt3wAAFYHQEQn1EAITm4695.jpg' // ./ckin.jpg
      this.videoposter = 'https://sf1-xgcdn-tos.pstatp.com/img/tos-cn-i-0004/4d7ee0ad8ee24137a766f701f302c796~tplv-noop.jpg'
    }, 30)
  },
  mounted () {
    let video = this.$refs.video
    video.oncanplay = () => {
      this.d = video // video.duration
      // video.currentTime = 8
      video.play()
      console.log(video.duration)
      setTimeout(() => {
        this.d = video.duration
      }, 100)
      
      let t = parseInt(video.duration)
      let m = parseInt(t / 60)
      this.totalTime = t
      let s = parseInt(t % 60)
      this.duration = (m >= 10 ? m : '0' + m) + ':' + (s >= 10 ? s : '0' + s)
      video.addEventListener('timeupdate', () => {
        // console.log(video.buffered.start(0), video.buffered.end(0))
        this.buffered = parseInt(video.buffered.end(0))
        // console.log(this.buffered/this.totalTime)
      })
    }
    setInterval(() => {
      // this.d = video.duration
    }, 60)
//  video.oncanplaythrough = () => {
//    this.d = video.duration
//  }
  },
  methods: {
    play () {
      if (this.loadover) {
        this.curTIME = 0
        this.loadover = false
      }
      this.inplay = true
      this.posterHide = 'hide'
      this.clearTimeout()
      this.timeout = setTimeout(() => {
        // this.isHide = 'hide' // mock
        // console.log(this.isHide)
      }, 3000)
      if (this.curTIME === 0) this.curtime = '00:00'
      this.interval = setInterval(() => {
        // 未缓冲完成
        if (this.curTIME + 1 > this.buffered && this.buffered < this.totalTime) {
          return
        }
        // this.curTIME++
        this.curTIME = this.curTIME + 60 / 1000
        let m = parseInt(this.curTIME / 60)
        let s = parseInt(this.curTIME % 60)
        this.curtime = (m >= 10 ? m : '0' + m) + ':' + (s >= 10 ? s : '0' + s)
        if (this.curTIME >= this.totalTime) {
          // 结束时初始化
          // this.posterHide = ''
          // this.curTIME = 0
          this.loadover = true
          this.inplay = false
          this.isHide = ''
          clearInterval(this.interval)
          this.interval = null
        }
      }, 60)
      this.status = 'play'
      this.$refs.video.play()
    },
    pause () {
      if (this.isHide) return
      this.$refs.video.pause()
      this.inplay = false
      clearInterval(this.interval)
      this.interval = null
      this.status = 'pause'
      // this.clearTimeout()
      // this.isHide = ''
    },
    showCover () {
      this.isHide = ''
      this.clearTimeout()
      // console.log(this.isHide)
      this.timeout = setTimeout(() => {
        // this.isHide = 'hide'
        if (this.status === 'pause') {
          this.isHide = ''
        } else {
          // this.isHide = 'hide'//mock
        }
        // console.log(this.isHide) // 触发pause后还会触发这边
      }, 3000)
    },
    clearTimeout () {
      clearTimeout(this.timeout)
      this.timeout = null
    }
  }
}
</script>

<style scoped="scoped" lang="scss" src="./index.scss">
</style>
