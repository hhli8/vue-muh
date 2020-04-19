<template>
  <div class="muh-classify">
    <div class="nav" ref="nav">
      <ul class="">
        <li class="nav-obj" :class="postive==index?'act':''" v-for="(item, index) in leftList" :key="index" @click="choseNav(item, index)">
          {{item[showKey]}}
        </li>
      </ul>
    </div>
    <div class="nav-items" ref="navItems">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'muhClassify',
  model: {
    prop: 'postive'
  },
  props: {
    leftList: {
      type: Array,
      default: () => {
        return []
      }
    },
    postive: {
      type: Number,
      default: 0
    },
    showKey: {
      type: String,
      default: 'k'
    }
  },
  data () {
    return {
      //
    }
  },
  mounted () {
    this.Nav = new BScroll('.nav', {
      click: true,
      bounce: false
    })
    this.navItems = new BScroll('.nav-items', {
      click: true,
      startY: 0,
      bounce: false
    })
  },
  methods: {
    choseNav (item, index) {
      this.$emit('input', index)
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.muh-classify {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  overflow: hidden;
  .nav {
    width: 180px;
    overflow: hidden;
    border-radius: 26px 0px 0px 0px;
    background: #F8F9FA;
    text-align: center;
    &-obj {
      color: #333;
      font-size: 28px;
      box-sizing: border-box;
      height: 100px;
      line-height: 100px;
    }
    &-obj.act {
      background: #fff;
      color: #ED145B;
    }
  }
  .nav-items {
    flex: 1;
    overflow: hidden;
    border-radius: 0px 26px 0px 0px;
  }
}
</style>
