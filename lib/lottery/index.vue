<template>
  <div class="muh-lottery">
    <div class="item" v-for="(item,index) in prizeList" :class="actIndex===index?'act':''" :key="index">
      <slot :row="item" :index="index"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'muhLottery',
  props: {
    prize: {
      type: Array,
      default: () => {
        return []
      }
    },
    count: {
      type: Number,
      default: 0
    },
    prizeKey: {
      type: String,
      default: 'prizeNo'
    },
    prizeTarget: {
      type: Object,
      default: () => {
        return {
          prizeNo: ''
        }
      }
    }
  },
  data () {
    return {
      prizeList: [],
      actIndex: '', // 激活的项
      time: null,
      arrIndex: 0, // 已旋转index
      duration: 400, // 跳转的间隔时间，逐渐增大和减小，默认值为：
      quan: 6, // 圈数
      arrIndex: 0, // 已走步数
      speedIndexStopIndex: '', // 加速停止点
      targetIndex: ''
    }
  },
  watch: {
    prize (value) {
      if (value && value.length) {
        this.prizeList = this.clone(value)
        this.prizeList.splice(4, 0, {})
      }
    },
    prizeTarget (value) {
      if (value && value[this.prizeKey] && this.prize && this.prize.length) {
        let arr = [0, 1, 2, 7, '', 3, 6, 5, 4] // 针对元素的查询中奖所在Index
        this.prizeList.forEach((item, index) => {
          if (Number(value[this.prizeKey]) === Number(item[this.prizeKey])) {
            this.targetIndex = arr[index]
          }
        })
        if (this.time !== null) return
        this.loopInit()
        this.time = setTimeout(this.loop, this.duration)
      }
    }
  },
  beforeDestroy () {
    clearInterval(this.time)
    this.time = null
  },
  methods: {
    loopInit () {
      this.arrIndex = 0
    },
    loop () {
      let arr = [0, 1, 2, 5, 8, 7, 6, 3] // 元素顺时针index
      let arrCount = arr.length
      let jumpCount = this.quan * arrCount + this.targetIndex + 1 // 总步数
      this.actIndex = arr[this.arrIndex % arrCount]
      this.arrIndex++
      if (this.arrIndex === jumpCount) {
        clearInterval(this.time)
        this.time = null
        this.duration = 400
        this.speedIndexStopIndex = ''
        this.$emit('stop', this.prizeList[arr[this.targetIndex]])
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
    }
  }
}
</script>

<style lang="scss" scoped="scoped" src="./index.scss">
</style>
