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
      this.init(val)
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
    init (val) {
      var str = ''
      if (val && val.length) {
        val.forEach((item, index) => {
          str += item[this.fname] + ' ' // 拼接文案
          // this.$set(item, 'nopitch', false) // 标记这个属性是否可以选择 true 不可
          // this.$set(item, 'match', false) // 标记这个属性是否已经被选中 false 未选中
          item[this.fchildren].forEach((sitem, sindex) => {
            this.$set(sitem, 'nopitch', true)
            this.$set(sitem, 'match', false)
            for (var i = 0, l = this.goodlist.length; i < l; i++) {
              let target = this.goodlist[i]
              let skuPvStrs = target.skuPvStrs || (item[this.fid] + ':' + target[`skus${index+1}`])
              let pvStr = item[this.fid] + ':' + sitem[this.sid]
              var tag = skuPvStrs.indexOf(pvStr) !== -1
              if (tag) {
                this.$set(sitem, 'nopitch', false) // sku里面，只要有good里面存在对应的则设为false,可选
                break
              }
              console.log(i)
            }
          })
        })
      }
      this.skuChoseText = '请选择 ' + str
      console.log(this.goodlist)
    },
    select () { // 选择sku
      //
    }
  }
}
</script>

<style scoped="scoped" lang="scss" src="./index.scss"></style>
