<template>
  <div>
    <p style="text-align: center;padding: 30px 0;font-size: 38px;">this is video</p>
    
    <muh-video :option="option1"></muh-video>
    <br /><br /><br />
    <muh-video :option="option2"></muh-video>
    <br /><br /><br />
    <muh-video :option="option3"></muh-video>
    <div v-highlight v-html='htmlEncode(code)'></div>
  </div>
</template>

<script>
import usecode from './use.txt'
export default {
  data () {
    return {
      option1: {},
      option2: {},
      option3: {},
      code: ''
    }
  },
  created () {
    this.code = usecode
    setTimeout(() => {
      this.option1 = {
        src: 'http://h5player.bytedance.com/video/mp4/xgplayer-demo-720p.mp4',
        poster: 'https://desk-fd.zol-img.com.cn/g2/M00/0D/01/Cg-4WlV-bIyIX4Z0ACE5oAIZt3wAAFYHQEQn1EAITm4695.jpg',
        height: '10.333333rem',
        heightFixed: true // 高固定，宽100%
      }
      this.option2 = {
        src: 'http://h5player.bytedance.com/video/mp4/xgplayer-demo-720p.mp4',
        poster: 'https://sf1-xgcdn-tos.pstatp.com/img/tos-cn-i-0004/4d7ee0ad8ee24137a766f701f302c796~tplv-noop.jpg',
        cover: true, // true时，宽高必须
        height: '10.333333rem',
        width: '100%',
      }
      this.option3 = {
        src: 'http://h5player.bytedance.com/video/mp4/xgplayer-demo-720p.mp4',
        poster: 'https://sf1-xgcdn-tos.pstatp.com/img/tos-cn-i-0004/4d7ee0ad8ee24137a766f701f302c796~tplv-noop.jpg',
        widthFixed: true // 高度自适应，宽度固定
      }
    }, 500)
  }
}
</script>

<style>
</style>
