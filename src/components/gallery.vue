<template>
  <div id="cp-content-wrap" class="cp-content-wrap">
    <div class="container">
      <div class="row"> 
        <div class="col-md-12">
          <div class="cp-grid-isotope gallery" v-if="products.length > 0">
            <div class="isotope items">
              <div class="item" v-for="(item, index) of products" :key="index">
                <figure class="cp-hover-eff"> <progressive-img class="product-photo" alt="img02" :src="item.photo.url | takeImage"/>
                  <figcaption>
                    <a :href="item.photo.url | takeImage" data-rel="prettyPhoto"><i class="fa fa-search"></i> View Large</a> 
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as types from '../store/types'

export default {
  name: 'Gallery',
  data () {
    return {
      products: []
    }
  },
  created () {
    this.$http.get(types.LIST_PRODUCTS, {params: {kind: this.$route.query.type}}).then(res => {
      this.products = res.body
    })
  },
  mounted() {
    $('.js-item').addClass('item-type')
    if (this.$route.query.type == '1') {
      $('.item-1').addClass('active')
      $('.item-1').removeClass('item-type')
    } else if (this.$route.query.type == '2'){
      $('.item-2').addClass('active')
      $('.item-2').removeClass('item-type')
    } else if (this.$route.query.type == '3') {
      $('.item-3').addClass('active')
      $('.item-3').removeClass('item-type')
    } else if (this.$route.query.type == '4'){
      $('.item-4').addClass('active')
      $('.item-4').removeClass('item-type')
    }
  },
  updated() {
    if ($(".cp-grid-isotope .isotope").length) {
      var $container = $('.cp-grid-isotope .isotope');
      $container.isotope({
        itemSelector: '.item',
        transitionDuration: '0.6s',
        masonry: {
            columnWidth: $container.width() / 12
        },
        layoutMode: 'masonry'
      });
      $(window).resize(function() {
        $container.isotope({
          masonry: {
            columnWidth: $container.width() / 12
          }
        });
      });
    }
    setTimeout(() => {$(window).trigger("resize")}, 1500)
    if ($('.gallery').length) {
      $("area[data-rel^='prettyPhoto']").prettyPhoto();
      $(".gallery:first a[data-rel^='prettyPhoto']").prettyPhoto({
        animation_speed:'normal',
        theme:'light_square',
        slideshow:3000, 
        autoplay_slideshow: false
      });
    }
  },
  beforeRouteLeave(to,from, next) {
    $('.js-item').removeClass('item-type')
    $('.js-item').removeClass('active')
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.list-type-picture {
  .active {
    display: block;
    width: 100% !important; 
    transition: 1s;
  }
  .item-type {
    display: none;
  }
}
.product-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
