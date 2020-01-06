<template>
  <div>
    <p class="mtitle">this is lottery</p>
    <!--<div class="party-lottery">
      <div class="notice"></div>
      <lottery :prize="prize" :leftcount="leftcount"></lottery>
    </div>-->
    <br /><br /><br />
    
    <div class="party-lottery">
      <div class="notice"></div>
      <muh-lottery :prize="prize2" :count="leftcount" :prizeKey="'prizeNo'" :prizeTarget="prizeTarget" @stop="stop">
        <template slot-scope="props">
          <div class="choujiang" v-if="props.index === 4" @click="chou">抽奖</div>
          <div class="item-prize" v-else>
            <img :src="props.row.prizeImage" alt="" />
            <span class="title">{{props.row.prizeTitle}}</span>
          </div>
        </template>
      </muh-lottery>
    </div>
    
    <div id="codeView" v-highlight v-html='htmlEncode(code)'></div>
    <!--<draw :prize="prizes" :leftcount="leftcount" @jumpLinkme="jumpLinkme" @cutUsableNum='cutUsableNum' @afterLoginInit="afterLoginInit"></draw>-->
  </div>
</template>

<script>
import list from '@/views/data/luckyprize.js'
import usecode from './use.txt'
export default {
  data () {
    return {
      prize: [],
      prize2: [],
      leftcount: 2,
      prizeTarget: {},
      code: ''
//    this.prizes = res.data
//        this.prizes.splice(4, 0, {})
    }
  },
  methods: {
    chou () {
      this.prizeTarget = {
        prizeNo: '6'
      }
    },
    stop (value) {
      // console.log(value)
    }
  },
  created () {
    this.code = usecode
    // console.log(list)
    setTimeout(() => {
      this.prize = list
      this.prize2 = list
      // console.log(JSON.stringify(list))
      // this.prize.splice(4, 0, {})
//    this.prize = [
//      { prizeNo: 0, prizeTitle: '吹风机', prizeImage: 'https://cbu01.alicdn.com/img/ibank/2018/420/661/8608166024_582723176.jpg' },
//      { prizeNo: 1, prizeTitle: '吹风机', prizeImage: 'https://cbu01.alicdn.com/img/ibank/2018/420/661/8608166024_582723176.jpg' },
//      { prizeNo: 2, prizeTitle: '吹风机', prizeImage: 'https://cbu01.alicdn.com/img/ibank/2018/420/661/8608166024_582723176.jpg' },
//      { prizeNo: 3, prizeTitle: '吹风机', prizeImage: 'https://cbu01.alicdn.com/img/ibank/2018/420/661/8608166024_582723176.jpg' },
//      {},
//      { prizeNo: 4, prizeTitle: '吹风机', prizeImage: 'https://cbu01.alicdn.com/img/ibank/2018/420/661/8608166024_582723176.jpg' },
//      { prizeNo: 5, prizeTitle: '吹风机', prizeImage: 'https://cbu01.alicdn.com/img/ibank/2018/420/661/8608166024_582723176.jpg' },
//      { prizeNo: 6, prizeTitle: '吹风机', prizeImage: 'https://cbu01.alicdn.com/img/ibank/2018/420/661/8608166024_582723176.jpg' },
//      { prizeNo: 7, prizeTitle: '吹风机', prizeImage: 'https://cbu01.alicdn.com/img/ibank/2018/420/661/8608166024_582723176.jpg' }
//    ]
    }, 50)
  }
}
</script>

<style scoped="scoped" lang="scss">
.mtitle {
  padding: 30px 0;
  text-align: center;
  font-size: 26px;
}
.party-lottery {
  background: url(~@/views/muh/lottery/lottery_bg@2x.png) no-repeat top;
  background-size: 100% auto;
  padding-top: 49px;
  min-height: 855px;
}
.item-prize {
  height: 100%;
  img {
    width: 100%;
  }
  span.title, span.count {
    display: inline-block;
    white-space: nowrap;
    position: absolute;
    bottom: 18px;
    color: #FD2B4F;
    font-weight: 500;
    font-family: PingFangSC-Medium;
  }
  span.title {
    left: 50%;
    transform: translateX(-50%);
  }
}
.choujiang {
  background: #fff;
  height: 100%;
  border-radius: 10px;
  text-align: center;
  line-height: 160px;
}
.notice {
  margin-left: 85px;
  display: flex;
  height: 50px;
  margin-bottom: 55px;
}
</style>
