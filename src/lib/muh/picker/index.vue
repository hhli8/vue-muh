<template>
  <div>
    <button @click="click">dianwo</button>
    <div class="muh-picker" :style='"height: "+boxHeight+"px;"'>
      <!--<picker-slot ref="slot" v-for="(item,index) in columns" :list="item.values" :type="item.type" :defaultSelected="item.defaultIndex" :visibleCount="visibleItemCount" @getHeight="setHeight" @getSelect="setSelect" :key="index"></picker-slot>-->
      <picker-slot ref="slot" v-for="(item,index) in type?columns:[{values: columns, defaultIndex: index}]" :key="index" :list="item.values"
        :defaultSelected="item.defaultIndex"
        :visibleCount="visibleItemCount"
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
      boxHeight: ''
    }
  },
  props: {
    type: {
      type: String,
      default: () => {
        return ''
      }
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
  methods: {
    click () {
      console.log(this.value, this.code, this.columns, this.visibleItemCount)
    },
    setHeight (val) { // 给盒子设置高度
      this.boxHeight = val
    },
    setSelect (val) {
      //
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
