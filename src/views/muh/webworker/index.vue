<template>
  <div>
    <p style="text-align: center;padding: 30px 0;font-size: 38px;">this is web worker demo</p>
    <div>
      <p>无法模拟，需在同源下非本地文件</p>
      <div id="codeView" v-highlight v-html='htmlEncode(code)'></div>
    </div>
  </div>
</template>

<script>
import usecode from './use.txt'
export default {
  data () {
    return {
      code: ''
    }
  },
  mounted () {
    this.code = usecode
  }
}
</script>

<style>
</style>
