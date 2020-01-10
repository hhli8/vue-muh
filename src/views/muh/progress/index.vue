<template>
  <div class="page">
    <output for='p'></output>
    <progress ref="progress" value='' max='100'></progress>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      k: 5,
      time: ''
    }
  },
  mounted () {
    let T = this.$refs.progress
    let OUT = document.querySelector('[for=p]')
    setTimeout(() => {
      this.value = 60
      let K = this.k
      const TMAX = this.value * K
      function load(t = 0) {
        if (t <= TMAX) {
          if (t % K === 0) OUT.value = T.value = t / K
          // console.log(t)
          this.time = requestAnimationFrame(load.bind(window, t + (Math.random() > .5)))
        }
      }
      load()
    }, 50)
  },
  beforeDestroy () {
    //
  },
  methods: {
    //
  }
}
</script>

<style scoped="scoped" src="./index.scss">
</style>
