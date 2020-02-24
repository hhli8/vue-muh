<template>
  <div class="muh-dialog-page">
    <div class="overlay" :class="uishow?'act':''" v-show="elshow" @click="overlayClick"></div>
    <div :type="type" v-show="elshow" class="dialog-cn" :class="uishow?'':'bounce-enter'">
      <div v-if="type === 'init'"><slot></slot></div>
      <div v-if="type === 'normal'" class="muh-dialog">
        <div class="muh-dialog-title">{{title}}</div>
        <div class="muh-dialog-content">{{content}}</div>
        <div class="muh-dialog-footer" v-if="showCancelButton">
          <div @click="overlayClick">取消</div><div @click="confirm">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'muhDialog',
  data () {
    return {
      elshow: false,
      uishow: false
    }
  },
  props: {
    type: {
      type: String,
      default: 'init'
    },
    show: {
      type: Boolean,
      default: false
    },
    showCancelButton: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  model: {
    prop: 'show'
  },
  computed: {
    title () {
      return this.data.title || ''
    },
    content () {
      return this.data.content || ''
    }
  },
  watch: {
    show (value) {
      if (value) {
        this.open()
      } else {
        this.close()
      }
    }
  },
  methods: {
    open () {
      this.elshow = true
      setTimeout(() => {
        this.uishow = true
        this.addClass(document.body, 'muh-overflow-hidden')
      }, 50)
    },
    close () {
      this.uishow = false
      setTimeout(() => {
        this.elshow = false
        this.removeClass(document.body, 'muh-overflow-hidden')
      }, 300)
    },
    overlayClick () {
      this.$emit('input', false)
    },
    confirm () {
      this.data.confirm(true)
    }
  }
}
</script>

<style scoped="scoped" lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: all 0.3s ease-out;
  z-index: 500;
}
.overlay.act {
  opacity: 1;
}
.dialog-cn {
  position: fixed;
  top: 45%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  background: #fff;
  border-radius: 10px;
  transition: all 0.3s ease-out;
  z-index: 510;
  .muh-dialog {
    width: 450px;
    box-sizing: border-box;
    font-size: 32px;
    &-title {
      font-size: 24px;
      padding: 20px 20px 10px 20px;
      text-align: center;
    }
    &-content {
      padding: 0 20px;
    }
    &-footer {
      display: flex;
      & > div {
        flex: 1;
        text-align: center;
        height: 80px;
        line-height: 80px;
      }
    }
  }
}
.bounce-enter {
  -webkit-transform: translate3d(-50%, -50%, 0) scale(.7);
  transform: translate3d(-50%, -50%, 0) scale(.7);
  opacity: 0
}
/*.bounce-leave-active {
  -webkit-transform: translate3d(-50%, -50%, 0) scale(.9);
  transform: translate3d(-50%, -50%, 0) scale(.9);
  opacity: 0
}*/
</style>
