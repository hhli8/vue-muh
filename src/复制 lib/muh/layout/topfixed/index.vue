/*
 * lhh-适合站内外顶部固定包含状态栏，header，插槽-固定tab
 */
<template>
  <div :class="option.style">
    <div class="topFixed">
      <div class="bar" ref="bar" :style='"height: "+physicalHeight+";"'></div>
      <div class="besideBar" ref="header">
        <div class="header" v-if="isApp">
          <span class="back icon" @click="back"></span>
          <span class="title">{{option.title}}</span>
          <span v-if="option.right!=='self'" class="right icon" :class="option.right" @click="right"></span>
          <slot v-else name="right" @click="right"></slot>
        </div>
        <slot name="nav"></slot>
      </div>
    </div>
    <div class="scroll-content">
      <div class="copy-topfixed" :style='"height: "+topHeight+";"'></div>
      <slot name="listbox"></slot>
    </div>
  </div>
</template>

<script>
import { apwbBridge, setSBcolor } from '@/util/appbridge'
export default {
  name: 'layTpfix',
  props: ['option'],
  data () {
    return {
      topHeight: '',
      physicalHeight: ''
    }
  },
  mounted () {
    // localStorage.physicalheight = ''
    if (this.isApp) {
      if (localStorage.physicalheight) {
        this.physicalHeight = localStorage.physicalheight
        this.setCopyHeight(Number(this.physicalHeight.slice(0, -2)))
      } else {
        apwbBridge('getStatusBarHeight', {}, (res) => {
          res = JSON.parse(res)
          this.physicalHeight = (res.body.height / window.devicePixelRatio) + 'px'
          localStorage.setItem('physicalheight', this.physicalHeight)
          this.setCopyHeight(Number(this.physicalHeight.slice(0, -2)))
        })
      }
    } else {
      this.setCopyHeight(0)
    }
    setSBcolor('f')
  },
  methods: {
    setCopyHeight (height) {
      let h = this.$refs.header.clientHeight
      this.topHeight = (h + height) + 'px'
    },
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
    right () {
      if (this.option.rightFun) {
        this.option.rightFun()
      } else {
        console.log('right2')
      }
    }
  }
}
</script>

<style lang="scss" scoped="scoped" src="./index.scss"></style>
