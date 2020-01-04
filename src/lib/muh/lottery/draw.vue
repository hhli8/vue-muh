<template>
  <div class="draw">
    <div class="lottery-box">
      <div class="item" v-for="(item,index) in prize" :class="actIndex===index?'act':''" :key="index" @click="start(item, index)">
        <img v-if="index!==4" :src="item.prizeImage" alt="" />
        <span class="title">{{item.prizeTitle}}</span>
        <span class="count" v-if="index===4">{{leftcount}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'muhLottery',
  props: ['prize', 'leftcount'],
  data () {
    return {
      actIndex: '',
      time: null,
      targetIndex: 1, // 中奖的index
      duration: 400, // 跳转的间隔时间，逐渐增大和减小，默认值为：
      quan: 6, // 圈数
      arrIndex: 0, // 已旋转index
      remberIndex: 0, // 记录已经旋转的计数
      speedIndexStopIndex: '', // 加速停止点
      quanPopup: false,
      lostPopup: false,
      targetPrize: {}
    }
  },
  watch: {
    //
  },
  created () {
    //
  },
  methods: {
    start (item, index) {
      if (index === 4 && !this.isApp) {
        this.$emit('jumpLinkme')
        return
      }
      if (this.userToken) {
        if (index !== 4) {
          return
        }
        if (this.time !== null) return
        this.getRandom()
      } else {
        if (index === 4) {
          this.handlerLogin(() => {
            this.$emit('afterLoginInit', {})
          })
        }
      }
      // this.targetIndex = this.getRandom()
      // console.log(this.targetIndex)
      // this.loopInit()
      // this.time = setTimeout(this.loop, this.duration)
    },
    getRandom () {
      this.$api['heiwu/lottery'](
        {}, {
          noShowLoading: true
        }
      ).then(res => {
        if (res && res.data) {
          if (res.data.result) {
            var arr = [0, 1, 2, 7, '', 3, 6, 5, 4]
            let data = res.data
            this.targetPrize = data
            this.prize.forEach((item, index) => {
              if (Number(data.prizeNo) === Number(item.prizeNo)) {
                this.targetIndex = arr[index]
              }
            })
            this.loopInit()
            this.time = setTimeout(this.loop, this.duration)
            // this.$emit('cutUsableNum')
          } else if (res.data.code && Number(res.data.code) === 300) {
            if (res.data.message === '该活动已过期') {
              global.vbus.$emit('toast_show', '该活动已过期')
            } else {
              this.lostPopup = true
            }
          }
        } else {
          // 无返回
        }
      })
      /* var r = parseInt(Math.random() * 10)
      console.log(r)
      if (r !== 4 && r < 8) {
        // this.targetIndex = r
      } else {
        // this.targetIndex = 1
        r = 2
      }
      return r */
    },
    loop () {
      // 再次点击抽奖时，index不需要初始化处理
      var arr = [0, 1, 2, 5, 8, 7, 6, 3]
      var arrCount = arr.length
      var jumpCount = this.quan * arrCount + this.targetIndex + 1
      this.actIndex = arr[this.arrIndex % arrCount]
      this.arrIndex++
      if (this.arrIndex === jumpCount) { // 到达位置后停止
        clearInterval(this.time)
        this.time = null
        this.duration = 400
        this.speedIndexStopIndex = ''
        this.targetPrize.title = this.prize[arr[this.targetIndex]].prizeTitle
        this.operateLottery(this.prize[arr[this.targetIndex]])
        this.Event_Action('ht_blackFriday_lottery', 'click', {
          couponResult: this.prize[arr[this.targetIndex]].prizeTitle,
          pirzeResult: this.prize[arr[this.targetIndex]].prizeTitle,
          appSource: this.$route.query.appSource,
          viewSource: this.$route.query.viewSource
        })
        // console.log(this.prize[arr[this.targetIndex]])
        // global.vbus.$emit('toast_show', '您抽中的奖品index是' + this.targetIndex)
        setTimeout(() => {
          this.actIndex = ''
          this.$emit('afterLoginInit', {})
        }, 1500)
        return
      }
      // 加速处理
      if (this.duration > 120 && !this.speedIndexStopIndex) {
        this.duration -= 40
        if (this.duration <= 120) this.speedIndexStopIndex = this.arrIndex
      }
      // 减速处理
      if (this.speedIndexStopIndex && this.arrIndex >= jumpCount - this.speedIndexStopIndex) {
        this.duration += 20
      }
      this.time = setTimeout(this.loop, this.duration)
    },
    loopInit () {
      this.arrIndex = 0
    },
    operateLottery (item) {
      // console.log(item)
      if (this.targetPrize.type === 1) {
        console.log('实物')
      } else if (this.targetPrize.type === 4) {
        console.log('无')
        global.vbus.$emit('toast_show', '很遗憾，您未抽中奖品')
      } else if (this.targetPrize.type === 3) {
        console.log('优惠券')
      } else {
        console.log('虚拟')
      }
      if (this.targetPrize.type !== 4) {
        this.quanPopup = true
      }
    },
    tofinish () {
      this.lostPopup = false
    },
    toUse () {
      this.quanPopup = false
      location.href = 'bsd://xxyp/mine/coupon'
    }
  }
}
</script>

<style lang="scss" scoped="scoped" src="./draw.scss">
</style>
<style lang="scss">
.draw {
  .van-popup {
    border-radius: 20px;
    overflow: visible;
  }
}
</style>
