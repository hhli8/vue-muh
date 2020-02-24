<template>
  <div class="page" :class="pageClass">
    <div class="item" v-for="(item, index) in data" :key="index">
      <div class="item-con" v-if="item.type==='input'">
        <div class="con">
          <div class="name">{{$t(item.textname)}}</div>
          <input class="con-input" :class="item.err?'err':''" type="text" v-model="item.send" :placeholder="$t(item.placeholder)" @input="listenInput($event, item)" @blur="inputBlur(item)"/>
        </div>
      </div>
      <div class="item-con" v-if="item.type==='picker-born'" @click="showBornPicker(item)">
        <div class="con">
          <div class="name" :class="item.err?'err':''">{{$t(item.textname)}}</div>
          <div class="con-input flex flexAlignCenter flexBetween">
            <div v-if="!item.send">{{$t(item.placeholder)}}</div>
            <div v-else class="select-value">{{item.send}}</div>
            <span class="iconfont icon-right"></span>
          </div>
        </div>
      </div>
      <div class="item-con radio" v-if="item.type==='radio'">
        <div class="con">
          <div class="name" :class="item.err?'err':''">{{$t(item.textname)}}</div>
          <div class="flex">
            <div class="radio-item" v-for="(sitem, sindex) in item.options" :style='"color:"+(sitem.code === item.send?"#fff":APP_COLOR)+";"+(sitem.code === item.send?"background: "+APP_COLOR+";border-color: "+APP_COLOR+";":"")' :key="sindex" @click="radioSelect(item, sitem)">{{sitem.value}}</div>
            <!--:class="[sitem.code === item.send?'act':'']"-->
          </div>
        </div>
      </div>
      <div class="item-con" v-if="item.type==='picker'" @click="openPicker(item, index)">
        <div class="con">
          <div class="name">{{$t(item.textname)}}</div>
          <div class="con-input flex flexAlignCenter flexBetween">
            <div v-if="!item.send">{{$t(item.placeholder)}}</div>
            <div v-else class="select-value">{{item.show}}</div>
            <span class="iconfont icon-right"></span>
          </div>
        </div>
      </div>
      <div class="item-con" v-if="item.type==='native'" @click="getLocation(item)">
        <div class="con">
          <div class="name">{{$t(item.textname)}}</div>
          <div class="con-input flex flexAlignCenter flexBetween">
            <div v-if="!item.send">{{$t(item.placeholder)}}</div>
            <div v-else class="select-value">
              <div class="over-hide">{{item.show}}</div>
            </div>
            <span class="iconfont icon-right"></span>
          </div>
        </div>
      </div>
      <div v-else></div>
    </div>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        title="标题"
        cancel-button-text="取消"
        confirm-button-text="确认"
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
    <!--<van-popup v-model="bornPicker" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        cancel-button-text="取消"
        confirm-button-text="确认"
        title="标题"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="bornPicker = false"
        @confirm="onConfirmBorn"
      />
    </van-popup>-->
    <van-popup v-model="bornPicker" position="bottom">
      <div class="marry-con born-con">
        <div class="mtitle">{{$t('person.birth')}}</div>
        <p class="warn">{{$t('person.warnSelect')}}</p>
        <data-picker :init-value="initBorn" :visible-item-count="visiblecount" ref="muhDatePicker"></data-picker>
        <div class="marry-operate flex flexJustifyCenter">
          <div class="o-cancel-btn btn" @click="bornPicker=false">{{$t('person.cancel')}}</div>
          <div class="o-ok-btn btn" :style='"background: "+APP_COLOR+";"' @click="getSelectedBorn">{{$t('person.confirm')}}</div>
        </div>
      </div>
    </van-popup>
    <van-popup
      v-model="marryshow"
      position="bottom">
      <div class="marry-con">
        <div class="mtitle">{{$t('person.marry')}}</div>
        <p class="warn">{{$t('person.warnSelect')}}</p>
        <div class="list-con">
          <div v-for="(item, index) in marrycolumns" :key="index" class="marry-item" :class="actmarry===index?'act':''" @click="select(item,index)">
            <div class="marry-item-con">
              <div class="name" :style='"color:"+(actmarry===index?APP_COLOR:null)+";"'>{{item.value}}</div>
              <span v-if="index===actmarry" class="icon" :style='"background:url("+(`${PUBLIC_URL}images/credit/person/${APP_TYPE}/icon-selected.png`)+") no-repeat center;background-size: 100% 100%;"'></span>
            </div>
          </div>
        </div>
        <div class="marry-operate flex flexJustifyCenter">
          <div class="o-cancel-btn btn" @click="marryshow=false">{{$t('person.cancel')}}</div>
          <div class="o-ok-btn btn" :style='"background: "+APP_COLOR+";"' @click="confirmMarry">{{$t('person.confirm')}}</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import dataPicker from './picker'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    dataPicker
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      showPicker: false,
      bornPicker: false,
      minDate: new Date(1960, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(),
      columns: [],
      target: '',
      marrycolumns: [],
      marryshow: false, // 婚姻状态选择框
      actmarry: '',
      // 时间选择器
      visiblecount: 4,
      initBorn: [] // 默认时间
    }
  },
  computed: {
    ...mapState(['pageClass'])
  },
  created () {
    //
  },
  methods: {
    checkoutItem () {
      this.$emit('checkout', {})
    },
    listenInput (e, item) {
      if (!item.send) item.err = ''
      this.checkoutItem()
    },
    openPicker (item, index) {
      if (item.key === 'marry') {
        this.marrycolumns = item.options
        this.marrycolumns.forEach((t, i) => {
          if (item.send === t.code) this.actmarry = i
        })
        this.target = item
        this.marryshow = true
      } else if (item.newpath) {
        this.$router.push({ name: item.newpath, params: item })
      } else {
        this.columns = item.options
        this.target = item
        this.showPicker = true
      }
    },
    onConfirm (value) {
      this.target.send = value
      this.showPicker = false
    },
    radioSelect (item, sitem) {
      // item.show = sitem.value
      item.err = ''
      item.send = sitem.code
      this.checkoutItem()
      let data = {
        key: 'india_personalInfo_sex',
        params: {
          content: item.send
        }
      }
      this.LOG_EVENT(data)
    },
    getLocation (item) {
      // item.send = 'hangzhou'
      this.$router.push({
        name: item.newpath,
        query: {
          type: 'personinfo'
        }
      })
    },
    showBornPicker (item) {
      this.bornPicker = true
      this.target = item
      this.initBorn = item.send ? item.send.split('-') : []
    },
    onConfirmBorn (value) {
      /* let t = new Date(value)
      let y = t.getFullYear()
      let m = t.getMonth()
      let d = t.getDate()
      console.log(y, m + 1, d)
      this.bornPicker = false */
    },
    select (item, index) { // 婚姻状态选择
      this.actmarry = index
    },
    confirmMarry () {
      if (this.actmarry === '') return
      this.target.show = this.marrycolumns[this.actmarry].value
      this.target.send = this.marrycolumns[this.actmarry].code
      this.marryshow = false
      this.checkoutItem()
      let data = {
        key: 'india_personalInfo_marriage',
        params: {
          content: this.target.show
        }
      }
      this.LOG_EVENT(data)
    },
    getSelectedBorn (item) {
      this.target.err = ''
      let r = this.$refs.muhDatePicker.getResult()
      // console.log(r)
      let y = r.year
      let m = r.month
      let d = r.day
      this.target.send = y + '.' + (m < 10 ? '0' + m : m) + '.' + (d < 10 ? '0' + d : d)
      this.bornPicker = false
      this.checkoutItem()
      let data = {
        key: 'india_personalInfo_birthday',
        params: {
          content: this.target.send
        }
      }
      this.LOG_EVENT(data)
    },
    // 埋点
    ...mapActions(['LOG_EVENT']),
    inputBlur (item) {
      let data = {
        key: item.action,
        action: 'input',
        params: {
          content: item.send
        }
      }
      this.LOG_EVENT(data)
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
/*@import '~@/assets/scss/common';*/
.page {
  margin-top: 20px;
}
.item {
  font-family:Roboto-Regular,Roboto;
  font-weight: 400;
  text-align: left;
  background: #fff;
  padding: 0 30px;
  &-con {
    padding: 30px 0 20px 0;
    position: relative;
    .name {
      color: #14181F;
      font-size: 28px;
      height: 32px;
      line-height: 32px;
      margin-bottom: 30px;
      font-weight: 400;
    }
    .name.err {
      color: red;
    }
    .con-input {
      width: 100%;
      height: 38px;
      line-height: 38px;
      font-size: 32px;
      color: #14181F;
      padding: 0;
      .icon-right {
        display: inline-block;
        width: 28px;
        height: 32px;
        background: url(~@/assets/imgs/creditPerson/account_Angle_right@2x.png) no-repeat center;
        background-size: 100% 100%;
      }
      .select-value {
        color: #14181F;
        font-family:Roboto-Medium,Roboto;
        width: 0;
        flex: 1;
        .over-hide {
          overflow: scroll;
          white-space: nowrap;
        }
        .over-hide::-webkit-scrollbar {
          display: none;
        }
      }
    }
    div.con-input {
      color: #C5CFD5;
    }
    input.con-input {
      font-weight: 500;
      font-family:Roboto-Medium,Roboto;
    }
    input.con-input.err {
      color: red;
    }
    input.con-input::-webkit-input-placeholder { color: #C5CFD5;font-weight: 400;font-family:Roboto-Regular,Roboto; }
    input.con-input:-ms-input-placeholder { color: #C5CFD5;font-weight: 400;font-family:Roboto-Regular,Roboto; }
    input.con-input::-moz-placeholder { color: #C5CFD5;font-weight: 400;font-family:Roboto-Regular,Roboto; }
    input.con-input:-moz-placeholder { color: #C5CFD5;font-weight: 400;font-family:Roboto-Regular,Roboto; }
    .radio-item {
      margin-right: 20px;
      height: 44px;
      line-height: 42px;
      width: 112px;
      box-sizing: border-box;
      text-align: center;
      border-radius: 8px;
      border: 1px solid rgba(197,207,213,1);
      font-weight:400;
      font-size: 28px;
      /*color: #2C72F5;*/
    }
    .radio-item.act {
      /*background: #2C72F5;
      border-color: #2C72F5;*/
      border-width: 1px;
      border-style: solid;
      /*color: #fff*/
    }
  }
  .radio {
    padding-bottom: 14px;
  }
  &-con:after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #E7EBEE;
    transform-origin: 0 0;
    transform: scaleY(0.5);
  }
}
.item:last-child {
  .item-con:after {
    display: none;
  }
}

.marry-con {
  padding-bottom: 100px;
  .mtitle {
    padding: 30px 0;
    font-size: 32px;
    font-family:Roboto-Medium,Roboto;
    font-weight:500;
    color: #14181F;
    height: 38px;
    line-height: 38px;
  }
  .warn {
    font-size: 28px;
    color: #14181F;
    font-family:Roboto-Regular,Roboto;
    font-weight:400;
    padding-left: 30px;
    text-align: left;
    height: 32px;
    line-height: 32px;
    margin-bottom: 30px;
  }
  .marry-operate {
    padding: 0 30px;
    text-align: center;
    font-size: 32px;
    font-family:Roboto-Medium,Roboto;
    font-weight:500;
    margin-top: 60px;
    .o-cancel-btn {
      background: #F7F8FC;
      color: #222222;
      margin-right: 30px;
    }
    .o-ok-btn {
      /*background: #2C72F5;*/
      color: #fff;
    }
    .btn {
      height: 100px;
      line-height: 100px;
      width: 330px;
      border-radius: 8px;
    }
  }
  .marry-item {
    text-align: left;
    padding: 0 30px;
    &-con {
      height: 88px;
      line-height: 88px;
      font-size: 28px;
      font-family:Roboto-Regular,Roboto;
      font-weight:400;
      color: #8C9FAD;
      position: relative;
      .icon {
        display: inline-block;
        position: absolute;
        width: 40px;
        height: 40px;
        /*background: url(~@/assets/imgs/creditPerson/icon-selected.png) no-repeat center;
        background-size: 100% 100%;*/
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
    }
  }
  .marry-item.act {
    .name {
      /*color: #2C72F5;*/
      font-size: 36px;
      font-family:Roboto-Medium,Roboto;
      font-weight:500;
    }
  }
}
.born-con {
  .warn {
    margin-bottom: 10px;
  }
  .marry-operate {
    margin-top: 40px;
  }
}
/*.page.creditbean {
  .item-con {
    .radio-item {
      color: $creditbean;
    }
    .radio-item.act {
      background: $creditbean;
      border: 1px solid $creditbean;
      color: #fff;
    }
  }
  .marry-con .marry-item.act .name {
    color: $creditbean;
  }
  .marry-con .marry-item-con .icon {
    background: url(~@/assets/imgs/creditPerson/icon-selected-creditbean.png) no-repeat center;
    background-size: 100% 100%;
  }
  .marry-con .marry-operate .o-ok-btn {
    background: $creditbean;
  }
}
.page.creditbus {
  .item-con {
    .radio-item {
      color: $creditbus;
    }
    .radio-item.act {
      background: $creditbus;
      border: 1px solid $creditbus;
      color: #fff;
    }
  }
  .marry-con .marry-item.act .name {
    color: $creditbus;
  }
  .marry-con .marry-item-con .icon {
    background: url(~@/assets/imgs/creditPerson/icon-selected-creditbus.png) no-repeat center;
    background-size: 100% 100%;
  }
  .marry-con .marry-operate .o-ok-btn {
    background: $creditbus;
  }
}*/
</style>
