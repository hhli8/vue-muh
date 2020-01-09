<template>
  <div class="page">
    <ul>
      <li>赵</li>
      <li>钱</li>
      <li>孙</li>
      <li>李</li>
      <li>周</li>
      <li>吴</li>
      <li>郑</li>
      <li>
        <div>
          <div id="" v-highlight v-html='htmlEncode(code)'></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import usecode from './use.txt'
export default {
  data () {
    return {
      code: ''
    }
  },
  created () {
    this.code = usecode
  }
}
</script>

<style scoped="scoped">
ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul {
  max-height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}
li {
  font-size: 28px;
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: end;
}
li:nth-child(1) {
  background-color: rgb(255, 0, 0);
}

li:nth-child(2) {
  background-color: rgb(255, 128, 0);
}

li:nth-child(3) {
  background-color: rgb(255, 255, 0);
}

li:nth-child(4) {
  background-color: rgb(0, 255, 0);
}

li:nth-child(5) {
  background-color: rgb(0, 255, 255);
}

li:nth-child(6) {
  background-color: rgb(0, 0, 255);
}

li:nth-child(7) {
  background-color: rgb(128, 0, 255);
}
li:nth-child(8) {
  /*padding: 50px 0;*/
}
</style>
