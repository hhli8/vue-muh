<template>
  <div class="jd-adress-p">
    <div class="p-select">
      <span v-for="(item, index) in resultList" :key="index" :class="curNavIndex===index?'act':''" @click="onClickResultItem(item, index)">{{item[namekey]}}</span><span v-show="(!curNavIndex && curNavIndex !== 0)" class="warn">请选择</span>
    </div>
    <div ref="scroll" class="p-list scroll-con">
      <div class="listbox" ref="listbox">
        <div v-for="(item, index) in list" :key="index" class="list-item" :class="curIndex===index?'act':''" :style="itemStyle+(curIndex===index?itemActstyle:'')" @click="onClickItem(item, index)">{{item[namekey]}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'muhJdpicker',
  data () {
    return {
      staticAdress: [], // 滚动部分总数据
      list: [], // 滚动部分展示的数据
      curLevel: 0, // 第几级别
      selectedIndexArr: [], // 每列选中项的集合
      curIndex: '', // list子项里选中的项
      resultList: [], // 选择结果的数组
      childkey: 'children',
      namekey: 'name',
      curNavIndex: '' // 顶部导航
    }
  },
  props: {
    columns: {
      type: Array,
      default: () => { return [] }
    },
    itemStyle: {
      type: String,
      default: ''
    },
    itemActstyle: {
      type: String,
      default: ''
    },
    initValue: {
      type: Array,
      default: () => { return [] }
    }
  },
  watch: {
    columns (val) {
      this.staticAdress = [val]
      this.list = val
      this.setInitValue()
    }
  },
  mounted () {
    //
  },
  methods: {
    init () {
      //
    },
    setInitValue () {
      if (this.initValue.length) {
        this.initValue.forEach((item, index) => {
          let arr = []
          if (this.staticAdress[index]) {
            arr = this.staticAdress[index]
          }
          let L = arr.length
          for (let i = 0; i < L; i++) {
            if (arr[i][this.namekey] === item) {
              this.selectedIndexArr[index] = i
              this.resultList[index] = arr[i]
              this.list = arr
              this.curIndex = i
              if (arr[i][this.childkey]) {
                this.staticAdress[index + 1] = arr[i][this.childkey]
              }
              break
            }
          }
          this.curNavIndex = L - 1
          // console.log(this.staticAdress)
        })
      }
    },
    onClickItem (item, index) {
      this.selectedIndexArr[this.curLevel] = index
      this.resultList[this.curLevel] = item
      // 清除所有子级数据
      // console.log(this.curLevel, this.resultList)
      let arr = JSON.parse(JSON.stringify(this.resultList))
      let narr = []
      arr.forEach((item, index) => {
        if (this.curLevel >= index) {
          narr[index] = item
        }
      })
      this.resultList = narr
      this.curNavIndex = ''
      if (item[this.childkey]) {
        this.curLevel++
        let nextArray = item[this.childkey]
        this.staticAdress[this.curLevel] = nextArray
        this.list = nextArray
        this.curIndex = ''
      } else {
        this.curNavIndex = this.resultList.length - 1
        this.$emit('result', this.resultList)
        this.curIndex = index
      }
    },
    onClickResultItem (item, index) {
      this.curNavIndex = index
      this.list = this.staticAdress[index]
      this.curLevel = index
      this.curIndex = this.selectedIndexArr[index]
      // 滚动处理
      this.$nextTick(() => {
        this.resolveScroll()
      })
    },
    resolveScroll () {
      let scrollt = this.$refs.scroll
      let target = document.querySelector('.scroll-con .list-item.act')
      let reactList = this.$refs.listbox.getBoundingClientRect()
      if (target) {
        let reactItem = target.getBoundingClientRect()
        scrollt.scrollTop = reactItem.top - reactList.top
      }
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.scroll-con {
  text-align: left;
  overflow: scroll;
  height: 500px;
  .listbox {
    padding: 0 20px;
    .list-item {
      position: relative;
    }
  }
}
.p-select {
  padding: 0 20px;
  font-size: 32px;
  height: 62px;
  color: #14181F;
  white-space: nowrap;
  overflow: scroll;
  margin-bottom: 20px;
  span {
    line-height: 62px;
    margin-right: 60px;
  }
  span.act, span.warn {
    color: #2C72F5;
  }
}
</style>
