<template>
  <div>
    this is demo  Cascader<br />
    <!---->
    <muhCascader :list="list"></muhCascader>
    <!--<muh-cascader></muh-cascader>-->
    <!--<muhcascader></muhcascader>   err-->
    <br /><br /><br /><br /><br />
    <muhCascader :list="list2"></muhCascader>
    
    <div id="codeView" v-highlight v-html='htmlEncode(code)'></div>
    
    
    <div>
      待完成：参数格式自定义
    </div>
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
      code: ''
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
