<template>
  <div class="app">
    <div class="topFixed" ref="fixedTop" :style='"background: rgba(255, 255, 255, "+opacity+");"'>
      <div class="physics-state-bar" :style='"height: "+physicsBarHeight+";"'></div>
      <div class="header">
        <span class="back f" :style='"opacity: "+(opacity)+";"' @click="back"></span>
        <span class="back b" :style='"opacity: "+(1-opacity)+";"' @click="back"></span>
        <span class="right f" :style='"opacity: "+(opacity)+";"' @click="rightfun"></span>
        <span class="right b" :style='"opacity: "+(1-opacity)+";"' @click="rightfun"></span>
        <span class="title" :style='"opacity: "+(opacity)+";"'>{{option.title}}</span>
      </div>
    </div>
    <div class="content">
      <div>
        <div class="copy-topfixed" :style='"height: "+physicsBarHeight+";"'></div>
        <div class="copy-header"></div>
      </div>
      <slot name="listbox"></slot>
    </div>
  </div>
</template>

<script>
import { apwbBridge, setSBcolor } from '@/util/appbridge'
export default {
  name: 'layFullscreen',
  props: ['option'],
  data () {
    return {
      opacity: 0,
      physicsBarHeight: ''
    }
  },
  computed: {
    headFixed () {
      return this.option && this.option.headFixed
    }
  },
  created () {
    // localStorage.physicalheight = ''
    if (localStorage.physicalheight) {
      this.physicsBarHeight = localStorage.physicalheight
    } else {
      apwbBridge('getStatusBarHeight', {}, (res) => {
        res = JSON.parse(res)
        this.physicsBarHeight = (res.body.height / window.devicePixelRatio) + 'px'
        localStorage.setItem('physicalheight', this.physicsBarHeight)
      })
    }
    // this.physicsBarHeight = '0.533333rem'
  },
  mounted () {
    window.addEventListener('scroll', this.scroll)
  },
  methods: {
    back () {
      if (this.isApp) {
        if (this.option.backFun) {
          this.option.backFun()
        } else {
          apwbBridge('back')
        }
      } else {
        if (this.option.backFun) {
          this.option.backFun()
        } else {
          this.$router.back()
        }
      }
    },
    rightfun () {
      this.option.rtFun()
    },
    scroll () {
      if (this.$refs.fixedTop) {
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        let h = this.option.scrollHeight || this.$refs.fixedTop.clientHeight
        this.opacity = scrollTop / h
        if (this.opacity >= 1) {
          setSBcolor('b')
        } else {
          setSBcolor('f')
        }
      }
    },
    destroy () {
      window.removeEventListener('scroll', this.scroll)
    }
  }
}
</script>

<style lang="scss" scoped="scoped" src="./index.scss"></style>
