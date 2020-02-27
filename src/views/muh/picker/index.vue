<template>
  <div>
    <p style="text-align: center;padding: 20px 0;font-size: 40px;">this is picker</p>
    <div style="padding: 0 20px;">
      <button @click="show1">选择出生年月日(中文版)</button>
      <button>选择出生年月日(英文版)</button>
      <button @click="show3">选择单列</button>
      <button>省市区</button>
    </div>
    <muh-popup v-model="dataPicker">
      <muh-picker
        ref="datePickerRef"
        :set-key="columnsOptionDate"
        :min-year="1970"
        :initValue="initValue"
        lang="zh"
        type="date">
      </muh-picker>
    </muh-popup>
    <muh-popup v-model="singlePicker" :async="true">
      <div style="background: #BD2C00;color: #fff;text-align: center;font-size: 24px;">
        <span>标题</span>
      </div>
      <muh-picker
        ref="singlePickerRef"
        :columns="columns"
        :set-key="columnsOption"
        :actLine='2'
        :visibleItemCount='5'>
      </muh-picker>
      <button @click="singleOk">确定</button>
    </muh-popup>
    <div v-highlight v-html='htmlEncode(code)'></div>
  </div>
</template>

<script>
import usecode from './use.txt'
export default {
  data () {
    return {
      code: '',
      dataPicker: false,
      singlePicker: false,
      columns: [],
      columnsOption: {
        value: 'name', // 默认value
        code: 'code', // 默认code
        defaultIndex: 2 // 默认0
      },
      columnsOptionDate: {},
      initValue: []
    }
  },
  created () {
    this.code = usecode
    setTimeout(() => {
      this.columns = [
        { name: '杭州', code: '1001' },
        { name: '宁波', code: '1002' },
        { name: '金华', code: '1003' },
        { name: '衢州', code: '1004' },
        { name: '丽水', code: '1005' },
        { name: '温州', code: '1006' },
        { name: '舟山', code: '1007' }
      ]
      this.initValue= [1991, 3, 10]
    }, 30)
  },
  methods: {
    show1 () {
      this.dataPicker = true
    },
    show3 () {
      this.singlePicker = true
    },
    singleOk () {
      console.log(this.$refs.singlePickerRef.getResult())
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
button {
  margin-bottom: 15px;
}
</style>
