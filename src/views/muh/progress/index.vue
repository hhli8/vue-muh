<template>
  <div class="page">
    <p>this is progress</p>
    <!--<output for='p'></output>
    <progress ref="progress" value='' max='100'></progress>
    
    <div style="margin-top: 50px;">
      <div class="muh-progress">
        <span class="muh-progress__portion"></span>
        <span class="output">30%</span>
      </div>
    </div>-->
    <br /><br /><br /><br />
    <muh-progress v-model="percent" :isMoving="true" :K="k">
      <span class="output">{{percent}}%</span>
    </muh-progress>
    <br /><br /><br /><br />
    <muh-progress v-model="percent1" :isMoving="true" :isNative="true"></muh-progress>
    <div id="codeView" v-highlight v-html='htmlEncode(code)'></div>
  </div>
</template>

<script>
import usecode from './use.txt'
export default {
  data () {
    return {
      value: '',
      k: 5,
      time: '',
      percent: 56,
      percent1: 0,
      code: ''
    }
  },
  mounted () {
    this.code = usecode
    let T = this.$refs.progress
    let OUT = document.querySelector('[for=p]')
    setTimeout(() => {
      /* this.value = 60
      let K = this.k
      const TMAX = this.value * K
      function load(t = 0) {
        if (t <= TMAX) {
          if (t % K === 0) OUT.value = T.value = t / K
          // console.log(t)
          requestAnimationFrame(load.bind(window, t + (Math.random() > .5)))
        }
      }
      load() */
      
      this.percent = 78
      this.percent1 = 78
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

<style scoped="scoped" lang='scss' src="./index.scss">
</style>
