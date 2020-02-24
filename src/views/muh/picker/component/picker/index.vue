<template>
  <div class="muh-pickers" :style='"height: "+boxHeight+"px;"'>
    <picker-slot ref="slot" v-for="(item,index) in columns" :list="item.values" :type="item.type" :defaultSelected="item.defaultIndex" :visibleCount="visibleItemCount" @getHeight="setHeight" @getSelect="setSelect" :key="index"></picker-slot>
  </div>
</template>

<script>
import pickerSlot from './slot.vue'
export default {
  components: {
    pickerSlot
  },
  props: {
    columnsdemo: { // 暂时
      type: Array,
      default: () => {
        return []
      }
    },
    visibleItemCount: {
      type: Number,
      default: 5
    },
    initValue: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      boxHeight: '',
      columns: [],
      isLastYear: true,
      curYear: '',
      curMonth: '',
      curDay: ''
    }
  },
  created () {
    // this.getInitBornlist(1960)
    this.formateData(1960)
    /* this.datecolumns = [
      {
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        defaultIndex: 2
      },
      {
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        defaultIndex: 1
      },
      {
        values: [1960, 1961, 1962, 1963, 1965, 1966, 1999, 2017, 2018, 2020],
        defaultIndex: 1
      }
    ] */
  },
  mounted () {
    //
  },
  methods: {
    formateData (minYear) {
      let hasInit = this.initValue.length > 0
      let iYear = ''
      let iMonth = ''
      let iDay = ''
      if (hasInit) {
        iYear = Number(this.initValue[0])
        iMonth = Number(this.initValue[1])
        iDay = Number(this.initValue[2])
      }
      let arrY = this.getYears(minYear)
      let years = {
        values: arrY,
        defaultIndex: hasInit ? this.computedIndex(arrY, iYear) : arrY.length - 1,
        type: 'year'
      }
      let arrM = hasInit ? this.getMonths(iYear) : this.getMonths(arrY[arrY.length - 1], 'last')
      let month = {
        values: arrM,
        defaultIndex: hasInit ? iMonth - 1 : arrM.length - 1,
        type: 'month'
      }
      let arrD = hasInit ? this.getDay(iYear, iMonth) : this.getDay(arrY[arrY.length - 1], arrM.length, 'last')
      let day = {
        values: arrD,
        defaultIndex: hasInit ? iDay - 1 : arrD.length - 1,
        type: 'day'
      }
      this.columns = [
        day, month, years
      ]
      // console.log(this.columns)
    },
    computedIndex (arr, val) {
      return arr.indexOf(val)
    },
    getYears (minYear) {
      let cur = new Date()
      let maxYear = cur.getFullYear()
      let arr = []
      for (let i = minYear; i < maxYear + 1; i++) {
        arr.push(i)
      }
      return arr
    },
    getMonths (year, last) {
      // let arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      if (last) {
        let cur = new Date()
        let curMonth = cur.getMonth() + 1
        let returnArr = []
        for (let i = 1; i < curMonth + 1; i++) {
          returnArr.push(arr[i - 1])
        }
        return returnArr
      } else {
        return arr
      }
    },
    getDay (y, m, last) {
      // console.log(y, m, last)
      if (last) {
        let cur = new Date()
        let curDay = cur.getDate()
        let curDayArr = []
        for (let i = 1; i < curDay + 1; i++) {
          curDayArr.push(i)
        }
        return curDayArr
      } else {
        m = parseInt(m, 10)
        var temp = new Date(y, m, 0)
        let days = temp.getDate()
        let arr = []
        for (var i = 1; i < days + 1; i++) {
          arr.push(i)
        }
        return arr
      }
    },
    getInitBornlist (minYear) { // delete
      let cur = new Date()
      let maxYear = cur.getFullYear()
      let curMonth = cur.getMonth() + 1
      let curMonthArr = []
      for (let i = 1; i < curMonth + 1; i++) {
        curMonthArr.push(i)
      }
      let curDay = cur.getDate()
      let curDayArr = []
      for (let i = 1; i < curDay + 1; i++) {
        curDayArr.push({
          text: String(i)
        })
      }
      let Arr = []
      let Months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      for (let i = minYear; i < maxYear + 1; i++) {
        let objM = i !== maxYear ? Months : curMonthArr
        let mchildren = i !== maxYear ? this.getMChildren(i, objM) : this.getMChildren(i, objM, curDayArr)
        Arr.push({
          text: String(i),
          children: mchildren
        })
      }
      return Arr
    },
    getMChildren (y, ms, cur) { // delete
      let arr = []
      ms.forEach((m, index) => {
        arr[index] = {
          text: String(m),
          children: (cur && index + 1 === ms.length) ? cur : this.getDays(y, m)
        }
      })
      return arr
    },
    getDays (y, m) { // delete
      m = parseInt(m, 10)
      var temp = new Date(y, m, 0)
      let days = temp.getDate()
      let arr = []
      for (var i = 1; i < days + 1; i++) {
        arr.push({
          text: String(i)
        })
      }
      return arr
    },
    setHeight (val) {
      this.boxHeight = val
    },
    setSelect (val) { // 子选择之后操作
      // console.log(val)
      if (val.type === 'year') {
        this.curYear = val.val
        let lst = this.columns[2].values.length - 1
        let isLast = lst === val.index
        this.isLastYear = isLast
        let arrM = this.getMonths(val.val, isLast)
        let month = {
          values: arrM,
          defaultIndex: 0,
          type: 'month'
        }
        this.$set(this.columns, 1, month)
        this.$refs.slot[1].setSlotInit(0)
        // this.columns[1] = month
        // day
        let cur = new Date()
        let curMonth = cur.getMonth() + 1
        let arrD = this.getDay(val.val, 1, curMonth === 1)
        let day = {
          values: arrD,
          defaultIndex: 0,
          type: 'day'
        }
        this.$set(this.columns, 0, day)
        this.$refs.slot[0].setSlotInit(0)
        // this.columns[0] = day
        this.curDay = 1
        this.curMonth = 1
      } else if (val.type === 'month') {
        // 当前年isLastYear  且   最后月
        let arrD = []
        if (this.isLastYear && this.columns[1].values.length - 1 === val.index) {
          arrD = this.getDay('', '', true)
          this.curMonth = ''
        } else {
          this.curMonth = val.index + 1
          arrD = this.getDay(this.curYear, val.index + 1)
        }
        let day = {
          values: arrD,
          defaultIndex: 0,
          type: 'day'
        }
        this.$set(this.columns, 0, day)
        this.$refs.slot[0].setSlotInit(0) // 初始化阻止按照上次模式滚动
        this.curDay = 1
      } else if (val.type === 'day') {
        this.curDay = val.index + 1
      }
    },
    getResult () {
      let cur = new Date()
      let Month = cur.getMonth() + 1
      let Year = cur.getFullYear()
      let Day = cur.getDate()
      return {
        year: this.curYear || Year,
        month: this.curMonth || Month, // 17(th)
        day: this.curDay || Day
      }
    }
  }
}
</script>

<style scoped="scoped">
.muh-pickers {
  display: flex;
  text-align: center;
  overflow: hidden;
}
</style>
