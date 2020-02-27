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
      dateColumns: []
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
          // 处理时间picker初始化
          console.log(this.hasInit)
        }
      }
    }
  },
  methods: {
    dateFormate (minYear) { // dateColumns
      console.log(this.lang)
      let hasInit = false
      let iYear = ''
      let iMonth = ''
      let iDay = ''
      let arrY = this.getYears(minYear)
      return
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
      this.dateColumns = [
        day, month, years
      ]
    },
    setHeight (val) { // 给盒子设置高度
      this.boxHeight = val
    },
    setSelect (val) {
      this.result = val
    },
    getResult () {
      if (this.result.type === 'single') {
        return this.result
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
