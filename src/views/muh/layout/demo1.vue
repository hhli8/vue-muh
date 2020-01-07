<template>
  <div>
    <p>子元素根据父元素的宽决定高度，进而子做正方形方法</p>
    <div id="f">
      <div id="s">
        star<br />asdasdad<br />asdasdad<br />asdasdad<br />asdasdad<br />asdasdad<br />asdasdad<br />asdasdad<br />asdasdad<br />
        end
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //
}
</script>

<style scoped="scoped">
#f {
  background: yellowgreen;
  height: 300px;
  width: 80%;
}
#s {
  width: 40%;
  height: 0;
  padding-bottom: 40%;
  background: red;
  overflow: hidden;
  overflow: scroll;
}
</style>
