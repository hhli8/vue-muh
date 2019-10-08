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
  props: ['show', 'position'],
  data () {
    return {
      elshow: false,
      uishow: false,
      bottom: 0,
      opacity: 0
    }
  },
  computed: {
    myshow: {
      get () {
        return this.show
      },
      set (newValue) {
        this.close()
      }
    }
  },
  watch: {
    myshow (val) {
      if (val) {
        this.open()
      } else {
        // console.log(111)
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
      this.elshow = true
      this.opacity = 1
      setTimeout(() => {
        this.bottom = 0
        this.uishow = true
      }, 50)
    },
    close () {
      this.bottom = -this.$refs.muhPopup.clientHeight
      this.uishow = false
      setTimeout(() => {
        this.elshow = false
        this.$emit('close')
      }, 300)
    },
    overlayClick () {
      this.myshow = false
    }
  }
}
</script>

<style scoped="scoped" lang="scss" src="./index.scss"></style>
