<template>
  <div class="page">
    <div style="padding: 20px;" v-for="(item, index) in lists" :key="index">{{item}}</div>
    <input type="text" />
    <br /><br /><br />app内存在，native处理/fix定位的需处理
    <p>end</p>
    <div id="bottom">
      <input type="text" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lists: [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.page {
  padding-bottom: 120px;
}
#bottom {
  height: 120px;
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 15px 0;
  background: #DFDFDF;
}
</style>
