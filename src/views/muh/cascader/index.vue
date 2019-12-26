<template>
  <div>
    this is demo  Cascader<br />
    <!---->
    <muhCascader :list="list"></muhCascader>
    <!--<muh-cascader></muh-cascader>-->
    <!--<muhcascader></muhcascader>   err-->
    <br /><br /><br /><br /><br />
    <muhCascader :list="list2" v-model="value" :nextUpdata="nextUpdata"></muhCascader>
    
    <div id="codeView" v-highlight v-html='htmlEncode(code)'></div>
    
  </div>
</template>

<script>
import data from '@/views/data/cascaderData.js'
import data2 from '@/views/data/cascaderData2.js'
import usecode from './use.txt'
export default {
  name: '',
  data () {
    return {
      list: [],
      list2: [],
      value: ['衣服', '女装', '上衣'],
      code: '',
      nextUpdata: false
    }
  },
  created () {
    this.code = usecode
    setTimeout(() => {
      this.list = data
      this.list2 = data2
    }, 1000)
  }
}
</script>

<style>
</style>
