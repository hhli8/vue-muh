<template>
  <div>
    <div v-if="option.type==='traverse'" class="traverse">
      <svg class="svg-loading">
        <circle :fill="color" cx="0" cy="50%" r="6" index="1">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.1"/>    
        </circle>
        <circle :fill="color" cx="0" cy="50%" r="6" class="index2">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.2"/>    
        </circle>
        <circle :fill="color" cx="0" cy="50%" r="6" class="index3">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.3"/>    
        </circle>
        <circle :fill="color" cx="0" cy="50%" r="6" class="index4">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.4"/>    
        </circle>
      </svg>
    </div>
    <div v-else-if="option.type==='ring'" class="ring">
      <svg class="ani-rot1" xml:space="preserve">
        <image x="0" y="0" :href='option.base64'/>
      </svg>
      <!--width="30" height="30"-->
      <!--version="1.1" width="30px" height="30px" viewBox="0 0 30 30" enable-background="new 0 0 30 30" -->
    </div>
    <div v-else-if="option.type==='loop'" class="loop ani-rot1">
      <slot></slot>
    </div>
    <div v-else-if="option.type==='loopstep'" class="loopstep ani-rot3">
      <slot></slot>
    </div>
    <div v-else-if="option.type==='semic'" class="semic">
      <svg class="">
        <defs>
          <linearGradient id="linear">
            <stop offset="0%" :stop-color="color" />
            <stop offset="59%" :stop-color="color" />
            <stop offset="60%" stop-color="transparent" />
            <stop offset="100%" stop-color="transparent" />
          </linearGradient>
        </defs>
        <circle stroke="url(#linear)">
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="1s"
            from="0"
            to="360"
            repeatCount="indefinite"/>
        </circle>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'muhLoading',
  props: {
    option: {
      type: Object,
      default: {}
    }
  },
  computed: {
    color () {
      return (this.option && this.option.color) || '#000'
    }
  },
  created () {
    //
  }
}
</script>

<style scoped="scoped" lang="scss" src="./index.scss">
</style>
