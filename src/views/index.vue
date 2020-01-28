<template>
  <div id="">
    <h2>This is vue-muh</h2>
    <div class="list" v-for="(item, index) in list" :key="index">
      <router-link :to="{ name: item.path }">{{item.name}}</router-link>
    </div>
    <p style="text-align: center;font-size: 16px;padding: 10px;">需引入mixins</p>
  </div>
</template>

<script>
import List from './data/indexIist'
export default {
  name: 'Index',
  data () {
    return {
      list: []
    }
  },
  created () {
    this.list = List
  }
}
</script>

<style lang="scss" scoped="scoped">
h2 {
  text-align: center;
  padding: 30px 0;
  font-size: 46px;
  color: #333;
}
.list {
  margin-bottom: 20px;
  padding-left: 25px;
  font-size: 36px;
}
</style>
