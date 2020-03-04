<template>
  <div>
    <p style="text-align: center;padding: 20px 0;font-size: 40px;">Passive Event Listeners</p>
    <div>
      <p class="text">当属性passive的值为true的时候，代表该监听器内部不会调用preventDefault函数来阻止默认滑动行为，Chrome浏览器称这类型的监听器为被动（passive）监听器。目前Chrome主要利用该特性来优化页面的滑动性能，所以Passive Event Listeners特性当前仅支持mousewheel/touch相关事件。</p>
      <div>list-test<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />asdasdasdasda<br />end</div>
    
    
      <p class="text-title">Chrome浏览器的线程化渲染框架</p>
      <p>https://blog.csdn.net/dj0379/article/details/52883315, Chrome浏览器对内核线程负责的工作进行拆分，通过多线程并发处理提高渲染效率减少丢帧</p>
      <p>由于线程化渲染框架的支持，手势输入事件可以不经过内核线程，直接由合成线程在内容快照上直接处理，所以即使此时内核线程在忙碌，用户的手势输入事件也可以马上得到响应。</p>
      <p>passive-true时，提高滚动流畅度</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    function handler () {
      // console.log(123456789)
    }
    document.addEventListener('mousewheel', handler, {passive: true})
  }
}
</script>

<style lang="scss" scoped="scoped">
.text {
  text-align: justify;
  padding: 0 20px;
}
.text-title {
  margin-bottom: 15px;
  font-size: 28px;
}
</style>
