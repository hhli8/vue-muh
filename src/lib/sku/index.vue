/*
 * lhh-2019-08-05
 */
<template>
  <div class="muh-sku">
    <div class="muh-sku-good">
      <div class="good-img"><img :src="goodimg" alt="" /></div>
      <div class="good-info">
        <div>{{good_price}}</div>
      </div>
    </div>
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
    },
    stockflag () { // 库存开关
      return this.option.stockflag
    }
  },
  watch: {
    skulist (val) {
      this.init(val)
    },
    option (obj) {
      if (obj) {
        this.goodimg = obj.degood && obj.degood.img
        this.good_price = obj.degood && (obj.degood.price / 100).toFixed(2)
      }
    }
  },
  data () {
    return {
      skuChoseText: '',
      goodimg: '', // 商品图片
      good_price: '', // 商品价格-展示
      good_oprice: '' // 商品原价
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
              if (this.stockflag) {
                tag = skuPvStrs.indexOf(pvStr) !== -1 && (target.stock_num && target.stock_num > 0)
              }
              if (tag) {
                this.$set(sitem, 'nopitch', false) // sku里面，只要有good里面存在对应(或库存为0)的则设为false,可选
                break
              }
            }
          })
        })
      }
      this.skuChoseText = '请选择 ' + str
    },
    cancelSelectInit () {
      var obj = this.option
      this.goodimg = obj.degood && obj.degood.img
      this.good_price = obj.degood && (obj.degood.price / 100).toFixed(2)
    },
    select (e, item, index, sitem, sindex) { // 选择sku
      if (sitem.nopitch) return
      if (sitem.match) {
        this.$set(sitem, 'match', false)
        this.cancelSelectInit()
      } else {
        this.$set(sitem, 'match', true)
        if (sitem.imgUrl) this.goodimg = sitem.imgUrl
        this.good_price = 100
      }
    }
  }
}
</script>

<style scoped="scoped" lang="scss" src="./index.scss"></style>
