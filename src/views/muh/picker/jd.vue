<template>
  <div>
    <p style="text-align: center;padding: 20px 0;font-size: 40px;">jd adress picker</p>
    <div>
      <button @click="show">省市区</button>
      <div>{{resultStr}}</div>
      <muh-popup v-model="dataPicker" :async="true">
        <muh-jdpicker
          :item-style="itemstyle"
          :item-actstyle="itemactStyle"
          @result="getResult"
          :initValue="initValue"
          :columns="columns">
        </muh-jdpicker>
        <button @click="dateOk">确定</button>
      </muh-popup>
    </div>
    <div v-highlight v-html='htmlEncode(code)'></div>
  </div>
</template>

<script>
import usecode from './jd.txt'
import City from './city.js'
export default {
  data () {
    return {
      dataPicker: false,
      columns: [],
      itemstyle: '',
      itemactStyle: '',
      resultStr: '',
      initValue: [],
      code: ''
    }
  },
  created () {
    this.code = usecode
    setTimeout(() => {
      this.itemstyle = 'height: 40px;line-height: 40px;color: #14181F;'
      this.itemactStyle = 'color: #2C72F5;'
      this.columns = City
      this.initValue = ['浙江省', '杭州市', '临安市']
    }, 300)
  },
  methods: {
    show () {
      this.dataPicker = true
    },
    dateOk () {
      //
    },
    getResult (res) {
      // console.log(res)
      this.resultStr = ''
      res.forEach((item) => {
        this.resultStr+= item.name
      })
      this.dataPicker = false
    }
  }
}
</script>

<style>
</style>