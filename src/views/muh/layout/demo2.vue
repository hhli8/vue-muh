<template>
  <div class="page">
    <button class="o-btn" @click="open">打开</button><br />
    <button class="o-btn" @click="close">关闭</button>
    <div class="target" ref="target">
      start<br />啦啦啦啦啦啦啦啦啦<br />啦啦啦啦啦啦啦啦啦<br />啦啦啦啦啦啦啦啦啦<br />啦啦啦啦啦啦啦啦啦<br />啦啦啦啦啦啦啦啦啦<br />啦啦啦啦啦啦啦啦啦<br />啦啦啦啦啦啦啦啦啦<br />啦啦啦啦啦啦啦啦啦<br />啦啦啦啦啦啦啦啦啦<br />啦啦啦啦啦啦啦啦啦<br />end
    </div>
    
    <div id="codeView" v-highlight v-html='htmlEncode(code)'></div>
  </div>
</template>

<script>
import usecode from './demo2.txt'
export default {
  data () {
    return {
      code: ''
    }
  },
  created () {
    this.code = usecode
  },
  methods: {
    open () {
      this.addClass(this.$refs.target, 'move')
    },
    close () {
      this.removeClass(this.$refs.target, 'move')
    }
  }
}
</script>

<style scoped="scoped" lang="scss" src="./demo2.scss">
</style>
