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
      <muh-picker type="date"></muh-picker>
    </muh-popup>
    <muh-popup v-model="singlePicker">
      <muh-picker
        :columns="columns"
        :set-key="columnsOption"
        :visibleItemCount='3'>
      </muh-picker>
    </muh-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataPicker: false,
      singlePicker: false,
      columns: [],
      columnsOption: {
        value: 'name',
        code: 'code',
        defaultIndex: 2
      }
    }
  },
  created () {
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
    }, 30)
  },
  methods: {
    show1 () {
      this.dataPicker = true
    },
    show3 () {
      this.singlePicker = true
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
button {
  margin-bottom: 15px;
}
</style>
