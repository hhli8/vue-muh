<template>
  <div>
    <p>hello</p>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'Helloy',
  data () {
    return {
      //
    }
  },
  mounted () {
    this.$emit('setColor', 900)
  }
}
</script>

<style>
</style>
