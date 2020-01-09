<template>
  <div>
    <div class="glitter">
      <img src="./demo.jpg" alt="" />
    </div>
    
    <div>
      <div class="btn"></div>
    </div>
    
    <div id="codeView" v-highlight v-html='htmlEncode(code)'></div>
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

<style scoped="scoped" lang="scss">
.glitter {
  display: inline-block;
  position: relative;
  img {
    width: 300px;
    height: 300px;
    vertical-align: bottom;
  }
}
.glitter:after {
  content: ' ';
  position: absolute;
  top: 0;        
  width: 30%;
  height: 100%;
  background: -webkit-linear-gradient(left,rgba(255,255,255,0) 0,rgba(255,255,255,.3) 50%,rgba(255,255,255,0) 100%);
  /* Opera 11.1 - 12.0 */
  background: -o-linear-gradient(left,rgba(255,255,255,0) 0,rgba(255,255,255,.3) 50%,rgba(255,255,255,0) 100%);
  /* Firefox 3.6 - 15 */
  background: -moz-linear-gradient(left,rgba(255,255,255,0) 0,rgba(255,255,255,.3) 50%,rgba(255,255,255,0) 100%);
  /* 标准的语法 */
  background: linear-gradient(to right,rgba(255,255,255,0) 0,rgba(255,255,255,.3) 50%,rgba(255,255,255,0) 100%);
  transform: skewX(-45deg);
  /*transition: 1s ease;*/
  animation: theanimation 1.4s ease infinite;
  -webkit-animation: theanimation 1.4s ease infinite;
  -moz-animation: theanimation 1.4s ease infinite;
  -o-animation: theanimation 1.4s ease infinite;
  -ms-animation: theanimation 1.4s ease infinite;
}
@keyframes theanimation { 
  from {left: -100%;} 
  to {left: 350%;} 
}
@-webkit-keyframes theanimation { 
  from {left: -100%;} 
  to {left: 350%;}  
} 
@-moz-keyframes theanimation { 
  from {left: -100%;} 
  to {left: 350%;}  
} 
@-o-keyframes theanimation { 
  from {left: -100%;} 
  to {left: 350%;}   
} 
@-ms-keyframes theanimation { 
  from {left: -100%;} 
  to {left: 350%;} 
}
.btn {
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 80px;
  background: #333;
  margin: 100px 0 0 200px;
  box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
}

.btn:before {
  content: "";
  position: absolute;
  top: 0;
  /*left: -100%;*/
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(146, 148, 248, 0.4),
    transparent
  );
  /*transition: all 650ms;*/
  animation: move 650ms ease infinite;
}
.btn:hover:before {
  /*left: 100%;*/
}
@keyframes move { 
  from {left: -100%;} 
  to {left: 100%;} 
}
</style>
