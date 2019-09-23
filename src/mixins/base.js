export default {
  computed: {
    isApp () {
      // return true
      return this.isSinafqApp() || this.isXXApp()
    }
  },
  methods: {
    isSinafqApp () {
      var ua = navigator.userAgent.toLocaleLowerCase()
      if (ua.match('sinafq')) {
        return true
      }
      return false
    },
    isXXApp () {
      var ua = navigator.userAgent.toLocaleLowerCase()
      if (ua.match('instalment')) {
        return true
      }
      return false
    }
  }
}
