<template>
  <div class="price">
    <section class="cp_price-section">
      <div class="container">
        <ul class="row">
          <div class="cp-heading-holder col-md-3 col-sm-6">
            <div class="align-center">
              <h3 class="title-price">{{this.$route.query.title}} Prices </h3>
              <p>Bảng giá {{this.$route.query.title}}</p>
              <div class="block">
                <i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
                <a @click="scrollSmooth"> Kích vào đây trượt nhanh xuống<br> bảng giá {{this.$route.query.title}}</a>
              </div>
            </div>
          </div>
          <li class="col-md-3 col-sm-6">
            <a href="https://facebook.com/classic.yearbook" class="cp-social-inner fb-bg">
              <strong class="icon"><i class="fa fa-gift" aria-hidden="true"></i></strong>
              <strong class="right-content"><span class="bold">20 GIFTS</span><span>khi book chụp<i class="fa fa-plus-circle"></i></span></strong>
            </a>
          </li>
          <li class="col-md-3 col-sm-6">
            <a href="#" class="cp-social-inner tw-bg">
              <strong class="icon"><i class="fa fa-money" aria-hidden="true"></i></strong>
              <strong class="right-content"><span class="bold">2TR VND</span><span>khi book quay<i class="fa fa-plus-circle"></i></span></strong>
            </a>
          </li>
          <li class="col-md-3 col-sm-6">
            <a href="#" class="cp-social-inner gplus-bg">
              <strong class="icon"><i class="fa fa-bus" aria-hidden="true"></i></strong>
              <strong class="right-content"><span class="bold">BAO ÔTÔ</span><span>với gói combo<i class="fa fa-plus-circle"></i></span></strong>
            </a>
          </li>
          <li class="col-md-3 col-sm-6">
            <a href="#" class="cp-social-inner quanplus-bg">
              <strong class="icon"><i class="fa fa-bus" aria-hidden="true"></i></strong>
              <strong class="right-content"><span class="bold">TRANG TRÍ</span><span>khi chụp đêm<i class="fa fa-plus-circle"></i></span></strong>
            </a>
          </li>
        </ul>
        <h4 class="title-price">CHỈ CẦN ĐĂNG KÝ CHỤP VÀ THUÊ TRANG PHỤC BẠN SẼ ĐƯỢC</h4>
        <div class="gift-row row">
          <gift class="col-md-4" :icon="'fa-gift'" :content="item" :keyword="'FREE'" v-for="(item, index) of giftPhoto" :key="index"/>
        </div>
        <h4 class="title-price">GẤP ĐÔI QUÀ TẶNG HƠN NỮA!!!!</h4>
        <div class="gift-row row">
          <gift class="col-md-4" :icon="'fa-gift'" :content="item.content" :keyword="item.keyword" v-for="(item, index) of giftCam" :key="index"/>
        </div>
        <h4 id="skip"  class="title-price">VẪN CÒN RẤT NHIỀU KHUYẾN MÃI BẤT NGỜ ĐANG CHỜ QUÝ KHÁCH BOOK LỊCH</h4>
        <div class="row">
          <div class="col-md-4 col-sm-4 price-item" v-for="(item, index) of prices" :key ="index">
            <price-item :price="item"/>
          </div>
        </div>
        <div>
          <h4 id="skip"  class="title-price">MỘT SỐ LƯU Ý</h4>
          <ul class="notice-list">
            <li class="list-item-notice">Tất cả các gói áp dụng cho các lớp sĩ số trên 30 người. (Các lớp dưới 30 người liên hệ để được tư vấn) </li>
            <li class="list-item-notice">The Classic Studio có dịch vụ makeup: 120k/ mặt. Bên cạnh đó, các bạn nữ vào hình cũng sẽ xinh lung linh hơn khi chỉ cần tự make up nhẹ nhàng, che khuyết điểm</li>
            <li class="list-item-notice">1 thợ chụp mỗi 20 sinh viên, tha hồ tẹt ga, ko lo đợi chờ!!!</li>
            <li class="list-item-notice">Đội ngũ thợ bẩn bựa, cực kì vui tính</li>
          </ul>
        </div>
        <div>
          <h4 id="skip"  class="title-price">XEM CÁC BẢNG GIÁ KHÁC</h4>
           <figure-list :figures="figures"></figure-list>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import * as types from '../store/types'

