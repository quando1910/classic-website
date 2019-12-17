<template>
  <header id="header" :class="navVar === 0 ? 'header3': 'inner-header'">
    <div class="search">
      <form id="cp-top-search">
        <input name="search" type="text" placeholder="Enter your search" required>
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>
    </div>
    <div class="cp-top-bar">
      <div class="container">
        <div class="row">
          <div :class="navVar === 0 ? 'col-sm-4 col-xs-12': 'col-md-6'">
            <div class="left-box">
              <ul>
                <li>PHOTOGRAPHY</li>
                <li>CINEMATOGRAPHY</li>
              </ul>
            </div>
          </div>
          <div v-if="navVar === 0" class="col-md-4 col-sm-4 col-xs-12">
            <strong class="cp-logo-style-1"><a href="index.html"><img class="logo-main" src="../../assets/images/logo-main.png" alt="img"></a></strong> 
          </div>
          <div :class="navVar === 0 ? 'col-md-3 col-sm-4 col-xs-12': 'col-md-6'">
            <div class="right-box">
              <div class="cp-header-search-box">
                <div class="burger">
                  <i class="fa fa-search"></i>
                </div>
              </div>
              <ul class="cp-top-bar-social">
                <li><a target="_blank" href="https://facebook.com/classic.yearbook"><i class="fa fa-facebook-square"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i class="fa fa-behance"></i></a></li>
                <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                <li><a href="#"><i class="fa fa-envelope"></i></a></li>
                <li><a href="#"><i class="fa fa-rss"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cp-navigation-section">
      <nav class="navbar navbar-inverse">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
            <strong v-if="navVar === 1" class="cp-logo-style-2"><a href="index.html"><img class="logo-main" src="../../assets/images/logo-main-black.png" alt="img"></a></strong>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul id="nav" class="navbar-nav">
				      <li >
                <router-link class="nav-hover" to="/home" tag="a" exact><i class="fa fa-home" aria-hidden="true"></i>  Trang chủ</router-link>
              </li>
              <li>
                <a class="nav-hover" href="#" :class="{'router-link-exact-active': subIsActivePic()}"><i class="fa fa-tag" aria-hidden="true"></i>  Sản phẩm  <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                <ul>
                  <li><router-link to="/pictures">Ảnh</router-link></li>
                  <li><router-link to="/videos">Video</router-link></li>
                  <li><router-link to="/decoration?type=5">Trang trí</router-link></li>
                  <li><router-link to="/stories">Câu chuyện lớp</router-link></li>
                </ul>
              </li>
              <li><a class="nav-hover" href="#"  :class="{'router-link-exact-active': subIsActivePrice()}"><i class="fa fa-money" aria-hidden="true"></i>  Bảng giá  <i class="fa fa-angle-down" aria-hidden="true"></i></a>
              <ul>
                <li><router-link :to="{path: '/price', query: {title: 'Combo', type: 2}}" append>Gói chụp combo</router-link></li>
                <li><router-link :to="{path: '/price', query: {title: 'Videos', type: 1}}" append>Gói quay</router-link></li>
                <li><router-link to="/clothes">Gói trang phục</router-link></li>
              </ul>
              </li>
              <li><a class="nav-hover" href="#"  :class="{'router-link-exact-active': subIsActiveService()}"><i class="fa fa-shopping-cart" aria-hidden="true"></i>  Dịch vụ  <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                <ul>
                  <li><router-link to="/offer">Khuyến mãi</router-link></li>
                  <li><router-link to="/costume">Trang phục</router-link></li>
                  <li><router-link to="/concept">Ý tưởng</router-link></li>
                  <li><router-link to="/posing">Tạo dáng</router-link></li>
                  <li><router-link to="/ask">Hỏi - đáp</router-link></li>
                </ul>
              </li>
              <li>
                <router-link class="nav-hover" to="/viewers" tag="a" exact><i class="fa fa-search" aria-hidden="true"></i>  Tìm ảnh</router-link>
              </li>
              <li><router-link class="nav-hover" to="/about" tag="a" exact><i class="fa fa-id-card-o" aria-hidden="true"></i>  Về chúng tôi</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
  import * as types from '../../store/types'

  export default{
    props: ['navVar'],
    methods: {
     subIsActivePrice() {
       return this.$route.path === '/price'
     },
     subIsActiveService() {
       return (['/offer', '/costume', '/concept', '/posing', '/ask'].filter(x => x == this.$route.path).length > 0)
     },
     subIsActivePic() {
       return (['/pictures', '/videos', '/decoration', '/stories'].filter(x => x == this.$route.path).length > 0)
     }
    }
  }
</script>
<style lang="scss" scoped>
.inner-header {
  .router-link-exact-active {
    color: #293249 !important;
  }
}
.router-link-exact-active {
  font-size: 18px !important;
}
.nav-hover {
  &:hover {
    color: #ee8033 !important;
  }
}
</style>
