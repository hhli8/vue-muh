<template>
  <div>
    <p>this is msku</p>
    <div style="height: 400px;">
      <muh-sku
        ref="muhsku"
        :goodlist="goods"
        :skulist="skus"
        :option="skuOption">
      </muh-sku>
    </div>
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
        /* { skuPvStrs: '1:601,2:701,3:801', skuCode: 's601701801', curprice: '208' },
        { skuPvStrs: '1:602,2:701,3:801', skuCode: 's601701801', curprice: '208' },
        { skuPvStrs: '1:601,2:701,3:802', skuCode: 's601701801', curprice: '308' },
        { skuPvStrs: '1:602,2:701,3:802', skuCode: 's601701801', curprice: '358' },
        { skuPvStrs: '1:601,2:701,3:803', skuCode: 's601701801', curprice: '358' },
        { skuPvStrs: '1:602,2:701,3:803', skuCode: 's601701801', curprice: '308' },
        { skuPvStrs: '1:601,2:701,3:804', skuCode: 's601701801', curprice: '108' },
        { skuPvStrs: '1:602,2:701,3:804', skuCode: 's601701801', curprice: '108' },
        // 702
        { skuPvStrs: '1:601,2:702,3:801', skuCode: 's601701801', curprice: '208' },
        { skuPvStrs: '1:602,2:702,3:801', skuCode: 's601701801', curprice: '208' },
        { skuPvStrs: '1:601,2:702,3:802', skuCode: 's601701801', curprice: '308' },
        { skuPvStrs: '1:602,2:702,3:802', skuCode: 's601701801', curprice: '308' },
        { skuPvStrs: '1:601,2:702,3:803', skuCode: 's601701801', curprice: '358' },
        { skuPvStrs: '1:602,2:702,3:803', skuCode: 's601701801', curprice: '358' },
        { skuPvStrs: '1:601,2:702,3:804', skuCode: 's601701801', curprice: '108' },
        { skuPvStrs: '1:602,2:702,3:804', skuCode: 's601701801', curprice: '108' },
        // 703
        { skuPvStrs: '1:601,2:703,3:801', skuCode: 's601701801', curprice: '208' },
        { skuPvStrs: '1:602,2:703,3:801', skuCode: 's601701801', curprice: '208' },
        { skuPvStrs: '1:601,2:703,3:802', skuCode: 's601701801', curprice: '308' },
        { skuPvStrs: '1:602,2:703,3:802', skuCode: 's601701801', curprice: '308' },
        { skuPvStrs: '1:601,2:703,3:803', skuCode: 's601701801', curprice: '358' },
        { skuPvStrs: '1:602,2:703,3:803', skuCode: 's601701801', curprice: '358' },
        { skuPvStrs: '1:601,2:703,3:804', skuCode: 's601701801', curprice: '108' },
        { skuPvStrs: '1:602,2:703,3:804', skuCode: 's601701801', curprice: '108' },
        // 704
        { skuPvStrs: '1:601,2:704,3:801', skuCode: 's601701801', curprice: '208' },
        { skuPvStrs: '1:602,2:704,3:801', skuCode: 's601701801', curprice: '208' },
        { skuPvStrs: '1:601,2:704,3:802', skuCode: 's601701801', curprice: '308' },
        { skuPvStrs: '1:602,2:704,3:802', skuCode: 's601701801', curprice: '308' },
        { skuPvStrs: '1:601,2:704,3:803', skuCode: 's601701801', curprice: '358' },
        { skuPvStrs: '1:602,2:704,3:803', skuCode: 's601701801', curprice: '358' },
        { skuPvStrs: '1:601,2:704,3:804', skuCode: 's601701801', curprice: '108' },
        { skuPvStrs: '1:602,2:704,3:804', skuCode: 's601701801', curprice: '108' },
        // 705
        { skuPvStrs: '1:601,2:705,3:801', skuCode: 's601701801', curprice: '208' },
        { skuPvStrs: '1:602,2:705,3:801', skuCode: 's601701801', curprice: '208' },
        { skuPvStrs: '1:601,2:705,3:802', skuCode: 's601701801', curprice: '308' },
        { skuPvStrs: '1:602,2:705,3:802', skuCode: 's601701801', curprice: '308' },
        { skuPvStrs: '1:601,2:705,3:803', skuCode: 's601701801', curprice: '358' },
        { skuPvStrs: '1:602,2:705,3:803', skuCode: 's601701801', curprice: '358' },
        { skuPvStrs: '1:601,2:705,3:804', skuCode: 's601701801', curprice: '108' },
        { skuPvStrs: '1:602,2:705,3:804', skuCode: 's601701801', curprice: '108' },
        // 706
        { skuPvStrs: '1:601,2:706,3:801', skuCode: 's601701801', curprice: '208' },
        { skuPvStrs: '1:602,2:706,3:801', skuCode: 's601701801', curprice: '208' },
        { skuPvStrs: '1:601,2:706,3:802', skuCode: 's601701801', curprice: '308' },
        { skuPvStrs: '1:602,2:706,3:802', skuCode: 's601701801', curprice: '308' },
        { skuPvStrs: '1:601,2:706,3:803', skuCode: 's601701801', curprice: '358' },
        { skuPvStrs: '1:602,2:706,3:803', skuCode: 's601701801', curprice: '358' },
        { skuPvStrs: '1:601,2:706,3:804', skuCode: 's601701801', curprice: '108' },
        { skuPvStrs: '1:602,2:706,3:804', skuCode: 's601701801', curprice: '108' },
        // 707
        { skuPvStrs: '1:601,2:707,3:801', skuCode: 's601701801', curprice: '208' },
        { skuPvStrs: '1:602,2:707,3:801', skuCode: 's601701801', curprice: '208' },
        { skuPvStrs: '1:601,2:707,3:802', skuCode: 's601701801', curprice: '308' },
        { skuPvStrs: '1:602,2:707,3:802', skuCode: 's601701801', curprice: '308' },
        { skuPvStrs: '1:601,2:707,3:803', skuCode: 's601701801', curprice: '358' },
        { skuPvStrs: '1:602,2:707,3:803', skuCode: 's601701801', curprice: '358' },
        { skuPvStrs: '1:601,2:707,3:804', skuCode: 's601701801', curprice: '108' },
        { skuPvStrs: '1:602,2:707,3:804', skuCode: 's601701801', curprice: '108' }
      ] */
  	  // goods
  	}, 1000)
    setTimeout(() => {
    	// this.goods = goods
    	this.skus = skus
        /* {
          pid: 1,
          pname: '款式',
          values: [
            { vid: 601, imgUrl: '', vname: '床单式' },
            { vid: 602, imgUrl: '', vname: '床笠式' }
          ]
        },
        {
          pid: 2,
          pname: '颜色分类',
          values: [
            { vid: 701, imgUrl: 'http://img.alicdn.com/imgextra/i2/1614112418/TB2Jb7_cHArBKNjSZFLXXc_dVXa_!!1614112418.jpg_120x120q50s150.jpg', vname: '帛咖-L' },
            { vid: 702, imgUrl: 'http://img.alicdn.com/imgextra/i4/1614112418/TB20JJacVkoBKNjSZFEXXbrEVXa_!!1614112418.jpg_120x120q50s150.jpg', vname: '荷粉-L' },
            { vid: 703, imgUrl: 'http://img.alicdn.com/imgextra/i4/1614112418/TB2FtRIkFuWBuNjSspnXXX1NVXa_!!1614112418.jpg_120x120q50s150.jpg', vname: '静蓝-L' },
            { vid: 704, imgUrl: 'http://img.alicdn.com/imgextra/i3/1614112418/TB2m0LEkTJYBeNjy1zeXXahzVXa_!!1614112418.jpg_120x120q50s150.jpg', vname: '裸色-L' },
            { vid: 705, imgUrl: 'http://img.alicdn.com/imgextra/i2/1614112418/O1CN011TjU8j8vwfUm9yX_!!1614112418.jpg_120x120q50s150.jpg', vname: '牛仔蓝【60s水洗】' },
            { vid: 706, imgUrl: 'http://img.alicdn.com/imgextra/i1/1614112418/O1CN011TjU8j2fMHGGYGx_!!1614112418.jpg_120x120q50s150.jpg', vname: '皓月蓝【60s水洗】' },
            { vid: 707, imgUrl: 'http://img.alicdn.com/imgextra/i4/1614112418/O1CN011TjU8cY0GSGmd8S_!!1614112418.jpg_120x120q50s150.jpg', vname: '青草绿【60s水洗】' }
          ]
        },
        {
          pid: 3,
          pname: '适用床尺寸',
          values: [
            { vid: 801, imgUrl: '', vname: '1.5m床（配200*230被套）' },
            { vid: 802, imgUrl: '', vname: '1.8m床（配200*230被套）' },
            { vid: 803, imgUrl: '', vname: '2.0m床（配220*240被套）' },
            { vid: 804, imgUrl: '', vname: '1.2m床（配150*200被套）' }
          ]
        }
      ] */
    	// skus
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
