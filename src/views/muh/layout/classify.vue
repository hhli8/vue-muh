<template>
  <div class="page-classify">
    <p>左右布局</p>
    <div id="codeView" v-highlight v-html='htmlEncode(code)'></div>
    <div><input type="text" placeholder="搜索"/></div>
    <muh-classify :left-list="left" :show-key="'name'" v-model="positive">
      <div class="scroll-right" slot="right">
        <div v-for="(item, index) in rtdata" :key="index" class="right-item">
          <p class="kind-name">{{item.name}}</p>
          <ul class="ul-box">
            <li class="flexBox" v-for="(val, sindex) in item.val" :key="sindex" @click="toSearch(val)">
              <img src="" alt="" />
              <div class="text flex1">
                <p class="m">{{val.mname}}</p>
                <p class="sub">{{val.subname}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </muh-classify>
  </div>
</template>

<script>
import usecode from './classify.txt'
export default {
  data () {
    return {
      left: [],
      rtdata: [],
      positive: 1,
      code: ''
    }
  },
  watch: {
    positive (val) {
      console.log(this.positive, val)
    }
  },
  created () {
    this.code = usecode
    setTimeout(() => {
      this.left = [
        { name: '精选', code: 1002 }, { name: '女装', code: 1003 }, { name: '手机', code: 1004 },
        { name: '数码', code: 1002 }, { name: '箱包', code: 1003 }, { name: '男鞋', code: 1004 },
        { name: '食品', code: 1002 }, { name: '内衣', code: 1003 }, { name: '运动', code: 1004 },
        { name: '居家百货', code: 1002 }, { name: '家装', code: 1003 }, { name: '美妆', code: 1004 },
        { name: '精选', code: 1002 }, { name: '女装', code: 1003 }, { name: '手机', code: 1004 },
        { name: '精选', code: 1002 }, { name: '女装', code: 1003 }, { name: '生鲜', code: 1004 }
      ]
      this.rtdata = [
        {
          name: '奢侈品',
          val: [
            { imgurl: '', mname: 'shopspringasdasssssssssssssssssssssssss', subname: '美国众多官网同步特价代购asdasdasdasdasd1213阿达撒' },
            { imgurl: '', mname: 'shopspring', subname: '美国众多官网同步特价代购' },
            { imgurl: '', mname: 'shopspring', subname: '美国众多官网同步特价代购' }
          ]
        },
        {
          name: '奢侈品2',
          val: [
            { imgurl: '', mname: 'shopspring', subname: '美国众多官网同步特价代购' },
            { imgurl: '', mname: 'shopspring', subname: '美国众多官网同步特价代购' },
            { imgurl: '', mname: 'shopspring', subname: '美国众多官网同步特价代购' }
          ]
        },
        {
          name: '奢侈品2',
          val: [
            { imgurl: '', mname: 'shopspring', subname: '美国众多官网同步特价代购' },
            { imgurl: '', mname: 'shopspring', subname: '美国众多官网同步特价代购' },
            { imgurl: '', mname: 'shopspring', subname: '美国众多官网同步特价代购' }
          ]
        },
        {
          name: '奢侈品2',
          val: [
            { imgurl: '', mname: 'shopspring', subname: '美国众多官网同步特价代购' },
            { imgurl: '', mname: 'shopspring', subname: '美国众多官网同步特价代购' },
            { imgurl: '', mname: 'shopspring', subname: '美国众多官网同步特价代购' }
          ]
        },
        {
          name: '奢侈品2',
          val: [
            { imgurl: '', mname: 'shopspring', subname: '美国众多官网同步特价代购' },
            { imgurl: '', mname: 'shopspring', subname: '美国众多官网同步特价代购' },
            { imgurl: '', mname: 'shopspring', subname: '美国众多官网同步特价代购' }
          ]
        },
        {
          name: '奢侈品2',
          val: [
            { imgurl: '', mname: 'shopspring', subname: '美国众多官网同步特价代购' },
            { imgurl: '', mname: 'shopspring', subname: '美国众多官网同步特价代购' },
            { imgurl: '', mname: 'shopspring', subname: '美国众多官网同步特价代购' }
          ]
        },
        {
          name: '奢侈品2',
          val: [
            { imgurl: '', mname: 'shopspring', subname: '美国众多官网同步特价代购' },
            { imgurl: '', mname: 'shopspring', subname: '美国众多官网同步特价代购' },
            { imgurl: '', mname: 'shopspring', subname: '美国众多官网同步特价代购end' }
          ]
        }
      ]
    })
  }
}
</script>

<style lang="scss" scoped="scoped">
.page-classify {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #BDBDBD;
}
.scroll-right {
    padding: 0 30px;
    background: #fff;
    /*border-radius: 0px 26px 0px 0px;*/
    .right-item {
        margin-bottom: 14px;
        .kind-name {
            font-size: 28px;
            font-family: PingFangSC-Medium,PingFangSC;
            font-weight: 500;
            height: 100px;
            line-height: 100px;
            border-bottom: 1px solid #e5e5e5;
        }
        .ul-box {
            margin-top: 31px;
            li {
                margin-bottom: 30px;
                img {
                    width: 102px;
                    height: 102px;
                    margin-right: 30px;
                }
                .text {
                    padding-top: 9px;
                    overflow: hidden;
                    .m {
                        font-size: 28px;
                        color: #333;
                        height: 40px;
                        line-height: 40px;
                        margin-bottom: 7px;
                    }
                    .sub {
                        font-size: 22px;
                        color: #999;
                        height: 30px;
                        line-height: 30px;
                    }
                    p {
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                }
            }
            li:last-child {
                margin-bottom: 0;
            }
        }
    }
}
</style>
