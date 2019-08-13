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
    <div>Hello World</div>
    <sku
      :goodlist="goods"
      :skulist="skus"
      :option="skuOption">
    </sku>
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
      degood: {} // 默认商品信息
    }
  },
  created () {
    setTimeout(() => {
      this.goods = skuData.goods
      this.skus = skuData.skus
      this.degood = {
        price: 6500, // 分
        id: '12asdqewasdad',
        none_sku: true // 是否sku商品
      }
      this.skuOption = {
        needInit: false, // 每次在弹窗里打开是否需要初始化
        structure: {
          name: 'pname',
          id: 'pid',
          children: 'values',
          cstructure: {
            name: 'vname',
            id: 'vid'
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
  margin-top: 60px;
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
</style>
