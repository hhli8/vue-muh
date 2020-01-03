<template>
  <div class="">
    <transition name="overlay">
      <div class="overlay" :class="uishow?'act':''" v-show="elshow" @click="overlayClick"></div>
    </transition>
    <div ref="muhPopup" class="muh-popup" :class="'muh-popup-'+position" :style='"bottom:"+bottom+"px;opacity:"+opacity+";"' >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'muhPopup',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'bottom'
    }
  },
  model: {
    prop: 'show'
  },
  data () {
    return {
      elshow: false,
      uishow: false,
      bottom: 0,
      opacity: 0
    }
  },
  watch: {
    show (value) {
      if (value) {
        this.open()
      } else {
        this.close()
      }
    }
  },
  created () {
    //
  },
  mounted () {
    this.bottom = -this.$refs.muhPopup.clientHeight
  },
  methods: {
    open () {
      this.elshow = true // 弹窗元素显示出来，透明影藏
      this.opacity = 1 // 处理初始化时底部元素下滑效果
      setTimeout(() => {
        this.bottom = 0 // 定位改变
        this.uishow = true // 遮罩元素取消透明
        this.addClass(document.body, 'muh-overflow-hidden')
      }, 50)
    },
    close () {
      this.bottom = -this.$refs.muhPopup.clientHeight
      this.uishow = false // 遮罩元素透明度0
      setTimeout(() => {
        this.elshow = false
        // this.$emit('close')
        this.removeClass(document.body, 'muh-overflow-hidden')
      }, 300)
    },
    overlayClick () {
      this.$emit('input', false)
    }
  }
}
</script>

<style scoped="scoped" lang="scss" src="./index.scss"></style>
<style>
body.muh-overflow-hidden {
  overflow: hidden !important;
}
</style>
