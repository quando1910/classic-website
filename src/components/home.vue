<template>
  <div class="home">
    <slider/>
    <div id="cp-content-wrap" class="cp-content-wrap pd-tb0">
      <div class="cp-listed-items">
        <div class="container-fluid">
          <figure-list :figures="figures"></figure-list>
        </div>
      </div>
    </div>
    <div class="cp-heading-holder">
      <h3 class="align-center title-home">Tiêu điểm nổi bật </h3>
      <div id="cp-content-wrap" class="cp-content-wrap pd-tb0">
        <div class="cp-listed-items">
          <div class="container-fluid">
            <figure-list :figures="figures1"></figure-list>
            <figure-list :figures="figures2"></figure-list>
          </div>
        </div>
      </div>
    </div>
    <div class="cp-heading-holder">
      <h3 class="align-center title-home">Trang phục và concept <br> đang làm mưa làm gió</h3>
      <carousel :articles="articles"/>
    </div>
    <div id="cp-content-wrap" class="cp-content-wrap">
      <div class="container read-paper">
          <div class="cp-heading-holder">
            <h3 class="align-center title-home">Đọc báo cùng The Classic</h3>
          </div>
          <ul class="cp-posts-list" v-if="mainArticles != null" >
            <prepost v-for="(item, index) of mainArticles" :key="index" class="col-md-6 prepost-mar" :mainArticle="item"/>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import * as types from '../store/types'
import Vue from 'vue'
import store from '../store/store'

export default {
  name: 'Home',
  data () {
    return {
      figures: [
        {
          timeBefore: '12/9-20/9',
          type: 'Hot event',
          topic: 'NHẬN 30% OFFER',
          cover: require('../assets/images/main-6.jpg'),
          url: '/offer/33'
        },
        {
          timeBefore: '',
          type: 'Trang Phục - Ảnh - Video',
          topic: 'COMBO SIÊU CHẤT',
          cover: require('../assets/images/main-5.jpg'),
          url: '/price?title=Combo&type=2'
        },
        {
          timeBefore: '1 phần/ 1 lớp',
          topic: 'NHẬN QUÀ ONLINE',
          cover: require('../assets/images/main-4.jpg'),
          url: '/gift'
        }
      ],
      figures1: [
        {
          timeBefore: '',
          type: '',
          topic: 'Thư Viện Ảnh',
          cover: require('../assets/images/main-9.jpg'),
          url: '/pictures'
        }
      ],
      figures2: [
        {
          timeBefore: '',
          type: 'LÀM TÓC - TRANG ĐIỂM - TẠO DÁNG',
          topic: 'Hướng Dẫn Làm Đẹp Chụp Kỉ Yếu',
          cover: require('../assets/images/main-8.jpg'),
          url: '/posing?type=beauty'
        },
        {
          timeBefore: '',
          type: 'TRANG trí - ban đêm - lớp học',
          topic: 'Trang Trí Ngoại Cảnh',
          cover: require('../assets/images/main-7.jpg'),
          url: '/decoration?type=5'
        }
      ],
      articles: [],
      mainArticles: null
    }
  },
  mounted () {
    if ($('#cp-banner-1').length) {
      $('#cp-banner-1').bxSlider({
        infiniteLoop: true,
        auto: true,
        hideControlOnEnd: true
      });
    }
    Vue.http.get(types.HOT_COSTUME).then(res => {
      this.articles = res.body
    })
    Vue.http.get(types.SHOW_RAND_EXCEPT).then(res => {
      this.mainArticles = res.body
    })
  },
  methods: {
    setData (post) {
      this.articles = post
    }
  }
}
</script>

<style lang="scss" scoped>
.title-home {
  margin: 20px 10px;
  font-size: 2rem;
}
.cp-heading-holder {
  margin: 0;
}
.prepost-mar {
  margin-bottom: 10px;
}
</style>
