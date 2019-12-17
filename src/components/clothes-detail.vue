<template>
  <div class="clothes-detail" v-if="cloth">
    <div id="cp-content-wrap" style="margin-top: -80px;" class="cp-content-wrap">
      <div class="container">
        <div class="row">
          <div class="col-md-7" v-if="cloth.images.length > 0">
            <div class="box-detail-img">
              <img class="large-img" :src="mainImg |takeImage">
            </div>
            <div class="img-meta" v-if="cloth.images.length > 1">
              <img class="small-img"  @click="changeImg(item, index)" v-for="(item, index) of listImg" :key="index" :src="item | takeImage">
            </div>
          </div>
          <div class="col-md-5">
            <h2 class="title-custom">{{cloth.name}}</h2>
            <div class="star">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <div class="fb-like" :data-href="url" data-layout="standard" data-action="like" data-size="large" data-show-faces="false" data-share="true"></div>
            <div style="padding-top: 20px;">
              <h4>Giá</h4>
              <p>Giá thuê lẻ: ...k</p>
              <p>Giá thuê (> 10 bộ): <span class="money">{{cloth.hire}}k</span></p> 
              <h4>Phụ kiện</h4>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Tên phụ kiện</th>
                    <th scope="col">Giá thuê(vnd)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) of sup" :key="index">
                    <td>{{item.name}}</td>
                    <td>{{item.hire}}</td>
                  </tr>
                </tbody>
              </table>
              <h4>Mô tả</h4>
              <p>{{cloth.description}}</p>
              <router-link v-if="cloth.link" tag="a" :to="{name: 'Detail', params: {id: cloth.link}}" class="btn btn-primary">XEM BÀI THAM KHẢO</router-link>
              <button v-if="!booked" class="btn btn-primary" 
                  @click="booking({
                  id: cloth.id,
                  price: cloth.hire,
                  priceFirst: 0,
                  name: cloth.name,
                  type: 1,
                  types: 0,
                  url: $route.fullPath
                }); booked = true">
                CHỌN BỘ NÀY
              </button>
              <div v-else>
              <button class="btn btn-success">
                ✓ ĐÃ CHỌN TRANG PHỤC NÀY
              </button>
              <button @click="deleteBooking({id: price.id, type: 0}); booked = false" style="margin-top: 10px">Không book nữa click vào đây</button>
              </div>
            </div>
          </div>
        </div>
        <div class="cp-related-content title-custom">
          <h2>TRANG PHỤC CÓ THỂ BẠN QUAN TÂM</h2>
           <div class="cp-posts cp-overflow">
            <ul class="cp-posts">
              <li class="col-md-3 cp-relate cp-post" v-for="(item, index) of related_clothes" :key="index">
                <router-link :to="{name: 'Detail', params: {id: item.id}}" tag="a" >
                  <div class="cp-thumb-r"><img class="fit-image-details" v-if="item.images[0]" :src="item.images[0].name.url | takeImage" alt=""></div>
                  <div class="cp-post-text">
                    <h4><a href="#">{{item.name}}</a></h4>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="cp-related-content title-custom">
          <h2>THAM KHẢO THƯ VIỆN BAÌ VIẾT</h2>
          <ul class="cp-posts">
            <li class="col-md-3 cp-relate cp-post" v-for="(item, index) of articlesRand" :key="index">
              <router-link :to="{name: 'Detail', params: {id: item.id}}" tag="a" >
                <div class="cp-thumb-r"><img class="fit-image-details" v-if="item.images[0]" :src="item.images[0].name.url | takeImage" alt=""></div>
                <div class="cp-post-text">
                  <h4><a href="#">{{item.title}}</a></h4>
                  <strong>{{item.created_at |moment}}</strong> 
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import * as types from '../store/types'
export default {
  name: 'ClothesDetails',
  data() {
    return {
      cloths: null,
      related_clothes: null,
      mainImg: null,
      listImg: [],
      cloth: null,
      sup: null,
      url : null,
      articlesRand: null,
      booked: false
    }
  },
  created () {
    this.url = window.location.href
    this.$http.get(`${types.LIST_CLOTHES}/${this.$route.params.id}`).then(res => {
      this.cloths = res.body
      this.cloth = this.cloths.splice(this.cloths.findIndex(x => x.id == this.$route.params.id),1)[0]
      this.sup = this.cloths.filter(x => x.id != this.$route.params.id)
      this.result = true
      if (this.cloth.images.length > 0 ) {
        this.mainImg = this.cloth.images[0].name.url
      }
      if (this.cloth.images.length > 1 ) {
        let listImg = this.cloth.images.slice(1)
        this.listImg = listImg.map(x => x.name.url)
      }
    })
  },
  mounted () {
    this.$http.get(`${types.LIST_RELATED_CLOTHES}/${this.$route.params.id}`).then(res => {
      this.related_clothes = res.body
    })
    this.$http.get(types.SHOW_RAND_DETAIL).then(res => {
      this.articlesRand = res.body
    })
  },
  methods: {
    ...mapActions({
      booking: 'booking',
      deleteBooking: 'deleteBooking'
    }),
    changeImg(item, index) {
      this.listImg.splice(index,index + 1)
      this.listImg.push(this.mainImg)
      this.mainImg = item
    }
  }
}
</script>
<style lang="scss" scoped>
.title-custom {
  color: rgba(0,0,0,0.6);
}
.cp-overflow {
  overflow-x: scroll;
  overflow-y: hidden;
  height: 300px;
  white-space:nowrap;
}
.box-detail-img {
  width: 100%;
  height: 435px;
  object-fit: contain;
}
.money {
  color: rgb(233, 30, 95);
}
.large-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.small-img{
  width: 100px;
  height: 100px;
  object-fit: cover;
  transform: translateY(-20%);
}
.img-meta {
  overflow-x: scroll;
  overflow-y: hidden;
  height: 80px;
  white-space:nowrap;
}
.star {
  color: #f2852b;
}
.cp-related-content {
  padding-top: 30px;
}
.fit-image-details {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cp-relate  {
  height: 320px;
}
.cp-thumb-r {
  height: 200px;
}
.cp-post-text {
  padding-top: 10px;
  h4 {
    font-size: 15px;
  }
}
</style>
