<template>
  <div class="muh-button">
    <div v-if="type==='outside'" class="switch-track-outside" :class="show?'on':''" @click="toggle">
      <span class="handle"></span>
    </div>
    <div v-else class="switch-track" :class="show?'on':''" @click="toggle"><span class="handle"></span></div>
  </div>
</template>

<script>
export default {
  name: 'muhButton',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'inner'
    }
  },
  model: {
    prop: 'show'
  },
  data () {
    return {
      //
    }
  },
  methods: {
    toggle () {
      this.$emit('input', !this.show)
      this.$emit('click', !this.show)
    }
  }
}
</script>

<style lang="scss" scoped="scoped" src="./index.scss">
</style>
