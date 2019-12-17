<template>
  <div id="cp-content-wrap" class="cp-content-wrap">
    <loading-time id="loadingpos"/>
    <picture-box id="pictureBox" :dataPic="picView" @closeBox="getCloseBox" @nextImg="getNextImg" @prevImg="getPrevImg"/>
    <div class="container view-container">
      <div class="row"> 
        <div class="cp-pagination col-md-10 col-sm-10 view-pic">
          <div v-if="contract">
            <h2>{{contract.group}} - {{contract.school}}</h2>
            <p>{{contract.town}}</p>
            <p>Niên Khóa: {{contract.school_year}}</p>
            <p>Tổng: <b>{{totalPic()}} tấm</b></p>
            <p>Link ảnh gốc </p>
            <div v-if="raws != null">
            <p v-for="(item, index) of raws.drive_link.split(',')" :key="`a-${index}`"><a target="_blank" :href="item" >{{item}}</a></p>
          </div>
          <hr>
          </div>
          <nav>
            <ul class="pagination">
              <li>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li v-for="(item,index) in pages" :key="`b-${index}`">
                <router-link :to="{name: 'PicCode', params: {id: $route.params.id}, query: {page: (index +1)}}" :class="{active: $route.query.page == (index + 1) }" replace>{{index + 1}}</router-link>
              </li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-md-2 col-sm-2"></div>
        <div class="col-md-10 col-sm-10 view-pic">
          <transition-group name="fade">
            <div class="cp-grid-isotope gallery" v-show="pictures && ($route.query.page ? $route.query.page : 1)  == (index + 1)" v-for="(itemPics, index) of pictures" :key="`e-${index}`">
              <p style="text-align: center">{{itemPics.pictureId.length}} tấm trong thư mục này</p>
              <div class="isotope items" v-masonry transition-duration="0.3s" item-selector=".item">
                <div v-masonry-tile class="item" v-for="(item, ind) of itemPics.pictureId" :key="`c-${ind}`">
                  <figure class="cp-hover-eff"> 
                    <div class="placeholder">
                      <img class="product-photo" alt="img02" :src="item | mediumGoogleImage" keep-alive @load="continueLoadImage">
                    </div>
                    <figcaption>
                      <h3>{{itemPics.name.split(',')[ind]}}</h3>
                      <a class="open-image" @click="openImage(item, ind)"><i class="fa fa-search"></i> View Large</a> 
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </transition-group>
          <div id="pagi-bottom" class="cp-pagination">
            <nav>
              <ul class="pagination">
                <li>
                  <a href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li v-for="(item,index) in pages" :key="`d-${index}`">
                  <router-link :to="{name: 'PicCode', params: {id: $route.params.id}, query: {page: (index +1)}}" :class="{active: $route.query.page == (index + 1) }" replace>{{index + 1}}</router-link>
                </li>
                <li>
                  <a href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="col-md-3 col-sm-3 side-bar-pic">
          <side-bar/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as types from '../store/types'

