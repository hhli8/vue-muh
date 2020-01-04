<template>
  <div>
    <p class="title">this is bubble</p>
    <muh-bubble :option="bubble" :lists="lists">
      <template slot-scope="props">
        <div>{{props.row.goodsTitle}}</div>
      </template>
    </muh-bubble>
    
    <div id="codeView" v-highlight v-html='htmlEncode(code)'></div>
  </div>
</template>

<script>
import usecode from './use.txt'
export default {
  data () {
    return {
      bubble: {},
      lists: [],
      code: ''
    }
  },
  created () {
    this.code = usecode
    setTimeout(() => {
      this.bubble = {
        transtime: 0, // 移动一格时间
        intervaltime: 0, // 定时器时间，等待时间
        showcount: 1
      }
      this.lists = [
        { goodsName: 'name', goodsTitle: '啊实打实大1' },
        { goodsName: 'name', goodsTitle: '啊实打实大2' },
        { goodsName: 'name', goodsTitle: '啊实打实大3' },
        { goodsName: 'name', goodsTitle: '啊实打实大4' },
        { goodsName: 'name', goodsTitle: '啊实打实大5' },
        { goodsName: 'name', goodsTitle: '啊实打实大6' },
        { goodsName: 'name', goodsTitle: '啊实打实大7' },
        { goodsName: 'name', goodsTitle: '啊实打实大8' },
        { goodsName: 'name', goodsTitle: '啊实打实大9' },
        { goodsName: 'name', goodsTitle: '啊实打实大10' }
      ]
    }, 300)
  }
}
</script>

<style scoped="scoped">
.title {
  padding: 30px 0;
  text-align: center;
  font-size: 26px;
}
</style>
