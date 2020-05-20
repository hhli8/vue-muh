<template>
  <div>
    <p style="padding: 30px 0;text-align: center;font-size: 26px;">按钮</p>
    <div>
      <p>type: inner</p>
      <div><muh-button v-model="checkout1" @click="click"></muh-button></div>
    </div>
    <!---->
    <br /><br />
    <div>
      <p>type: outside</p>
      <div>按钮:<muh-button :type="'outside'" v-model="checkout2" @click="click"></muh-button></div>
    </div>
    <div id="codeView" v-highlight v-html='htmlEncode(usecode)'></div>
  </div>
</template>

<script>
import usecode from './use.txt'
export default {
  data () {
    return {
      usecode,
      checkout1: false,
      checkout2: false
    }
  },
  methods: {
    click (val) {
      console.log('点我啦', val)
    }
  }
}
</script>

<style>
</style>
