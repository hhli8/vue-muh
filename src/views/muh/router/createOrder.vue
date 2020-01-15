<template>
  <div>
    <p>this is create order</p>
    <button @click="chufa">触发条件</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tag: false
    }
  },
  methods: {
    chufa () {
      this.tag = true
      window.history.pushState({}, null, location.href)
      window.addEventListener('popstate', this.popstate)
    },
    popstate () {
      this.$router.replace({
        name: 'RouterTestOrderlist'
      })
      setTimeout(() => {
        window.removeEventListener('popstate', this.popstate)
      }, 0)
    }
  }
}
</script>

<style>
</style>
