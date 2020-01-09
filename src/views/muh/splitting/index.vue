<template>
  <div>
    <p>this is Splitting</p>
    <main class="container">
      <h2 data-splitting class="headline headline--yell">yelling</h2>
      <h2 data-splitting class="headline headline--ghost">ghosting</h2>
      <h2 data-splitting class="headline headline--sail">sailing</h2>
      <h2 data-splitting class="headline headline--shiver">chinaz</h2>
      <h2 data-splitting class="headline headline--fade">fading</h2>
      <h2 data-splitting class="headline headline--rock">rocking</h2>
    </main>
  </div>
</template>

<script>
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import Splitting from 'splitting'
export default {
  data () {
    return {
      //
    }
  },
  mounted () {
    Splitting() // data-splitting
  }
}
</script>

<style scoped="scoped">
.headline:nth-child(1) {
  --color: #e74c3c;
}
.headline:nth-child(2) {
  --color: #f5f6fa;
}
.headline:nth-child(3) {
  --color: #48dbfb;
}
.headline:nth-child(4) {
  --color: #9980FA;
}
.headline:nth-child(5) {
  --color: #F79F1F;
}
.headline:nth-child(6) {
  --color: #f8c291;
}
.headline {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color);
  font-weight: 700;
  font-size: 96px;
  height: 30vh;
}
</style>
