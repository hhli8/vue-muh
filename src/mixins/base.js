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
    },
    // class
    toggleClass (obj, cls) {
      if (!obj) return
      this.hasClass(obj, cls) ? this.removeClass(obj, cls) : this.addClass(obj, cls)
    },
    addClass (obj, cls) {
      if (!obj) return
      let classVal = obj.getAttribute('class')
      if (!classVal) { classVal = '' }
      classVal = classVal.concat(classVal ? ' ' + cls : cls)
      obj.setAttribute('class', classVal)
    },
    removeClass (obj, cls) {
      if (!obj) return
      let classVal = obj.getAttribute('class')
      if (!classVal) { classVal = '' }
      let arr = classVal.split(' ')
      classVal = ''
      arr.forEach(function (cur, index) {
        classVal += (cur && cur !== cls) ? (index === 0 ? cur : ' ' + cur) : ''
      })
      obj.setAttribute('class', classVal)
    },
    hasClass (obj, cls) {
      if (!obj) return
      let classVal = obj.getAttribute('class')
      if (!classVal) { classVal = '' }
      if (classVal.indexOf(cls) !== -1) {
        return true
      } else {
        return false
      }
    },
    htmlEncode (str) {
      var s = ""
      str = str || ''
      if (str.length == 0) return ''
      s = str.replace(/<pre><code([\s\S]*?)<\/code><\/pre>/ig, function (i,a) {
        // console.log('i====',i,'\n a==========',a)
        // return '<pre><code ' + a.replace(/</ig, "&lt;").replace(/>/ig, "&gt;") + '</code><\/pre>'
        return '<pre><code ' + a.replace(/</ig, "&lt;")+ '</code><\/pre>'
      })
      return s
    },
    isArray (value) {
      if (typeof Array.isArray === 'function') {
        return Array.isArray(value)
      } else {
        return Object.prototype.toString.call(value) === '[object Array]'
      }
    },
    clone (value) {
      // console.log(value)
      return JSON.parse(JSON.stringify(value))
      /* function clone (value) {
        if (Array.isArray(value)) {
          return value.map(clone)
        } else if (value && typeof value === 'object') {
          var res = {};
          for (var key in value) {
            res[key] = clone(value[key]);
          }
          return res
        } else {
          return value
        }
      } */
    }
  }
}
