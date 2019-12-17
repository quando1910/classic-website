<template>
  <div class="about-us">
    <div id="cp-content-wrap"> 
    <div class="cp_our-story-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="cp-about-info">
              <h3>Về chúng tôi</h3>
              <p>"Classic Studio was established in 2013, formerly known as Elysium Production, has been renamed many times and developing to be one of the organisations of talented freelancers in the field of image services in Da Nang, Vietnam. Although we are established and operating not in a very long time, we believe that we are improving to bring better and better quality service to customers who come with us and believe in us."</p>
              <blockquote>
                <p>"Classic Studio được ra đời vào năm 2013, đã được thay đổi tên gọi nhiều lần và phát triển thành một tổ chức các freelancer tài năng trong ngành dịch vụ ảnh tại Da Nang, Vietnam. Mặc dù quãng thời gian phát triển chưa lâu chúng tôi tin rằng có thể đem đến cho các bạn dịch vụ tốt hơn và tốt hơn nữa qua từng ngày"</p>
              </blockquote>
            </div>
          </div>
          <div class="col-md-6">
            <div class="cp_about-slider-outer">
              <ul id="cp-about-slider" class="bx-slider">
                <li><img src="../assets/images/about-1.jpg" alt=""></li>
                <li><img src="../assets/images/about-2.jpg" alt=""></li>
                <li><img src="../assets/images/about-3.jpg" alt=""></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="cp-about-info">
          <h3>Nét đặc trưng</h3>
          <div class="gift-row row">
            <gift class="col-md-4" :icon="item.icon" :content="item.content" :keyword="item.keyword" v-for="(item, index) of giftCam" :key="index"/>
          </div>
        </div>
      </div>
    </div>
    <section class="cp_social-links-holder">
      <div class="container">
        <div class="cp-heading-holder">
          <h3>We Are Famous</h3>
        </div>
        <ul class="row">
            <li class="col-md-3 col-sm-6">
              <a href="https://facebook.com/classic.yearbook" class="cp-social-inner fb-bg">
                <strong class="icon"><i class="fa fa-facebook"></i></strong>
                <strong class="right-content"><span class="bold">200k</span><span>Follow<i class="fa fa-plus-circle"></i></span></strong>
              </a>
            </li>
            <li class="col-md-3 col-sm-6">
              <a href="#" class="cp-social-inner tw-bg">
                <strong class="icon"><i class="fa fa-camera"></i></strong>
                <strong class="right-content"><span class="bold">250tr</span><span>Đầu tư<i class="fa fa-plus-circle"></i></span></strong>
              </a>
            </li>
            <li class="col-md-3 col-sm-6">
              <a href="#" class="cp-social-inner gplus-bg">
                <strong class="icon"><i class="fa fa-book"></i></strong>
                <strong class="right-content"><span class="bold">5 Years</span><span>Kinh Nghiệm<i class="fa fa-plus-circle"></i></span></strong>
              </a>
            </li>
            <li class="col-md-3 col-sm-6">
              <a href="#" class="cp-social-inner linkedin-bg">
                <strong class="icon"><i class="fa fa-users"></i></strong>
                <strong class="right-content"><span class="bold">3 GEN</span><span>Đào tạo<i class="fa fa-plus-circle"></i></span></strong>
              </a>
            </li>
        </ul>
      </div>
    </section>
    <section class="cp_our-team-section">
      <div class="container">
        <div class="cp-heading-holder">
          <h3>Team chúng tôi</h3>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-4" v-for="(item, index) of photoers" :key="index">
            <div class="cp-team-item">
              <figure class="cp-thumb">
                <img class="avatar-img" :src="item.avatar.url |takeImage" alt="">
              </figure>
              <div class="cp-content">
                <div class="left">
                  <h4><a href="#">{{item.name}}</a></h4>
                  <ul class="cp-listed">
                    <li>{{item.role}}</li>
                    <li>Tel: {{item.phone}}</li>
                  </ul>
                  <p>{{item.description}}</p>
                </div>
                <ul class="cp_social-links">
                  <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="cp_testimonial-section">
      <div class="container">
        <div class="content_slider_wrapper" id="cp_testimonial-slider">
          <div class="circle_slider_text_wrapper" id="sw0" style="display: none;"> 
            <div class="content_slider_text_block_wrap"> 
              <p>Cras id varius nulla. Suspendisse potenti. Suspendisse quis sem ut risus auctor tri stique a a massa. Fusce scelerisque sem libero facilisis malesuada </p>
              <h5>Mark Aenry</h5>
            </div>
          </div>
          <div class="circle_slider_text_wrapper" id="sw1" style="display: none;"> 
              <div class="content_slider_text_block_wrap"> 
              <p>Cras id varius nulla. Suspendisse potenti. Suspendisse quis sem ut risus auctor tri stique a a massa. Fusce scelerisque sem libero facilisis malesuada </p>
              <h5>Nelson</h5>
            </div>
          </div>
          <div class="circle_slider_text_wrapper" id="sw2" style="display: none;"> 
              <div class="content_slider_text_block_wrap"> 
                <p>Cras id varius nulla. Suspendisse potenti. Suspendisse quis sem ut risus auctor tri stique a a massa. Fusce scelerisque sem libero facilisis malesuada </p>
                <h5>Alliaya Nic</h5>
            </div>
          </div>
          <div class="circle_slider_text_wrapper" id="sw3" style="display: none;"> 
             <div class="content_slider_text_block_wrap"> 
                <p>Cras id varius nulla. Suspendisse potenti. Suspendisse quis sem ut risus auctor tri stique a a massa. Fusce scelerisque sem libero facilisis malesuada </p>
                <h5>Doe Sameth</h5>
            </div>
          </div>
          <div class="circle_slider_text_wrapper" id="sw4" style="display: none;"> 
            <div class="content_slider_text_block_wrap"> 
                <p>Cras id varius nulla. Suspendisse potenti. Suspendisse quis sem ut risus auctor tri stique a a massa. Fusce scelerisque sem libero facilisis malesuada </p>
                <h5>Jonh Allia</h5>
            </div>
          </div>
        </div>
      </div>
    </section><!--Testimonial Section End-->
  </div>
  </div>
