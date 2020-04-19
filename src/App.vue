<template>
  <div id="app">
    <keep-alive>
      <router-view v-if='$route.meta.keepAlive'></router-view>
    </keep-alive>
    <router-view v-if='!$route.meta.keepAlive'></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      //
    }
  },
  methods: {
    registerVconsole () {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://cdn.basestonedata.com/jlib/vconsole.last.min.js'
      document.getElementsByTagName('body')[0].appendChild(script)
      script.onload = () => {
        new VConsole() // eslint-disable-line
      }
    }
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
  margin: 0;
}

li {
  /*display: inline-block;
  margin: 0 10px;*/
}

a {
  color: #42b983;
}

p {
  margin: 0;
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
