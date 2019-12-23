<template>
  <div>
    <lay-tpfix :option="layTpfix">
      <span slot="right" class="more"></span>
      <!--<div slot="nav">this is nav</div>-->
      <div slot="listbox">
        start<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />end
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
      }
    }
  }
}
</script>

<style>
</style>
