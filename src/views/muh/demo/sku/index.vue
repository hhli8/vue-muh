<template>
  <div class="muh-sku" style="height:100%;overflow: hidden;display: flex;flex-direction: column;">
    <div class="muh-sku-good">
      <div class="good-img"><img :src="good_img" alt="" /></div>
      <div class="good-info">
        <div class="price">¥{{good_price}}</div>
        <!--<div class="stock">库存116件</div>-->
        <div class="txt">{{skuChoseText}}</div>
      </div>
    </div>
    <!--<div class="muh-sku-title">{{skuChoseText}}</div>-->
    <div class="scroll-box" style="flex: 1;overflow: scroll;">
      <div class="muh-sku-list" v-for="(item, index) in skulist" :key="index">
        <div class="name">{{item[fname]}}</div>
        <div class="sitem-box">
          <div v-for="(sitem, sindex) in item[fchildren]" class="sitem" :class="[sitem.nopitch?'disable':'', sitem.match?'chosed':'']" :key="sindex" @click="select($event, item, index, sitem, sindex)">
            {{sitem[sname]}}
          </div>
        </div>
      </div>
      <div class="count-box" style="display: flex;justify-content: space-between;">
        <span class="count-name">购买数量</span>
        <!--<span class="iconfont icon-minus"></span>
        <span class="iconfont">&#xe620;</span>
        <span class="iconfont icon-add"></span>-->
        <div class="count-computed">
          <span class="iconfont icon-minus" @click="minus"></span><span class="count-value">{{count}}</span><span class="iconfont icon-add" @click="add"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'muhSku',
  props: {
    goodlist: {
      type: Array,
      default: () => {
        return []
      }
    },
    skulist: {
      type: Array,
      default: () => {
        return []
      }
    },
    option: {
      type: Object,
      default: () => {
        return {}
      }
    },
    maxcount: {
      type: Number,
      default: 99
    }
  },
  computed: {
  	// 父名称
  	fname () {
  		return (this.option.structure && this.option.structure.pname) || 'pname'
  	},
  	fid () {
      return (this.option.structure && this.option.structure.pid) || 'pid'
    },
  	fchildren () {
  		return (this.option.structure && this.option.structure.chindren) || 'values'
  	},
  	sname () {
  		return (this.option.structure && this.option.structure.sname) || 'vname'
  	},
  	sid () {
      return (this.option.structure && this.option.structure.sid) || 'vid'
    },
    showprice () {
      return (this.option.structure && this.option.structure.price) || 'price'
    }
  },
  data () {
  	return {
  	  good_img: '', // 商品图片
    	good_price: '', // 价格
    	skuChoseText: '', // 显示已选或未选的参数
    	seleceProps: [], // 选中的sku-item集合
    	targetGood: '',
    	count: 1
  	}
  },
  watch: {
    skulist (val) {
      if (this.goodlist.length) {
        this.init(val)
      }
    },
    goodlist (val) {
      if (this.skulist.length) {
        this.init(this.skulist)
      }
    },
    option (val) {
      if (val) {
        if (val.gimg) this.good_img = val.gimg
        if (val.gprice) this.good_price = val.gprice
      }
    }
  },
  created () {
  	if (this.skulist.length) {
      this.init(this.skulist)
    }
  },
  methods: {
  	init (val) {
  		// 初始化，默认有的显示第一个，可通过flag是否需要此功能
  		let str = ''
  		let skus = val
      if (skus && skus.length) {
        skus.forEach((item, index) => {
          str += item[this.fname] + ' '
          item[this.fchildren].forEach((sitem, sindex) => {
            this.$set(sitem, 'nopitch', true) // 标记这个属性是否可以选择 true 不可
            this.$set(sitem, 'match', false) // 标记这个属性是否已经被选中 false 未选中
            for (var i = 0, l = this.goodlist.length; i < l; i++) {
              let target = this.goodlist[i]
              // 商品的skuid
              let skuPvStrs = target.skuPvStrs || (item[this.fid] + ':' + target[`skus${index+1}`])
              // sku的id拼接
              let pvStr = item[this.fid] + ':' + sitem[this.sid]
              // 改sku是否有满足的商品
              var tag = skuPvStrs.indexOf(pvStr) !== -1
              /* if (this.stockflag) {
                tag = skuPvStrs.indexOf(pvStr) !== -1 && (target.stock_num && target.stock_num > 0)
              } */
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
  	// 单个属性的点击事件
  	select (e, item, index, sitem, sindex) {
  		if (sitem.nopitch) return // true表示无匹配的商品
      if (sitem.match) {
        this.$set(sitem, 'match', false)
        this.seleceProps[index] = ''
        this.cancelSelectInit()
      } else {
        if (sitem.imgUrl) this.good_img = sitem.imgUrl
        this.seleceProps[index] = sitem
        // step1:将非同级的未选中按钮都置为可点
        // step2:将当前设为选中
        // step3:根据已选的sku集合轮询判断哪些需要置灰，不可点
        item[this.fchildren].map((j) => {
          if (j.match) {
            this.$set(j, 'match', false)
          }
        })
        this.$set(sitem, 'match', true)
      }
      // step1
      this.skulist.map((i, indexi) => {
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
  	// sku复点击可以取消时
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
      if (!resetOver) this.good_img = this.option.gimg
      this.good_price = this.option.gprice
    },
    // 将非同级的spu的item做判断(是否有商品对应)
    dealAfterToggle (item, index, sitem, sindex) {
      // console.log(item, index, sitem, sindex)
      this.skulist.forEach((i, indexi) => {
        // 非当前操作的spu，下的sku需要处理，且根据已选的其他的spu下的sku进行处理
        if (index !== indexi) {
          // 非自身所在的spu
          // 当前的单个sku与其他的已选的加起来处理goodslist
          i[this.fchildren].forEach((j, indexj) => {
            let nopitch = true // 先假设不满足
            for (var k = 0, l = this.goodlist.length; k < l; k++) {
              // 存在有符合当前的sku，且符合非本spu下的已选的sku则将nopitch=false
              // console.log(this.checkIspitch(this.goodlist[k], j, indexi))
              if (this.checkIspitch(this.goodlist[k], j, indexi)) {
                nopitch = false
                break
              }
            }
            // console.log(nopitch)
            this.$set(j, 'nopitch', nopitch)
          })
        }
      })
    },
    checkIspitch (good, sitem, indexi) {
      // 循环遍历到的商品，遍历的spu下sku，index
      var tag = true
      if (good.skuPvStrs) {
        // 如果不包含false
        // console.log(good.skuPvStrs, sitem[this.sid], good.skuPvStrs.indexOf(sitem[this.sid]))
        if (good.skuPvStrs.indexOf(sitem[this.sid]) === -1) {
          tag = false
        }
      } else {
        if (Number(good[`skus${indexi + 1}`]) !== Number(sitem[this.sid])) {
          tag = false
        }
      }
      // 激活的非同级sku是否和当前good匹配
      this.seleceProps.forEach((item, index) => {
        if (item) {
          if (index === indexi) return // 不与自身所在的激活比较
          if (good.skuPvStrs) {
            if (good.skuPvStrs.indexOf(item[this.sid]) === -1) {
              tag = false
            }
          } else {
            if (item && (Number(item[this.sid]) !== Number(good[`skus${index + 1}`]))) {
              tag = false
            }
          }
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
            this.good_price = this.goodlist[k][this.showprice]
            break
          }
        }
      } else {
        this.skuChoseText = '请选择 ' + notext
        this.targetGood = ''
      }
    },
    confirm (fun) {
      fun({
        skuArr: this.seleceProps,
        good: this.targetGood,
        count: this.count
      })
    },
    minus () {
      if (this.count > 1) this.count--
    },
    add () {
      if (this.count >= this.maxcount) {
        return
      } else {
        this.count++
      }
    },
  	demo () {
  	  //
  	}
  }
}
</script>

<style lang="scss" scoped="scoped" src="./index.scss">
</style>
