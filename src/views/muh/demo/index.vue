<template>
  <div>
    <demo></demo>
    <ssku ref="muhsku"
        :goodlist="goods"
        :skulist="skus"
        :maxcount="maxcount"
        :option="skuOption">
    </ssku>
  </div>
</template>

<script>
import ssku from './sku'
export default {
  components: {
    ssku
  },
  data () {
    return {
      info: {"body":{"data":{"skuList":[{"dayRent":3333,"pricingStrategyId":3115065,"skuPvStrs":"36:13439024;34:13439027;38:140;40:3597365;-1:-5;-2:-7","monthlyRent":1000,"skuCode":"1059269758014140422","skuImgUrl":"http://img.alicdn.com/imgextra/i2/1714128138/O1CN01wxgxHW29zFlWewGju_!!1714128138.jpg"},{"dayRent":3333,"pricingStrategyId":3115066,"skuPvStrs":"36:13439024;34:13439027;38:140;40:3597365;-1:-4;-2:-6","monthlyRent":1000,"skuCode":"1059269758014140422","skuImgUrl":"http://img.alicdn.com/imgextra/i2/1714128138/O1CN01wxgxHW29zFlWewGju_!!1714128138.jpg"},{"dayRent":3333,"pricingStrategyId":3115064,"skuPvStrs":"36:13439024;34:13439025;38:140;40:3597365;-1:-4;-2:-6","monthlyRent":1000,"skuCode":"1059269758014140421","skuImgUrl":"http://img.alicdn.com/imgextra/i2/1714128138/O1CN019x5oyV29zFlfmAiXD_!!1714128138.jpg"},{"dayRent":3333,"pricingStrategyId":3115063,"skuPvStrs":"36:13439024;34:13439025;38:140;40:3597365;-1:-5;-2:-7","monthlyRent":1000,"skuCode":"1059269758014140421","skuImgUrl":"http://img.alicdn.com/imgextra/i2/1714128138/O1CN019x5oyV29zFlfmAiXD_!!1714128138.jpg"}],"skuProps":[{"psource":"TB","pname":"网络类型","values":[{"vid":13439024,"imgUrl":"","vname":"SA\\NSA双模(5G)","vsource":"TB"}],"pid":36},{"psource":"TB","pname":"机身颜色","values":[{"vid":13439025,"imgUrl":"http://img.alicdn.com/imgextra/i2/1714128138/O1CN019x5oyV29zFlfmAiXD_!!1714128138.jpg","vname":"冰海蓝","vsource":"TB"},{"vid":13439026,"imgUrl":"http://img.alicdn.com/imgextra/i1/1714128138/O1CN01f5tj2S29zFlWeuj8P_!!1714128138.jpg","vname":"钛银黑","vsource":"TB"},{"vid":13439027,"imgUrl":"http://img.alicdn.com/imgextra/i2/1714128138/O1CN01wxgxHW29zFlWewGju_!!1714128138.jpg","vname":"蜜桃金","vsource":"TB"}],"pid":34},{"psource":"TB","pname":"套餐类型","values":[{"vid":140,"imgUrl":"","vname":"官方标配","vsource":"TB"}],"pid":38},{"psource":"TB","pname":"存储容量","values":[{"vid":3075273,"imgUrl":"","vname":"8+128GB","vsource":"TB"},{"vid":3597365,"imgUrl":"","vname":"8+256GB","vsource":"TB"},{"vid":13439028,"imgUrl":"","vname":"12+256GB","vsource":"TB"}],"pid":40},{"pname":"租期","values":[{"vid":-4,"vname":"3个月"},{"vid":-5,"vname":"6个月"}],"pid":-1},{"pname":"租赁方式","values":[{"vid":-6,"vname":"租满即送"},{"vid":-7,"vname":"到期归还/买断"}],"pid":-2}]}},"heads":{"code":200,"message":"success"}},
      goods: [],
      skus: [],
      skuOption: {}, // 其他配置
      maxcount: 5
    }
  },
  created () {
    console.log(this.info.body.data)
    // setTimeout(() => {
      this.goods = this.info.body.data.skuList
      this.skus = this.info.body.data.skuProps
    // }, 1000)
    // console.log(this.skus)
  }
}
</script>

<style>
</style>
