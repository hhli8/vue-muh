/*
 * lhh-2019-08-05
 */
<template>
  <div class="muh-sku">
    <div class="muh-sku-title">{{skuChoseText}}</div>
    <div class="muh-sku-list" v-for="(item, index) in skulist" :key="index">
      <div class="name">{{item[fname]}}</div>
      <div class="sitem-box">
        <div v-for="(sitem, sindex) in item[fchildren]" class="sitem" :class="[sitem.nopitch?'disable':'', sitem.match?'chosed':'']" :key="sindex" @click="select($event, item, index, sitem, sindex)">
          {{sitem[sname]}}
        </div>
        <!--<div class="sitem">阿斯达</div>
        <div class="sitem disable">阿达撒</div>
        <div class="sitem chosed">阿萨德</div>-->
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
  computed: {
    // 结构属性字段
    fname () {
      return (this.option.structure && this.option.structure.name) || 'pname'
    },
    fid () {
      return (this.option.structure && this.option.structure.id) || 'pid'
    },
    fchildren () {
      return (this.option.structure && this.option.structure.children) || 'values'
    },
    sname () {
      return (this.option.structure && this.option.structure.cstructure && this.option.structure.cstructure.name) || 'vname'
    },
    sid () {
      return (this.option.structure && this.option.structure.cstructure && this.option.structure.cstructure.id) || 'vid'
    }
  },
  watch: {
    skulist (val) {
      var str = ''
      if (val && val.length) {
        val.forEach((item) => {
          str += item[this.fname] + ' '
        })
      }
      this.skuChoseText = '请选择 ' + str
    }
  },
  data () {
    return {
      skuChoseText: ''
    }
  },
  created () {
    //
  },
  mounted () {
    //
  },
  methods: {
    select () { // 选择sku
      //
    }
  }
}
</script>

<style scoped="scoped" lang="scss" src="./index.scss"></style>
