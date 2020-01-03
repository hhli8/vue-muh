<template>
  <div>
    <p style="text-align: center;padding: 50px 0;">this is popup</p>
    
    <!--<div>
      start<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />asdasdasdasdasd<br />
      end
    </div>-->
    <br /><br /><br />
    <button @click="click">打开</button>
    <!---->
    <!--<muh-popup></muh-popup>-->
    <muh-popup v-model="popupShow">
      <button @click="popupShow=false">关闭</button>
      <div>asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />end</div>
    </muh-popup>
    
    <div id="codeView" v-highlight v-html='htmlEncode(code)'></div>
  </div>
</template>

<script>
import usecode from './use.txt'
export default {
  data () {
    return {
      code: '',
      popupShow: false
    }
  },
  created () {
    this.code = usecode
  },
  methods: {
    click () {
      this.popupShow = true
    },
    close () {
      this.popupShow = false
    }
  }
}
</script>

<style>
</style>