export default {
  name: 'Price',
  data () {
    return {
      giftPhoto: [
        'Hoa cầm tay và hoa đội đầu cho cả lớp',
        'Cà vạt cho tất cả các bạn nam',
        'Máy bay giấy màu cho cả lớp phi tẹt bô',
        '3kg bột màu chơi mệt nghỉ',
        'Loa thùng quẩy tẹt ga khi chơi bột màu',
        'Khói màu cho các lớp chơi bột màu',
        'Mỗi bạn 2 ảnh 13×18 in chất lượng cao',
        'Gói thiết kế photobook trị giá 2.000.000đ',
        'Flycam chụp hình cho các lớp đăng ký sớm và trên 50 người.'
      ],
      giftCam: [
        {keyword:'TẶNG NGAY', content:'gói Flycam và bóng bay khi book lịch'},
        {keyword:'CAM ĐOAN', content:'trả ảnh trong vòng 3-5 ngày'},
        {keyword:'MIỄN PHÍ', content:'sử dụng hệ thống ảnh fullHD'},
        {keyword:'TẶNG NGAY', content:'2.000.000đ khi sử dụng gói quay phim'},
        {keyword:'Không giới hạn', content:'số lượng file ảnh trong ngày chụp'},
        {keyword:'Không giới hạn', content:'Địa điểm chụp hình trong thời gian chụp'},
        {keyword:'Chỉnh sửa', content:'Toàn bộ file chụp trong buổi chụp, trả toàn ảnh bộ đã qua chỉnh sửa'},
        {keyword:'Tư vấn', content:'Concept chụp ảnh kỷ yếu độc nhất vô nhị'}
      ],
      figures: [
        {
          timeBefore: 'chụp - xe di chuyển - trang phục',
          type: 'Bảng giá',
          topic: 'Gói Combo',
          cover: require('../assets/images/main-6.jpg'),
          url: '/price?title=Combo&type=2'
        },
        {
          timeBefore: '2tr VND quà tặng',
          type: 'Bảng giá',
          topic: 'Quay Phim',
          cover: require('../assets/images/main-5.jpg'),
          url: '/price?title=Combo&type=1'
        },
        {
          timeBefore: 'Độc - lạ',
          type: 'Bảng giá',
          topic: 'Concept - Trang Phục',
          cover: require('../assets/images/main-4.jpg'),
          url: '/clothes'
        }
      ],
      prices: []
    }
  },
  created () {
    this.$http.get(types.LIST_PRICE).then(res => {
      this.prices = res.body
      this.prices = this.prices.filter(x => x.aspect == parseInt(this.$route.query.type))
      console.log(this.prices)
    })
  },
  methods: {
    scrollSmooth () {
      var hash = '#skip'
      $('html, body').animate({
          scrollTop :  $(hash).offset().top
      }, 500);
    }
  }
}
</script>
<style lang="scss">
.title-price {
  margin: 20px 0 !important;
}
@keyframes color-animation {
  0% {
      color: #ad1457;
  }
  50% {
      color: #6a1b9a;
  } 
  100% {
      color: #bbdefb
  } 
}
.block {
  i ,a {
    animation: color-animation 1s infinite linear alternate;
  }
}
.price-item {
  margin-bottom: 20px;
}
.price-item:first-child {
  .main-bg-price {
    background: linear-gradient(to top right, #ddb958 0%, #e5c66b 100%);
  }
}
.price-item:nth-child(2) {
  .main-bg-price {
    background: linear-gradient(to top right, #c8571f 0%, #be531b 100%);
  }
}
.price-item:nth-child(3) {
  .main-bg-price {
    background: linear-gradient(to top right, #99b2b6 0%, #739297 100%);
  }
}
.price-item:nth-child(4) {
  .main-bg-price {
    background: linear-gradient(to top right, #66ccff 0%, #6699ff 100%);
  }
}
.price-item:nth-child(5) {
  .main-bg-price {
    background: linear-gradient(to top right, #66ccff 0%, #6699ff 100%);
  }
}
.price-item:nth-child(6) {
  .main-bg-price {
    background: linear-gradient(to top right, #66ccff 0%, #6699ff 100%);
  }
}
.list-item-notice {
  margin-bottom: 10px;
  &:before {
    content: '✦';
    padding-right: 20px;
  }
}
</style>
