<template>
  <div>
    <button @click="open">点我啊-底部显示</button>
    <muh-popup :show="popupShow" :position="'bottom'" @close="close">
      <div>asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />end</div>
    </muh-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      popupShow: false
    }
  },
  methods: {
    open () {
      this.popupShow = true
    },
    close () {
      this.popupShow = false
      this.afterClose()
    },
    afterClose () {
      console.log(111111)
    }
  }
}
</script>

<style>
</style>