<template>
  <div>
    <div class="muh-picker" :style='"height: "+boxHeight+"px;"'>
      <picker-slot ref="slot" v-for="(item,index) in type?(type==='date'?dateColumns:columns):[{values: columns, defaultIndex: index, type: 'single'}]" :key="index" :list="item.values"
        :defaultSelected="item.defaultIndex"
        :visibleCount="visibleItemCount"
        :type="item.type"
        :actLine='actLine'
        @getSelect="setSelect"
        @getHeight="setHeight">
      </picker-slot>
    </div>
  </div>
</template>

<script>
import pickerSlot from './slot.vue'
export default {
  name: 'muhPicker',
  components: {
    pickerSlot
  },
  data () {
    return {
      boxHeight: '',
      result: '',
      hasInit: false,
      dateColumns: [],
      /* dateColumns: [
        { values: [] }, { values: [] }, { values: [] }
      ], */
      arrYearIndex: 2, // 默认en
      arrDayIndex: 0,
      arrMonthIndex: 1,
      curYear: '',
      curDay: '',
      curMonth: '',
      isLastYear: true,
    }
  },
  props: {
    type: {
      type: String,
      default: ''
    },
    columns: {
      type: Array,
      default: () => { return [] }
    },
    setKey: {
      type: Object,
      default: () => { return {} }
    },
    visibleItemCount: {
      type: Number,
      default: 5
    },
    actLine: {
      type: Number,
      default: 2
    },
    minYear: {
      type: Number,
      default: 1960
    },
    lang: {
      type: String,
      default: 'en' // en-  zh-
    },
    initValue: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    value () {
      return this.setKey.value || 'value'
    },
    code () {
      return this.setKey.code || 'code'
    },
    index () {
      return this.setKey.defaultIndex || 0
    }
  },
  created () {
    if (this.type === 'date') {
      this.dateFormate(this.minYear)
    }
  },
  watch: {
    initValue (val) {
      this.hasInit = this.initValue.length > 0
      if (val.length) {
        if (this.type === 'date') {
          this.dateFormate(this.minYear)
        }
      }
    }
  },
  methods: {
    dateFormate (minYear) {
      // console.log(this.lang)
      let hasInit = this.hasInit // false
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
        defaultIndex: hasInit ? arrY.indexOf(iYear) : arrY.length - 1,
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
      if (this.lang === 'en') {
        this.dateColumns = [day, month, years]
      } else if (this.lang === 'zh') {
        this.dateColumns = [years, month, day]
        this.arrYearIndex = 0
        this.arrDayIndex = 2
      } else {
        this.dateColumns = []
      }
      // console.log(this.dateColumns)
    },
    setHeight (val) { // 给盒子设置高度
      this.boxHeight = val
    },
    setSelect (val) {
      // console.log(val)
      this.result = val
      if (val.type === 'year') {
        this.curYear = val.val
        let lst = this.dateColumns[this.arrYearIndex].values.length - 1
        let isLast = lst === val.index
        this.isLastYear = isLast
        // month
        let arrM = this.getMonths(val.val, isLast)
        let month = {
          values: arrM,
          defaultIndex: 0,
          type: 'month'
        }
        this.$set(this.dateColumns, this.arrMonthIndex, month)
        // day
        let cur = new Date()
        let curMonth = cur.getMonth() + 1
        let arrD = this.getDay(val.val, 1, curMonth === 1)
        let day = {
          values: arrD,
          defaultIndex: 0,
          type: 'day'
        }
        this.$set(this.dateColumns, this.arrDayIndex, day)
        this.curDay = 1
        this.curMonth = 1
      } else if (val.type === 'month') {
        // 当前年isLastYear  且   最后月
        let arrD = []
        if (this.isLastYear && this.dateColumns[this.arrMonthIndex].values.length - 1 === val.index) {
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
        this.$set(this.dateColumns, this.arrDayIndex, day)
        this.curDay = 1
      } else if (val.type === 'day') {
        this.curDay = val.index + 1
      }
    },
    getResult () {
      if (this.result.type === 'single') {
        return this.result
      } else if (this.type === 'date') {
        let cur = new Date()
        let Month = cur.getMonth() + 1
        let Year = cur.getFullYear()
        let Day = cur.getDate()
        return {
          year: this.curYear || (this.hasInit ? Number(this.initValue[0]) : Year),
          month: this.curMonth || (this.hasInit ? Number(this.initValue[1]) : Month),
          day: this.curDay || (this.hasInit ? Number(this.initValue[2]) : Day)
        }
      } else {
        return {}
      }
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
      let arr = this.lang === 'en' ? ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
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
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.muh-picker {
  display: flex;
  text-align: center;
  overflow: hidden;
}
</style>
