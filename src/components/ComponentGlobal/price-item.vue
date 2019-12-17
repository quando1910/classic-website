<template>
  <div v-if="price" class="cp-price-item">
    <div class="main-bg-price">
      <div class="star">
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
      </div>
      <h2 class="title">{{price.num_pp}}</h2>
      <p v-if="price.types == 0">Áp dụng theo sĩ số</p>
      <p v-if="price.types == 1">Không giới hạn sĩ số</p>
    </div>
    <div v-if="price.types == 0" class="price-holder">
      <h6>{{price.priceFirst}}k/<i class="fa fa-user"></i> cho 30 người đầu tiên</h6>
      <h6>từ người thứ 31 chỉ còn</h6>
      <b class="price-num">{{price.price}}<sup>K</sup>
      <span><i class="fa fa-user"></i></span></b>
    </div>
    <div v-if="price.types == 1" class="price-holder">
      <b class="price-num">{{price.price}}<sup>K</sup></b>
    </div>
    <div class="meta-price">
      <span>Số thợ chụp: sĩ số / 20</span>
      <p v-if="price.takenTime">Thời gian: <b>{{price.takenTime}}</b></p>
      <ul class="list-price-rule">
        <li v-for="(item, index) of price.offer.split('/')" :key="index">
          <a href="#">{{item}}</a>
        </li>
      </ul>
    </div>
    <el-button v-if="!booked"  type="danger" @click="booking({
        id: price.id,
        price: price.price,
        priceFirst: price.priceFirst,
        name: price.num_pp,
        type: 0,
        types: price.types,
        url: $route.fullPath
      }); booked = true">Book đi đừng ngại ngùng!!!
    </el-button>
    <div v-else>
      <el-button type="success">✓ Đã book</el-button><br>
      <el-button @click="deleteBooking({id: price.id, type: 0}); booked = false" type="text">Không book nữa click vào đây</el-button>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default{
  props: ['price'],
  data() {
    return {
      colorArr: ['#ffa534', '#fb404b', '#ff9510', '#cc2127', '#248cc9' ,'#4ec6f8'],
      booked: false
    }
  },
  mounted() {
    let packsArr = JSON.parse(localStorage.getItem('PACKS'))
    this.booked = packsArr.filter(x => x.id === this.price.id).length > 0 ? true : false
  },
  methods: {
    ...mapActions({
      booking: 'booking',
      deleteBooking: 'deleteBooking'
    }),
  }
}
</script>
<style lang="scss" scoped>
.star {
  padding-top: 20px;
}
.title {
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  padding-top: 10px;
  margin-bottom: 0;
}
.price-num {
  font-size: 40px;
  font-family: 'Anton', sans-serif;
  letter-spacing: 1.5px;
}
.main-bg-price {
  // background: linear-gradient(to top right, #ddb958 0%, #e5c66b 100%);
  margin: -20px -20px 0 -20px;
  height: 110px;
  .star, .title, p {
    color: white;
  }
}
.meta-price {
  background-color: #f2f2f2;
  border-radius: 5px;
  overflow: hidden;
  padding: 20px 0;
  height: 358px;
}
.btn-buynow {
  a {border-radius: 5px;}
}
.list-price-rule {
  overflow: scroll;
  max-height: 300px;
}

.el-button {
  margin: 10px 0;
}
.el-button--text {
  margin: 0;
  padding: 0;
}
</style>
