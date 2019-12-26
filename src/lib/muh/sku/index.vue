<template>
  <div class="muh-sku">
    <div class="muh-sku-good">
      <div class="good-img"><img :src="goodimg" alt="" /></div>
      <div class="good-info">
        <div>{{good_price}}</div>
        <div>库存116件</div>
        <div>{{skuChoseText}}</div>
      </div>
    </div>
    <div class="muh-sku-title">{{skuChoseText}}</div>
    <div class="muh-sku-list" v-for="(item, index) in skulist" :key="index">
      <div class="name">{{item[fname]}}</div>
      <div class="sitem-box">
        <div v-for="(sitem, sindex) in item[fchildren]" class="sitem" :class="[sitem.nopitch?'disable':'', sitem.match?'chosed':'']" :key="sindex" @click="select($event, item, index, sitem, sindex)">
          {{sitem[sname]}}
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
    }
  },
  computed: {
  	// 父名称
  	fname () {
  		return 'pname'
  	},
  	fchildren () {
  		return 'values'
  	},
  	sname () {
  		return 'vname'
  	}
  },
  data () {
  	return {
  		goodimg: '',
    	good_price: '900',
    	skuChoseText: '按时大大撒'
  	}
  },
  created () {
  	this.init()
  	setTimeout(() => {
  		console.log(this.goodlist, this.skulist, this.option)
  	}, 1000)
  },
  methods: {
  	init () {
  		// 初始化，默认有的显示第一个，可通过flag是否需要此功能
  	},
  	// 单个属性的点击事件
  	select (e, item, index, sitem, sindex) {
  		//
  	}
  }
}
</script>

<style lang="scss" scoped="scoped" src="./index.scss">
</style>
