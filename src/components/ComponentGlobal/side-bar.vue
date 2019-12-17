<template>
  <div>
    <div class="sidebar"> 
      <div class="widget author-widget">
        <div class="fb-page" data-href="https://www.facebook.com/classic.yearbook/" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/classic.yearbook/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/classic.yearbook/">The Classic Studio - Kỷ yếu số 1 Đà Thành</a></blockquote></div>
        <h3>About The Classic</h3>
        <div class="widget-content">
          <p>Chúng tôi luôn cố mang lại những điều tuyệt vời nhất, những trải nghiệm tốt nhất cho học sinh, sinh viên và những đối tượng khách hàng khác. Kỉ yếu chỉ chụp cùng nhau 1 lần trong đời, nên trải nghiệm ngày chụp là điều quan trọng nhất.</p>
        </div>
      </div>
      <div class="widget featured-posts">
        <h3>Featured Posts</h3>
        <div class="widget-content">
          <ul class="fpost-list" v-if="articlesRand.length > 0">
            <li v-for="(item, index) of articlesRand" :key="index"> 
              <router-link :to="{name: 'Detail', params: {id: item.id}}" tag="a" >
                <img v-if="item.images[0]" :src="item.images[0].name.url | takeImage" alt="neo">
                <div class="cp-post-content">
                  <h5><a href="#">{{item.title}}</a></h5>
                  <ul class="cp-post-meta">
                    <li><a href="#">{{item.created_at | moment}}</a></li>
                  </ul>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="widget instagram-widget">
        <h3>Showroom</h3>
        <div class="fb-post" data-href="https://www.facebook.com/DHQuan19/posts/1815982178449510" data-width="350" data-show-text="true"><blockquote cite="https://www.facebook.com/DHQuan19/posts/1815982178449510" class="fb-xfbml-parse-ignore"><p>kỷ yếu The Classic đang có chương trình khuyến mãi. 
Hệ thống công nghệ của The Classic chuẩn bị ra lò. Và sẽ có nhiều...</p>Người đăng: <a href="https://www.facebook.com/DHQuan19">Quân Đỗ</a> vào&nbsp;<a href="https://www.facebook.com/DHQuan19/posts/1815982178449510">Thứ Bảy, 15 Tháng 9, 2018</a></blockquote></div>
        <!-- <div class="widget-content">
          <ul class="insta" v-if="products">
            <li class="box-insta" v-for="(item, index) of products" :key="index">
              <img :src="item.photo.url | takeImage" alt="">
            </li>
          </ul>
        </div> -->
      </div>
      <div class="widget categories-widget">
        <h3>Archives</h3>
        <div class="widget-content">
          <ul>
            <li><a href=""> Design</a></li>
            <li><a href=""> General</a></li>
            <li><a href=""> Life Style</a></li>
            <li><a href=""> Travel</a></li>
            <li><a href=""> Wordpress</a></li>
            <li><a href=""> Photography</a></li>
          </ul>
        </div>
      </div>
      <div class="widget latest-stories-widget">
        <h3>Latest Stories</h3>
        <div class="widget-content">
          <ul class="ls-grid">
            <!-- <li class="ls-left"> <img src="../../assets/images/side-ls1.jpg" alt="neo"> <img src="../../assets/images/side-ls2.jpg" alt="neo"> </li>
            <li class="ls-right"> <img src="../../assets/images/side-ls3.jpg" alt="neo"> <img src="../../assets/images/side-ls4.jpg" alt="neo"> <img src="../../assets/images/side-ls5.jpg" alt="neo"> <img src="../../assets/images/side-ls6.jpg" alt="neo"> </li> -->
          </ul>
        </div>
      </div>
      <div class="widget about-widget">
        <h3>About Theme</h3>
        <div class="about-content"> <strong>Chụp đêm dễ dàng</strong>
          <p>Chụp đêm chưa bao giờ dễ dàng đến thế nếu bạn quẩy cùng The Classic. Với mức giá hợp lý và ưu đãi trang trí, tất cả sẽ mang đến cho các bạn bộ hình tuyệt vời nhất</p>
          <a href="#">Xem Ngay</a> 
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as types from '../../store/types'

export default{
  data () {
    return {
      articlesRand: [],
      products: null
    }
  },
  created () {
    this.$http.get(types.SHOW_RAND_DETAIL).then(res => {
      this.articlesRand = res.body
    })
    this.$http.get(types.LIST_PRODUCTS, {params: {kind: 5}}).then(res => {
      this.products = res.body
      console.log(this.products)
    })
  }
}
</script>
<style lang="scss">
.box-insta {
  width: calc(100%/3);
  height: 75px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
