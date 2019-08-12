/*
 * lhh-2019-08-05
 */
<template>
  <div class="muh-sku">
    <div class="muh-sku-title">请选择。。。。</div>
    <div class="muh-sku-list" v-for="(item, index) in skulist" :key="index">
      <div class="name">{{item.pname}}</div>
      <div class="sitem-box">
        <div v-for="(sitem, sindex) in item.values" class="sitem" :key="sindex">
          {{sitem.vname}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sku',
  props: {
    goodlist: {
      type: Array,
      default: []
    },
    skulist: {
      type: Array,
      default: []
    },
    option: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      //
    }
  },
  created () {
    
  },
  mounted () {
    
  },
  methods: {
    //
  }
}
</script>

<style scoped="scoped" lang="scss" src="./index.scss"></style>
