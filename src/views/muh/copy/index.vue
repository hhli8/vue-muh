<template>
  <div>
    <br>
    <br>
    <div>
      <span>复制同步内容：</span><span>{{copyTxt}}</span>
      <button @click="copy(false)">复制</button>
    </div>
    <br>
    <br>
    <div>
      <span>复制异步内容：</span><span>{{copyTxt2}}</span>
      <button @click="copy(true)">复制</button>
    </div>
    <br>
    <input type="text" placeholder="复制的内容自动粘贴到这" v-model="resultTxt"/>
    <!--<input type="button" name="" value="点击复制" @click="copyToClipboard('copy')">
    <br>
    <br>
    <input type="text" name="" placeholder="粘贴到这里试试">-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      copyTxt: '同步内容文案111',
      copyTxt2: '',
      resultTxt: ''
    }
  },
  methods: {
    copy (async) {
      if (async) {
        setTimeout(() => {
          this.copyTxt2 = '异步内容文案111'
          this.rcopy(this.copyTxt2)
        }, 1300)
      } else {
        this.rcopy(this.copyTxt)
      }
    },
    rcopy (txt) {
      var aux = document.createElement('input')
      var content = txt
      aux.setAttribute('value', content)
      document.body.appendChild(aux)
      aux.select() // 复制内容
      document.execCommand('copy')
      document.body.removeChild(aux)
      this.resultTxt = txt
      console.log('copy success')
    },
    copyToClipboard (elementId) {
      console.log(elementId)
      // 创建元素用于复制
      var aux = document.createElement("input");
      
      // 获取复制内容
      var content = document.getElementById(elementId).innerHTML || document.getElementById(elementId).value;
      console.log(content)
      // 设置元素内容
      aux.setAttribute("value", content);
      
      // 将元素插入页面进行调用
      document.body.appendChild(aux);
      
      // 复制内容
      aux.select();
      
      // 将内容复制到剪贴板
      document.execCommand("copy");
      
      // 删除创建元素
      document.body.removeChild(aux);
      
      //提示
      alert("复制内容成功：" + aux.value);
    }
  }
}
</script>

<style>
</style>