<template>
  <div>
    <lay-fullscreen ref="fullscreen" :option="option">
      <div slot="listbox">
        start<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />end
      </div>
    </lay-fullscreen>
  </div>
</template>

<script>
export default {
  data () {
    return {
      option: {
        title: 'fullscreen',
        headFixed: true,
        scrollHeight: '',
        lfFun: () => {
          //
        },
        rtFun: () => {
          //
        }
      }
    }
  },
  created () {
    setTimeout(() => {
      this.option = {
        title: 'fullscreen',
        headFixed: true,
        scrollHeight: '',
        backFun: '',
        rtFun: () => {
          console.log('right')
        }
      }
    }, 300)
  },
  beforeDestroy () {
    this.$refs.fullscreen.destroy()
  }
}
</script>

<style>
</style>
