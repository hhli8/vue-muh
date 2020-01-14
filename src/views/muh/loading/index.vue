<template>
  <div>
    <p>this is loading</p>
    
    <div>
      <svg class="ani-rot1" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 30 30" enable-background="new 0 0 30 30" xml:space="preserve">  <image id="image0" width="30" height="30" x="0" y="0" :href='img1'/></svg>
    </div>
    <div>
      <img src="./loading-dot.png" alt="" class="ani-rot1"/>
    </div>
    <div>
      <img src="./loading-dot.png" alt="" class="ani-rot3"/>
    </div>
    <div style="margin-bottom: 30px;">
      <p style="padding-left: 30px;margin-bottom: 20px;">type1(svg)-traverse:</p>
      <div style="text-align: center;">
        <muh-loading :option="option1"></muh-loading>
      </div>
    </div>
    <div style="margin-bottom: 30px;">
      <p style="padding-left: 30px;margin-bottom: 20px;">type2-ring:</p>
      <div style="text-align: center;">
        <muh-loading :option="option2"></muh-loading>
      </div>
    </div>
    <div style="margin-bottom: 30px;">
      <p style="padding-left: 30px;margin-bottom: 20px;">type3-loop-normal:</p>
      <div style="text-align: center;">
        <muh-loading :option="option3">
          <img src="./loading-dot.png" alt=""/>
        </muh-loading>
      </div>
    </div>
    <div style="margin-bottom: 30px;">
      <p style="padding-left: 30px;margin-bottom: 20px;">type4-loop-step:</p>
      <div style="text-align: center;">
        <muh-loading :option="option4">
          <img src="./loading-dot.png" alt=""/>
        </muh-loading>
      </div>
    </div>
    <div style="margin-bottom: 30px;">
      <p style="padding-left: 30px;margin-bottom: 20px;">type5(svg)-semic:</p>
      <div style="text-align: center;">
        <muh-loading :option="option5"></muh-loading>
      </div>
    </div>
    <div id="codeView" v-highlight v-html='htmlEncode(code)'></div>
  </div>
</template>

<script>
import imgstr from './img.js'
import usecode from './use.txt'
export default {
  data () {
    return {
      img1: '',
      option1: { type: 'traverse', color: '#FF3D27' },
      option2: { type: 'ring', base64: imgstr },
      option3: {type: 'loop' },
      option4: {type: 'loopstep' },
      option5: { type: 'semic', color: '' }
    }
  },
  created () {
    this.code = usecode
    this.img1 = imgstr
    // this.option2.base64 = imgstr
  }
}
</script>

<style scoped="scoped" lang="scss">
.ani-rot1 {
  animation: wpSpin 1s linear infinite;
}
.ani-rot3 {
  animation: wpSpin 1s steps(8, end) infinite;
}
@keyframes wpSpin {
  0% {transform: rotate(0);}
  100% {transform: rotate(360deg);}
}

/*.van-loading__circular {
  display: block;
  width: 100%;
  height: 100%;
}
.van-loading__circular circle {
    -webkit-animation: van-circular 1.5s ease-in-out infinite;
    animation: van-circular 1.5s ease-in-out infinite;
    stroke: currentColor;
    stroke-width: 3;
    stroke-linecap: round;
}*/
.circular {
  width: 300px;
  height: 300px;
  /*animation: loading-rotate 2s linear infinite;*/
}
</style>
