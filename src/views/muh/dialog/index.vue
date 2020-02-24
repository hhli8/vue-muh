<template>
  <div>
    <p class="mtitle">this is dialog</p>
    <div>
      <button @click="initshow = true">init-dialog</button>
      <button @click="onNormal">normal-dialog</button>
    </div>
    <muh-dialog :type="'init'" v-model="initshow">
      <div style="width:200px;padding: 30px;">9999</div>
    </muh-dialog>
    <muh-dialog :type="'normal'" v-model="normalshow" show-cancel-button
      :data='dialogData'>
      <!--<div style="width:200px;padding: 30px;">9999</div>-->
    </muh-dialog>
    <div v-highlight v-html='htmlEncode(code)'></div>
  </div>
</template>

<script>
import usecode from './use.txt'
export default {
  data () {
    return {
      initshow: false,
      normalshow: false,
      dialogData: {},
      code: ''
    }
  },
  created () {
    this.code = usecode
  },
  methods: {
    onNormal () {
      this.dialogData = {
        title: '提示',
        content: '确定放弃此次操作吗？',
        confirm: (val) => {
          console.log(val)
          this.normalshow = false
        }
      }
      this.normalshow = true
    }
  }
}
</script>

<style scoped="scoped" lang="scss">
.mtitle {
  padding: 20px;
  text-align: center;
  font-size: 42px;
}
</style>
