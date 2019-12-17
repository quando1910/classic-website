<template>
  <div :class="navbarToggle === 0 ? 'app' : 'inner-page'">
    <div id="wrapper"> 
      <navbar v-if="navbarToggle !== 2" :navVar="navbarToggle"/>
      <router-view :key="$route.path"/>
      <app-footer v-if="navbarToggle !== 2"/>
    </div>
    <div class="options-cart">
      <div id="ops" class="options" >
        <div @click="checkStatus">
          <el-badge v-if="!check" :value="packs.length" class="item">
            <el-button class="fa-icon" type="text" size="small"><i class="fa fa-shopping-cart"  aria-hidden="true"></i></el-button>
          </el-badge>
          <i class="fa fa-compress" style="position: absolute;" v-if="check" aria-hidden="true"></i>
        </div>
        <transition name="custom-classes-transition"
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeOutRight">
          <div v-if="check" :class="{'active-ops': check}">
            <h3>Để The Classic tính tiền cho bạn</h3>
            <div>
              <el-input placeholder="Cho tụi tớ sĩ số lớp" v-model="classNum"></el-input>
              <el-tag type="danger" v-if="classNum == 0 || classNum == null">
                Bạn chưa nhập sĩ số lớp kìa!
              </el-tag>
              <el-tag type="warning" v-if="classNum < 30">
                Sĩ số phải trên 30!
              </el-tag>
              <el-tag type="primary" v-if="classNum >= 30">
                Sĩ số hợp lệ rồi!
              </el-tag>
              <div class="cover-info" v-if="packs.length > 0">
                <div class="hidden-cover" v-if="classNum < 30"></div>
                <h4>Các gói bạn vừa chọn</h4>
                <div class="package-table">
                  <div class="card" v-for="(o, index) of packs" :key="index">
                    <i class="fa fa-times" aria-hidden="true" @click="deleteBooking({id: o.id, type: o.type});"></i>
                    <h2 class="title">{{o.name}}</h2>
                    <span v-if="o.priceFirst > 0">{{o.priceFirst}}k - </span><span>{{o.price}}k</span>
                    <span v-if="o.types == 0">/<i class="fa fa-user"></i><br></span>
                    <span v-else>/gói<br></span>
                    <span v-if="o.types == 0">Tổng: {{(30*o.priceFirst + (classNum - 30)*o.price)}} K</span>
                    <a class="read" :href="o.url">Xem</a><br>
                  </div>
                </div>
                <h4 class="col-md-4 col-sm-4">Tổng tiền</h4><div class="col-md-8 col-sm-8" ><el-tag type="success">VND {{calcTotal()}} k</el-tag></div>
                <h4 class="col-md-4 col-sm-4">Chia tiền /<span><i class="fa fa-user"></i></span></h4><div class="col-md-8 col-sm-8"> <el-tag type="warning">VND  {{calcPerson()}} k</el-tag></div>
              </div>
              <div v-if="packs.length < 1"><a href="/price?title=Combo&type=2"><h4 class="align-center" style="padding-top: 50px;">Bạn chưa chọn gói chụp. <br>Hãy click vào đây để chọn gói chụp ưng ý</h4></a></div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeInRight"
      leave-active-class="animated bounceOutRight"
    >
      <noti v-if="noti && notiGo" @inter="closeInterval" :noti="noti[Math.floor(Math.random()*noti.length)]"></noti>
    </transition>
  </div>
</template>
<script>
import * as types from "./store/types"
import Vue from 'vue'
import { mapActions, mapGetters } from "vuex"
import {loadFbSdk, refreshFB} from './plugins/fb-sdk'

export default {
  data() {
    return {
      navbarToggle: 0,
      isFBReady: false,
      fbRoot: null,
      classNum: null,
      noti: null,
      notiGo : false,
      check : false
    }
  },
  created() {
    window.addEventListener('load', () => { window.FB.XFBML.parse()})
    this.$http.get(types.LIST_NOTI).then(res => {
      this.noti = res.body
    })
    let packs = JSON.parse(localStorage.getItem('PACKS') !== null ? localStorage.getItem('PACKS') : '[]')
    this.$store.commit('mutateBooking', packs)
  },
  computed: {
    ...mapGetters({
      packs: 'packs'
    })
  },
  mounted() {
    loadFbSdk()
    if (this.$route.fullPath === '/home') {
      this.navbarToggle = 0
    } else if (this.$route.fullPath === '/showroom' || this.$route.name === 'Decoration' || this.$route.name === 'StoryDetail') {
      this.navbarToggle = 2
    } else {
      this.navbarToggle = 1
    }
    this.intervalId = window.setInterval(() => {
      this.notiGo = true
       setTimeout(() => {
        this.notiGo = false
      },10000)
    },60000);
  },
  updated() {
    if (this.$route.name === 'Home') {
      this.navbarToggle = 0
    } else if (this.$route.name === 'Showroom' || this.$route.name === 'Decoration' || this.$route.name === 'StoryDetail') {
      this.navbarToggle = 2
    } else {
      this.navbarToggle = 1
    }
  },
  watch:{
    $route (to, from){
      setTimeout(() => {
        window.FB.XFBML.parse()
      },2000)
    }
  },
  methods: {
    ...mapActions({
      deleteBooking: 'deleteBooking'
    }),
    checkStatus () {
      this.check = !this.check
    },
    closeInterval () {
      this.notiGo = false
      window.clearInterval(this.intervalId)
    },
    calcTotal () {
      let total = 0
      for(let item of this.packs) {
        if (item.types == 0 && item.type == 0) { //Price theo dau nguoi
          total = total + (30*item.priceFirst + (this.classNum - 30)*item.price)
        } else if (item.types == 1 && item.type == 0) { //Price theo goi
          total = total + item.price
        } else if (item.type == 1) { //Trang phuc
          total = total + item.price*this.classNum
        }
      }
      return total
    },
    calcPerson () {
      return Math.floor(this.calcTotal()/this.classNum)
    }
  }
};
</script>
<style lang="scss">
.time {
  font-size: 13px;
  color: #999;
}

.fadeOutUp-leave /* .fade-leave-active below version 2.1.8 */ {
  height: 300px;
  width: 500px;
}
.card:first-child {
  background-image: url('./assets/images/size123_1.jpg');
}
.card:nth-child(2) {
  background-image: url('./assets/images/size123_2.jpg');
}
.card:nth-child(3) {
  background-image: url('./assets/images/size123_3.jpg');
}
.card:nth-child(4) {
  background-image: url('./assets/images/size123_4.jpg');
}
.card:nth-child(5) {
  background-image: url('./assets/images/size123_5.jpg');
}
.cover-info {
  position: relative;
  .hidden-cover {
    position: absolute;
    width: 100%;
    z-index: 1000;
    top: 0;
    left: 0;
    height: 100%;
    background-color: rgba(255,255,255,0.9)
  }
}
.fa-icon {
  padding: 0;
}
</style>
