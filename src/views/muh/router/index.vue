<template>
  <div>
    <p>this is router</p>
    <div>
      <p>hash</p>
      <div>key:hashchange</div>
      <a href="#/hash">hash</a>
      <a href="#/hash1">hash1</a>
    </div>
    <div>
      <p>history</p>
      <div>key:popstate</div>
      <div>api:history.back();
history.forward();
history.go(-2); replaceState  pushState  history.state  history.length</div>
      <button @click="history(0)">history</button>
      <button @click="history(1)">history1</button>
    </div>
    <div v-show="showAlert" style="background: yellowgreen;">
      <p> 确定要放弃？！</p>
      <div>
        <button @click="confirmBack">确定</button><button @click="cancelBack">取消</button>
      </div>
    </div>
    
    <div>测试</div>
    <div>this is 详情页</div>
    <button @click="toCreate">去下单页</button>
    
    <div id="codeView" v-highlight v-html='htmlEncode(code)'></div>
  </div>
</template>

<script>
import usecode from './use.txt'
export default {
  data () {
    return {
      showAlert: false,
      code: ''
    }
  },
  created () {
    this.code = usecode
    let the = this
    window.addEventListener('hashchange', () => {
      // console.log(location.hash)
      // do something
    })
    window.history.pushState({}, null, location.href) // 控制页面不返回，弹出阻止窗口，确定后才返回
    window.addEventListener('popstate', this.popstate)
  },
  beforeDestroy () {
    let the = this
    // window.removeEventListener('hashchange')
    // window.removeEventListener('popstate', the.popstate)
  },
  methods: {
    popstate () {
      console.log(this.$route, history.state)
      this.showAlert = true
      setTimeout(() => {
        let the = this
        window.removeEventListener('popstate', the.popstate)
      }, 0)
    },
    history (index) {
      window.history.pushState({}, null, window.location.origin + '/history' + index)
    },
    confirmBack () {
      history.back()
      // 去下一页n次时，需要点n+1次才返回
    },
    cancelBack () {
      let the = this
      this.showAlert = false
      window.history.pushState({}, null, location.href)
      window.addEventListener('popstate', the.popstate)
    },
    toCreate () {
      this.$router.replace({ name: 'RouterTestCreateorder' })
      // this.$router.push({ name: 'RouterTestCreateorder' }) // 测试create用
    }
  }
}
</script>

<style>
</style>
