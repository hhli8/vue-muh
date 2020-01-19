<template>
  <div style="overflow: hidden;">
    <div class="muh-mse" :class="[cover?'cover':'']" ref="mse"></div>
  </div>
</template>

<script>
import Player from 'xgplayer'
export default {
  name: 'muhVideo',
  props: {
    option: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    //
  },
  data () {
    return {
      cover: false
    }
  },
  watch: {
    option (data) {
      if (data.src) {
        let init = {
          el: this.$refs.mse,
          url: data.src,
          poster: data.poster || '',
          'x5-video-player-type': 'h5',
          'x5-video-player-fullscreen': false
        }
        let player = null
        if (data.cover) {
          this.cover = true
          init.height = data.height
          init.width = data.width
          setTimeout(() => {
            player = new Player({...init })
          }, 300)
          return
        }
        if (data.heightFixed) {
          init.height = data.height
          init.width = '100%'
        }
        if (data.widthFixed) {
          init.fluid = true
        }
        player = new Player({
          ...init
        })
      }
    }
  },
  mounted () {
    //
  }
}
</script>

<style lang="scss" src="./index.scss">
</style>
