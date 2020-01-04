<template>
  <div>
    <p>this is lottery</p>
    <div class="party-lottery">
      <div class="notice"></div>
      <muh-lottery :prize="prize" :leftcount="leftcount"></muh-lottery>
    </div>
    
    <!--<draw :prize="prizes" :leftcount="leftcount" @jumpLinkme="jumpLinkme" @cutUsableNum='cutUsableNum' @afterLoginInit="afterLoginInit"></draw>-->
  </div>
</template>

<script>
import list from '@/views/data/luckyprize.js'
export default {
  data () {
    return {
      prize: [],
      leftcount: 2
//    this.prizes = res.data
//        this.prizes.splice(4, 0, {})
    }
  },
  created () {
    console.log(list)
    setTimeout(() => {
      this.prize = list
      this.prize.splice(4, 0, {})
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

<style scoped="scoped">
.party-lottery {
  background: url(~@/views/muh/lottery/lottery_bg@2x.png) no-repeat top;
  background-size: 100% auto;
  padding-top: 49px;
  min-height: 855px;
}
.notice {
  margin-left: 85px;
  display: flex;
  height: 50px;
  margin-bottom: 55px;
}
</style>
