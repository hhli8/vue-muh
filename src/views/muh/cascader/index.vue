<template>
  <div>
    this is demo  Cascader
    <!---->
    <muhCascader :list="list"></muhCascader>
    <!--<muh-cascader></muh-cascader>-->
    <!--<muhcascader></muhcascader>   err-->
  </div>
</template>

<script>
import data from '@/views/data/cascaderData.js'
export default {
  name: '',
  data () {
    return {
      list: []
    }
  },
  created () {
    setTimeout(() => {
      this.list = data
    }, 1000)
  }
}
</script>

<style>
</style>
