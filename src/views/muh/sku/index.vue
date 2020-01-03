<template>
  <div>
    <p>this is msku</p>
    <muh-sku
      ref="muhsku"
      :goodlist="goods"
      :skulist="skus"
      :option="skuOption">
    </muh-sku>
    <div class="confirm" @click="confirm">确定</div>
    <div id="codeView" v-highlight v-html='htmlEncode(code)'></div>
    
  </div>
</template>

<script>
// import skuData from '@/mock/skudata.js'
import goods from '@/views/data/skuGoods.js'
import skus from '@/views/data/skuS.js'
import usecode from './use.txt'
export default {
  data () {
    return {
      goods: [], // 商品列表
      skus: [], // sku列表
      skuOption: {}, // 其他配置
      code: ''
    }
  },
  methods: {
    confirm () {
      this.$refs.muhsku.confirm((res) => {
        // console.log(...arguments)
        // console.log(res)
      })
    }
  },
  created () {
  	this.code = usecode
  	setTimeout(() => {
  	  this.goods = goods
  	}, 1000)
    setTimeout(() => {
    	// this.goods = goods
    	this.skus = skus
    	this.skuOption = {
    		stockflag: false, // 是否开启库存逻辑，默认值为false
    		structure: {
    			pname: '', // sku父的名称
    			pid: '',
    			chindren: '', // sku子的对象
    			cname: '', // sku子的名称
    			cid: '',
    			price: 'curprice'
    		},
    		gimg: 'https://cbu01.alicdn.com/img/ibank/2018/420/661/8608166024_582723176.jpg', // 默认图片
    	  gprice: '319~568'
    	}
//    this.goods = skuData.goods
//    this.skus = skuData.skus
//    this.skuOption = {
//      degood: {
//        img: 'https://cbu01.alicdn.com/img/ibank/2018/420/661/8608166024_582723176.jpg',
//        price: 6500, // 分
//        id: '12asdqewasdad',
//        none_sku: true // 是否sku商品
//      }, // 默认显示数据*
//      needInit: false, // 每次在弹窗里打开是否需要初始化
//      stockflag: false, // 是否开启库存逻辑*
//      structure: {
//        name: 'pname',
//        id: 'pid',
//        children: 'values',
//        cstructure: {
//          name: 'vname',
//          id: 'vid',
//          pricekey: 'price',
//          oripricekey: 'oripricekey'
//        }
//      }
//    }
    }, 500)
  }
}
</script>

<style scoped="scoped">
.confirm {
  text-align: center;
  height: 80px;
  line-height: 80px;
  background: #F12E25;
  color: #fff;
  font-size: 36px;
}
</style>
