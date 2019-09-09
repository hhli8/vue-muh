# vue-muh

> A Vue.js project  ui功能移动端组件库

# 使用说明
1、webpack.config.js
entry配置切换，打包发布和本地
2、npm build,npm login,npm publish
版本修改+1

## sku组件
* 引用：
import { MuhSku } from 'vue-muh'
Vue.use(MuhSku)
* 使用：
```
<muh-sku
 :goodlist="goodlist"
 :skulist="skulist"
 :option="option">
</muh-sku>
```
``` 
* goodlist-商品集合
    [
      {
        skuPvStrs: '',
        skuCode: 'dwsasd12345678', // 商品id
        skus1: '387', //属性1
        skus2: '702',
        skus3: '601',
        stock_num: 0, // 库存
        price: 23000 // 价格
      }
    ]
* skulist-sku集合
    [
      {
        pid: 1,
        pname: '颜色',
        values: [
          vid: 387,
          "imgUrl": "https://cbu01.alicdn.com/img/ibank/2018/420/661/8608166024_582723176.jpg",
          "vname": "卡其色"
        ]
      }
    ]
* option-结构参数
    {
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
```
  

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
