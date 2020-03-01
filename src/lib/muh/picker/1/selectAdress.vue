<template>
  <div class="select-adr-page flex" :class="pageClass">
    <div>
      <page-header>{{$t('person.adress')}}</page-header>
      <!--Residential Address-->
      <div style="text-align: left;">
        <!--<p class="p-title">Positioned to</p>
        <div class="p-value flex flexAlignCenter">
          <span class="icon"></span><span class="value">Street No.33,Haryana</span>
        </div>-->
        <div class="p-result">
          <p class="text">{{$t('person.location')}}</p>
          <!--Location-->
          <div class="select-value">
            <span class="select-value-item" v-for="(item, index) in selectList" :key="index" :class="curIndexNav===index?'act':''"  :style='curIndexNav===index?"color:"+APP_COLOR+";":""'       @click="onClickResultItem(item, index)">{{item.name}}</span><span class="alert" :style='"color:"+APP_COLOR+";"' v-if="selectList.length!==maxLevel+1">{{warnText}}</span>
          </div>
        </div>
      </div>
    </div>
    <div ref="scroll" class="scroll-con" style="text-align: left;flex:1;overflow: scroll;">
      <div class="listbox" ref="listbox">
        <div v-for="(item,index) in list" :key="index" class="list-item" :class="curIndex===index?'act':''"   :style='curIndex===index?"color:"+APP_COLOR+";":""'   @click="onClickItem(item,index)">{{item.name}}
          <!--<span class="icon"></span>-->
          <span v-if="index===curIndex" class="icon" :style='"background:url("+(`${PUBLIC_URL}images/credit/person/${APP_TYPE}/icon-selected.png`)+") no-repeat center;background-size: 100% 100%;"'></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/pageHeader'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    PageHeader
  },
  data () {
    return {
      list: [], // 显示值
      selectList: [], // 已选中的展示的值或者数据
      selectArr: [], // 存储index
      curIndex: '', // 当前显示选择中的项-下面
      curIndexNav: '', // 当前显示选择中的项-上面ui
      curLevel: 0, // 默认最高级别
      maxLevel: 2, // 需要几级 2-省市区
      warnText: this.$t('person.warnPro'), // 'Please select province', // Please select province // Please select city
      // mockdata
      staticAdress: [],
      provinces: ['Sasd', 'Hasdas', 'Kasdasd', 'Casdasdas', 'Sasd', 'Hasdas', 'Kasdasd', 'Casdasdas', 'Sasd', 'Hasdas', 'Kasdasd', 'Casdasdas', 'Sasd', 'Hasdas', 'Kasdasd', 'Casdasdas', 'Sasd', 'Hasdas', 'Kasdasd', 'Casdasdas', 'Sasd', 'Hasdas', 'Kasdasd', 'Casdasdas'],
      cities: ['Sasd-city', 'Hasdas', 'Kasdasd', 'Casdasdas', 'Sasd', 'Hasdas', 'Kasdasd', 'Casdasdas', 'Sasd', 'Hasdas', 'Kasdasd', 'Casdasdas', 'Sasd', 'Hasdas', 'Kasdasd', 'Casdasdas', 'Sasd', 'Hasdas', 'Kasdasd', 'Casdasdas', 'Sasd', 'Hasdas', 'Kasdasd', 'Casdasdas-city'],
      towns: ['Sasd-t', 'Hasdas', 'Kasdasd', 'Casdasdas', 'Sasd', 'Hasdas', 'Kasdasd', 'Casdasdas', 'Sasd', 'Hasdas', 'Kasdasd', 'Casdasdas', 'Sasd', 'Hasdas', 'Kasdasd', 'Casdasdas', 'Sasd', 'Hasdas', 'Kasdasd', 'Casdasdas', 'Sasd', 'Hasdas', 'Kasdasd', 'Casdasdas-t']
    }
  },
  computed: {
    ...mapState(['personInfo', 'pageClass'])
  },
  inject: ['eventBus'],
  created () {
    // 假如新进来后端获取值初始化处理------未开发-简单根据现有值遍历查询，初始化当前页面的数据-放在init里
    // this.list = this.provinces
    this.getAdressLists(0, 0)
  },
  mounted () {
    let target = this.$refs.scroll
    target.addEventListener('scroll', () => {
      // console.log(target.scrollTop)
    })
  },
  activated () { // 处理已有值时进来的滚动距离
    this.resolveScroll()
    // 不同来源处理
    let tag = sessionStorage.getItem('SELECTADRESSTAG')
    if (tag !== this.$route.query.type) {
      this.init()
      sessionStorage.setItem('SELECTADRESSTAG', this.$route.query.type)
    }
  },
  methods: {
    // 埋点
    ...mapActions(['LOG_EVENT']),
    init () {
      // this.list = this.provinces
      this.getAdressLists(0, 0)
      this.staticAdress = []
      this.selectList = []
      this.selectArr = []
      this.curIndex = ''
      this.curIndexNav = ''
      this.curLevel = 0
      this.warnText = this.$t('person.warnPro') // 'Please select province'
      // 处理之前已经保存过值的情况下
      // 待开发
    },
    onClickItem (item, index) {
      // 点击上级时下级初始化-此处处理一级
      if (this.curLevel === 0) {
        this.selectList = []
        this.selectArr = []
      } else if (this.curLevel === 1) {
        this.selectList = [this.selectList[0]]
        this.selectArr = [this.selectArr[0]]
      }
      this.curIndexNav = ''
      this.curIndex = '' // 取消上面显示的index-nav
      this.$set(this.selectList, this.curLevel, item)
      this.$set(this.selectArr, this.curLevel, index)
      if (this.curLevel === 0) {
        this.getAdressLists(item.id, this.curLevel + 1)
        this.warnText = this.$t('person.warnCity') // 'Please select city'
      } else {
        this.getAdressLists(item.id, this.curLevel + 1)
        this.warnText = this.$t('person.warnDis') // 'Please select district'
      }
      if (this.curLevel < this.maxLevel) {
        this.curLevel++
      }
      if (this.selectList.length === this.maxLevel + 1 && this.curLevel === this.maxLevel) {
        this.curIndex = index
        this.curIndexNav = this.maxLevel
        // 不同来源处理
        let tag = sessionStorage.getItem('SELECTADRESSTAG')
        let newSelectList = this.selectList.map(item => {
          return item.name
        })
        let commitSelectList = JSON.parse(JSON.stringify(this.selectList))
        let sendShow = ''
        commitSelectList.forEach((item, index) => {
          sendShow += item.name + ' '
        })
        if (tag === 'personinfo') {
          this.$store.commit('setPersonInfo', {
            selectAdr: commitSelectList
          })
          let data = {
            key: 'india_personalInfo_region',
            params: {
              content: sendShow
            }
          }
          this.LOG_EVENT(data)
        } else if (tag === 'bankInfo') {
          this.eventBus.$emit('update:address', this.selectList)
        } else if (tag === 'schoolAddr') {
          this.eventBus.$emit('update:schoolAdd', newSelectList)
        } else if (tag === 'companyAddress') {
          this.eventBus.$emit('update:companyAdd', newSelectList)
        }
        this.$router.back()
      }
      let scrollt = this.$refs.scroll
      scrollt.scrollTop = 0
    },
    onClickResultItem (item, index) {
      this.curIndexNav = index
      // 切换下面列表数据，并显示选中项，且滚动到可视区内
      /* if (index === 0) {
        this.list = this.provinces
      } else if (index === 1) {
        this.list = this.cities
      } */
      this.list = this.staticAdress[index]
      this.curLevel = index
      this.curIndex = this.selectArr[index]
      // 滚动处理
      this.$nextTick(() => {
        this.resolveScroll()
      })
    },
    resolveScroll () {
      let scrollt = this.$refs.scroll
      let target = document.querySelector('.scroll-con .list-item.act')
      let reactList = this.$refs.listbox.getBoundingClientRect()
      if (target) {
        let reactItem = target.getBoundingClientRect()
        scrollt.scrollTop = reactItem.top - reactList.top
      }
    },
    getAdressLists (id, index) {
      this.$api['credit/getAdrList']({
        parentId: id
      }).then(res => {
        // console.log(res)
        if (res && res.length) {
          /* if (id === 0) {
            this.provinces = res
            this.list = this.provinces
          } else {
            this.cities = res
            this.list = res
          } */
          this.list = res
          this.staticAdress[index] = res
          // console.log(this.staticAdress)
        }
      })
    }
  }
}
</script>

<style scoped="scoped" lang="scss" src="./selectAdress.scss">
</style>
