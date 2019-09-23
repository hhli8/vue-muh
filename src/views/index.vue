<template>
  <div class="app">
    <p class="title">muh组件库——</p>
    <div v-for="item, index in lists" class="grade">
      <div class="grade-name">{{item.grade}}</div>
      <div>
        <div class="grade-child" v-for="(child, cindex) in item.children">
          <router-link :to="{ name: child.path }">{{child.name}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lists: [
        {
          grade: '子组件',
          children: [
            { name: '按钮', path: 'subButton' },
            { name: '输入框', path: 'subInput' }
          ]
        },
        {
          grade: '功能组件',
          children: [
            { name: 'sku选择', path: 'funSku' },
            { name: '弹窗', path: 'funDialog' }
          ]
        },
        {
          grade: '布局组件',
          children: [
            { name: '吸顶布局', path: 'layoutTopfixed' },
            { name: '全屏布局', path: 'layoutFullscreen' }
          ]
        },
        {
          grade: '业务组件',
          children: [
            { name: '提交订单', path: 'layoutTopfixed' },
            { name: '收银台', path: 'layoutTopfixed' }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.app {
  .title {
    text-align: center;
    padding: 30px 0;
    font-size: 46px;
    color: #333;
  }
  .grade {
    margin-bottom: 20px;
    padding-left: 25px;
    &-name {
      font-size: 36px;
      margin-bottom: 10px;
    }
    &-child {
      font-size: 28px;
      margin-bottom: 6px;
    }
  }
}
</style>
