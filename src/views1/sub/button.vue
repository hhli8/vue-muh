<template>
  <div class="app">
    <div class="c"><button type="button" class="sub-btn mini">小</button></div>
    <div class="c"><button type="button" class="sub-btn mid">中</button></div>
    <div class="c"><button type="button" class="sub-btn huge">大</button></div>
    <div class="c"><button type="button" class="sub-btn mid buyer">买手按钮</button></div>
  </div>
</template>

<script>
export default {
  //
}
</script>

<style lang="scss" scoped="scoped">
.app {
  padding: 30px 20px;
  .c {
    margin-bottom: 20px;
  }
  .sub-btn {
    border: none;
    outline: none;
    line-height: normal;
    background: #000000;
    border-radius: 6px;
    height: 60px;
    color: #fff;
    padding: none;
  }
  .sub-btn.mini {
    width: 80px;
  }
  .sub-btn.mid {
    width: 280px;
  }
  .sub-btn.huge {
    width: 580px;
  }
  .buyer {
    height: 68px;
    width: 230px;
    background: linear-gradient(270deg,rgba(245,75,120,1) 0%,rgba(251,107,145,1) 100%);
    border-radius: 4px;
  }
}
</style>