</template>

<script>
import * as types from '../store/types'

export default {
  name: 'AboutUs',
  data () {
    return {
       photoers: null,
       giftCam: [
        {icon: 'fa-camera-retro', keyword:'Trang thiết bị', content:'luôn đạt chuẩn chất lượng cao nhất'},
        {icon: 'fa-child', keyword:'Stylish', content:'tạo dáng tinh tế và sáng tạo'},
        {icon: 'fa-briefcase', keyword:'Độ phủ sóng', content:'phủ sóng rộng khắp nhiều tỉnh thành'},
        {icon: 'fa-volume-control-phone', keyword:'Tư vấn', content:'24/7 sẵn sàng tư vấn cho tất cả mọi người về lĩnh vực liên quan'},
        {icon: 'fa-graduation-cap', keyword:'Phục trang', content:'cập nhật và làm mới liên tục'},
        {icon: 'fa-users', keyword:'Đội ngũ', content:'Bao bựa bao vui tính, đi kèm với sự chuyên nghiệp'},
      ]
    }
  },
  created () {
    this.$http.get(types.LIST_PHOTOER).then(res => {
      this.photoers = res.body
    })
  },
  mounted () {
    if ($('#cp-about-slider').length) {
      $('#cp-about-slider').bxSlider({
          infiniteLoop: true,
          auto: true,
          pager: false,
          nextText: '',
          prevText: ' ',
      });
    }
  }
}
</script>

<style>
.gift-row {
  margin-right: -30px;
  margin-left: 30px;
  padding-bottom: 10px;
}
.title-price {
  padding: 20px 0;
}
.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cp-thumb {
  height: 240px;
}
.cp-team-item {
  margin-bottom: 30px;
}
</style>

