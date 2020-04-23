<template>
  <div>
    <div v-if="isNative">
      <output for='p'></output>
      <progress ref="progress" value='' max='100'></progress>
    </div>
    <div v-else>
      <div class="muh-progress" ref="fp">
        <span class="muh-progress__portion" :style='"width:"+swidth+"px;"'></span>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'muhProgress',
  props: {
    percent: {
      type: Number,
      default: 0
    },
    isMoving: {
      type: Boolean,
      default: false
    },
    isNative: {
      type: Boolean,
      default: false
    },
    K: {
      type: Number,
      default: 5
    }
  },
  model: {
    prop: 'percent'
  },
  data () {
    return {
      fwidth: '',
      swidth: ''
      // K: 5 // 指数，越大速度越慢
    }
  },
  mounted () {
    if (!this.isNative) {
      this.fwidth = this.$refs.fp.getBoundingClientRect().width
    }
  },
  watch: {
    percent (value) {
      this.$nextTick(() => {
        if (!this.isNative) {
          if (this.isMoving) {
            this.load(value, (t, K) => {
              this.swidth = t * this.fwidth / (K * 100)
            })
          } else {
            this.swidth = value * this.fwidth / 100
          }
        } else {
          let T = this.$refs.progress
          let OUT = document.querySelector('[for=p]')
          this.load(value, (t, K) => {
            OUT.value = T.value = t / K
          })
        }
      })
    }
  },
  methods: {
    load (value, fun) {
      let K = this.K
      const TMAX = value * K
      let the = this
      function load(t = 0) {
        if (t <= TMAX) {
          if (t % K === 0) fun(t, K)
          requestAnimationFrame(load.bind(window, t + (Math.random() > .5)))
        }
      }
      load()
    }
  }
}
</script>

<style scoped="scoped" lang="scss" src="./index.scss"></style>
