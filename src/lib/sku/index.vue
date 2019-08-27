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
    },
    showprice () { // 展示的价格
      return (this.option.structure && this.option.structure.cstructure && this.option.structure.cstructure.pricekey) || 'price'
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
      good_oprice: '', // 商品原价
      seleceProps: [], // 选中的sku-item集合
      targetGood: '' // 选中的商品
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
      // 取消时获取其他类里面选中的item，判断有无img，有则用，否则用默认，理论只有一个类会有
      var obj = this.option
      var resetOver = false
      this.seleceProps.forEach((item) => {
        if (item && item.imgUrl) {
          this.goodimg = item.imgUrl
          resetOver = true
        }
      })
      if (!resetOver) this.goodimg = obj.degood && obj.degood.img
      this.good_price = obj.degood && (obj.degood.price / 100).toFixed(2)
    },
    afterSelectComputed () {
      // step1:将非同级的按钮都置为可点// 已选中的后续处理
    },
    select (e, item, index, sitem, sindex) { // 选择sku
      if (sitem.nopitch) return
      if (sitem.match) {
        this.$set(sitem, 'match', false)
        this.seleceProps[index] = ''
        this.cancelSelectInit()
        // 处理选中后影响整个sku
        // 取消后非同级的置灰的有可能需要重新激活,同step3
      } else {
        this.$set(sitem, 'match', true)
        if (sitem.imgUrl) this.goodimg = sitem.imgUrl
        // this.good_price = 100
        // if (sitem[this.showprice]) this.good_price = sitem[this.showprice]
        this.seleceProps[index] = sitem
        // 处理选中后影响整个sku
        // step1:将非同级的未选中按钮都置为可点
        /* this.skulist.map((i, indexi) => {
          // 将非同级的都设置为可点
          if (index !== indexi) {
            i[this.fchildren].map((j) => {
              this.$set(j, 'nopitch', false)
            })
          } else {
            // 将同级激活的取消
            i[this.fchildren].map((j) => {
              if (j.match) {
                this.$set(j, 'match', false)
              }
            })
          }
        }) */
        item[this.fchildren].map((j) => {
          if (j.match) {
            this.$set(j, 'match', false)
          }
        })
        // step2:将当前设为选中
        this.$set(sitem, 'match', true)
        // step3:根据已选的sku集合轮询判断哪些需要置灰，不可点
      }
      // step1:将非同级的未选中按钮都置为可点
      this.skulist.map((i, indexi) => {
        // 将非同级的都设置为可点
        if (index !== indexi) {
          i[this.fchildren].map((j) => {
            this.$set(j, 'nopitch', false)
          })
        }
      })
      this.dealAfterToggle(item, index, sitem, sindex)
      // 处理选择后的显示标题文案以及价格等
      this.dealShowParams()
    },
    // 处理选择或取消后, 根据已选的sku集合轮询判断哪些需要置灰，不可点
    dealAfterToggle (item, index, sitem, sindex) {
      // console.log(this.seleceProps)
      // console.log(this.skulist, this.fid, this.sid)
      // 遍历处理
      this.skulist.forEach((i, indexi) => {
        // 非当前操作的spu，下的sku需要处理，且根据已选的其他的spu下的sku进行处理
        if (index !== indexi) {
          // 非自身所在的spu
          // 当前的单个sku与其他的已选的加起来处理goodslist
          i[this.fchildren].forEach((j, indexj) => {
            let nopitch = true // 先假设不满足
            for (var k = 0, l = this.goodlist.length; k < l; k++) {
              // 存在有符合当前的sku，且符合非本spu下的已选的sku则将nopitch=false
              if (this.checkIspitch(this.goodlist[k], j, indexi)) {
                nopitch = false
                break
              }
            }
            this.$set(j, 'nopitch', nopitch)
          })
        }
      })
    },
    checkIspitch (good, sitem, indexi) {
      var tag = true
      if (Number(good[`skus${indexi + 1}`]) !== Number(sitem[this.sid])) {
        tag = false
      }
      // 激活的非同级sku是否和当前good匹配
      this.seleceProps.forEach((item, index) => {
        if (index === indexi) return // 不与自身所在的激活比较
        if (item && (Number(item[this.sid]) !== Number(good[`skus${index + 1}`]))) {
          tag = false
        }
      })
      return tag
    },
    dealShowParams () {
      let count = 0
      let hadtext = ''
      let notext = ''
      this.skulist.forEach((item, si) => {
        if (this.seleceProps[si]) {
          hadtext += `"${this.seleceProps[si][this.sname]}" `
          count++
        } else {
          notext += item[this.fname] + ' '
        }
      })
      if (count === this.skulist.length) {
        this.skuChoseText = '已选: ' + hadtext
        for (var k = 0, l = this.goodlist.length; k < l; k++) {
          var tag = true
          // 都符合则 是对应商品
          for (var i = 0, L = this.seleceProps.length; i < L; i++) {
            var sku = this.seleceProps[i]
            if (Number(sku[this.sid]) !== Number(this.goodlist[k][`skus${i + 1}`])) {
              tag = false
              break
            }
          }
          if (tag) {
            this.targetGood = this.goodlist[k]
            var price = this.goodlist[k][this.showprice]
            // console.log(this.targetGood)
            var obj = this.option
            this.good_price = price ? (price /100).toFixed(2) : (obj.degood && (obj.degood.price / 100).toFixed(2))
            break
          }
        }
      } else {
        this.skuChoseText = '请选择 ' + notext
      }
    }
  }
}
</script>

<style scoped="scoped" lang="scss" src="./index.scss"></style>
