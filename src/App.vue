<template>
  <div id="app">
    <!--<div>hello</div>
    <awe-wait></awe-wait>
    <keyboard></keyboard>
    <loading></loading>
    <link-router href="" class="jump">SKU</link-router>-->
    <!--<keep-alive>
      <router-view v-if='$route.meta.keepAlive'></router-view>
    </keep-alive>
    <router-view v-if='!$route.meta.keepAlive'></router-view>-->
    
    <!--<div>Hello World</div>-->
    
    <!--<muh-sku
      :goodlist="goods"
      :skulist="skus"
      :option="skuOption">
    </muh-sku>-->
    
    <lay-tpfix :option="layTpfix">
      <span slot="right" class="more"></span>
      <div slot="nav">this is nav</div>
      <div slot="listbox">
        start<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />asdasdasdasdasdasdasd<br />end
      </div>
    </lay-tpfix>
  </div>
</template>

<script>
import skuData from './mock/skudata.js'
export default {
  name: 'app',
  data () {
    return {
      // sku组件
      goods: [], // 商品列表
      skus: [], // sku列表
      skuOption: {}, // 其他配置
      // layout
      layTpfix: {
        style: 'sina',
        title: 'muh-is good',
        right: 'share', // self-自定义 share-分享
        backFun: '',
        backFun2: () => {
          console.log('back')
        }, //
        rightFun: () => {
          console.log('right')
        } //
      }
    }
  },
  created () {
    setTimeout(() => {
      this.goods = skuData.goods
      this.skus = skuData.skus
      this.skuOption = {
        degood: {
          img: 'https://cbu01.alicdn.com/img/ibank/2018/420/661/8608166024_582723176.jpg',
          price: 6500, // 分
          id: '12asdqewasdad',
          none_sku: true // 是否sku商品
        }, // 默认显示数据*
        needInit: false, // 每次在弹窗里打开是否需要初始化
        stockflag: false, // 是否开启库存逻辑*
        structure: {
          name: 'pname',
          id: 'pid',
          children: 'values',
          cstructure: {
            name: 'vname',
            id: 'vid',
            pricekey: 'price',
            oripricekey: 'oripricekey'
          }
        }
      }
    }, 500)
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 24px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.more {
  position: absolute;
  width: 58px;
  height: 58px;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  background: red;
}
</style>
