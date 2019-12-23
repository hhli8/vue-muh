<template>
  <div>
    <lay-tpfix :option="layTpfix">
      <span slot="right" class="more"></span>
      <!--<div slot="nav">this is nav</div>-->
      <div slot="listbox">
        <button @click="open">点我啊-底部显示</button>
        <p>
          22start<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br /><button @click="open">点我啊-底部显示</button>asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />asdasdasdasd<br />
          <button @click="open">点我啊-底部显示</button>
          end
        </p>
        <muh-popup :show="popupShow" :position="'bottom'" @close="close">
          <div>asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />end</div>
        </muh-popup>
        <!--start<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />end-->
      </div>
    </lay-tpfix>
  </div>
</template>

<script>
export default {
  data () {
    return {
      layTpfix: {
        style: 'sina',
        title: 'muh-is good',
        right: 'share', // self-自定义 share-分享
        backFun: '',
        backFun2: () => {
          console.log('back')
        }, //
        rightFun: () => {
          console.log('right')
        } //
      },
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