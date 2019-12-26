<template>
  <div>
    <p>this is msku</p>
    <muh-sku
      :goodlist="goods"
      :skulist="skus"
      :option="skuOption">
    </muh-sku>
    
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
  created () {
  	this.code = usecode
    setTimeout(() => {
    	this.goods = goods
    	this.skus = skus
    	this.option = {
    		stockflag: false, // 是否开启库存逻辑，默认值为false
    		structure: {
    			
    		}
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

<style>
</style>