var count = 0;
export default {
  name: 'PicCode',
  data () {
    return {
      pos: null,
      loadImage: false,
      numberLoad: 20,
      imagePerSecond: 5,
      countPerSecond: 0,
      sectionPerSecond: [],
      currentPage: null,
      pictures: null,
      show: false,
      pictureTemp: {},
      picArr: null,
      nameArr: null,
      data: [],
      busy: false,
      contract: null,
      intervalId: null,
      raws: null,
      pages: 0,
      picView: null
    }
  },
  created () {
    $('#loadingpos').show()
    window.addEventListener('load', () => {
      $('#loadingpos').hide()
      this.loadmorePicture()
      this.loadImage = false
      setTimeout(() => {this.loadImage = true},2000)
    })
    this.$http.get(`${types.SHOW_VIEWER}/${this.$route.params.code}`).then(res => {
      this.contract = res.body.contract
      this.pictureTemp = res.body.meta.pic.map(params => params.pictureId.split(','))
      this.pictures = res.body.meta.pic.map(val => {
        val.pictureId = val.pictureId.split(',').slice(0, this.numberLoad)
        return val
      })
      this.raws = res.body.meta.raw
      // res.body.meta.pic.map(params => {
      //   params.pictureId = params.pictureId.split(',').slice(0, this.numberLoad).join()
      //   return params
      // })
      this.pages = res.body.meta.count
    })
    // this.$Lazyload.$on('loaded', function (listener) {
    //   console.log(222123123)
    // })
    // this.intervalId = window.setInterval(() => {
    //     $(window).trigger("resize")
    //     console.log('resize')
    // },15000)
  },
  mounted() {
    // $(window).scroll(() => {
    //   if(this.loadImage && $(window).scrollTop() + $(window).height() > $(window).height() + 500 && $(window).scrollTop() + $(window).height() > parseInt($('.cp-grid-isotope').offset().top + $('.cp-grid-isotope').height() )) {
    //     this.loadmorePicture()
    //     this.loadImage = false
    //     setTimeout(() => {this.loadImage = true},2000)
    //   }
    // });
    if (this.$route.query.pictureId && this.$route.query.pos) {
      this.openImage(this.$route.query.pictureId, this.$route.query.pos)
    }
  },
  methods: {
    loadmorePicture() {
      console.log(123123)
      let check = false
      let page = this.$route.query.page ? this.$route.query.page : 1
      let offset = this.pictures[page - 1].pictureId.length + this.sectionPerSecond.flat().length
      if (this.sectionPerSecond.length === 0) {
        check = true
      }
      this.sectionPerSecond = [...this.sectionPerSecond, ...this.divideArr(this.pictureTemp[page - 1].slice(offset, offset + this.numberLoad), this.imagePerSecond)]
      if (check) {
        console.log('revnew')
        this.pictures[page - 1].pictureId.push(...this.sectionPerSecond.splice(0, 1)[0])
      }
    },
    convertPicId (index) {
      index = index? index -1 : 0
      return this.pictures[index].pictureId.split(',')
    },
    continueLoadImage() {
      this.countPerSecond++
      let page = this.$route.query.page ? this.$route.query.page : 1
      console.log(`load ${this.countPerSecond}`)
      if (this.countPerSecond === this.imagePerSecond) {
        console.log(`reset`)
        this.countPerSecond = 0
        if(this.sectionPerSecond.length > 0) {
          this.pictures[page - 1].pictureId.push(...this.sectionPerSecond.splice(0, 1)[0])
        } else {
          console.log(123123)
          this.loadmorePicture()
        }
      }
    },
    divideArr(arr, num) {
      let temp = [];
      while (arr.length > 0) {
        temp.push(arr.splice(0, num));
      }
      return temp
    },
    loadMore () {
      this.busy = true;
      console.log(1332)
      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
          this.data.push({ name: count++ });
        }
        this.busy = false;
      }, 1000);
    },
    openImage (value, index) {
      console.log(888)
      // this.show = true
      $('body').addClass('lock-scroll')
      var page = this.$route.query.page ? this.$route.query.page : 1
      window.history.pushState(null, '', `?page=${page}&pictureId=${value}&pos=${index}`)
      $('#pictureBox').show()
      $('.pic-view').attr('src', this.$options.filters.mediumGoogleImage(value))
      $('.pic-view').attr('pos', index)
      $('.pic-view').attr('page', page)
      $('.pic-download').attr('href', this.$options.filters.fullGoogleImage(value))
      // $('.pic-facebook').attr('href', this.$options.filters.facebookImage(value))
      // this.pos = index
      // this.currentPage = this.$route.query.page ? this.$route.query.page : 1
      this.picView = value
    },
    convertPicName (index) {
      index = index? index -1 : 0
      return this.pictures[index].name.split(',')
    },
    getCloseBox (value) {
      window.history.pushState(null, '', `?page=${this.$route.query.page ? this.$route.query.page : 1}`)
      $('.pic-view').attr('src', null)
      this.picView = null
      $('#pictureBox').hide()
      $('body').removeClass('lock-scroll')
    },
    getNextImg (value) {
      let page = +$('.pic-view').attr('page')
      let range = this.pictureTemp[page - 1].length
      let currentRange = this.pictures[page - 1].pictureId.length
      let pos = +$('.pic-view').attr('pos') === (range - 1) ? 0 : (+$('.pic-view').attr('pos') + 1)
      if(range - currentRange > this.numberLoad && pos > currentRange - 5 ) {
        console.log('loadload')
        this.loadmorePicture()
        currentRange = this.pictures[page - 1].pictureId.length
      }
      this.setImage(pos, page)
    },
    getPrevImg (value) {
      let page = +$('.pic-view').attr('page')
      let range = this.pictureTemp[page - 1].length
      let pos = +$('.pic-view').attr('pos') === 0 ? (range - 1) : (+$('.pic-view').attr('pos') - 1)
      this.setImage(pos, page)
    },
    setImage (pos, page) {
      var picView = this.pictureTemp[page - 1][pos]
      window.history.replaceState(null, '', `?page=${page}&pictureId=${picView}&pos=${pos}`)
      $('.pic-view').attr('pos', pos)
      $('.pic-view').attr('page', this.$route.query.page ? this.$route.query.page : 1)
      $('.pic-view').attr('src', this.$options.filters.mediumGoogleImage(picView))
      $('.pic-view').on('load', function(){
        $('#loadingpos').hide();
      });
     $('.pic-download').attr('href', this.$options.filters.fullGoogleImage(picView))
     this.picView = picView
    //  $('.pic-facebook').attr('href', this.$options.filters.facebookImage(picView))
    },
    totalPic() {
      return this.pictureTemp.map(x => x.length).reduce((acc,curr) => {
        return acc + curr
      }, 0)
    }
  }
}
</script>
<style>
.product-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#loadingpos {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1200;
}

#pictureBox {
  display: none;
}
.lock-scroll {
  margin: 0;
  height: 100%;
  overflow: hidden;
}
.placeholder {
  width: 100%;
  min-height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('../assets/images/placeholder.png');
}
.item {
  padding: 1px;
}
</style>
