<template>
  <div>
    <div class="cp-posts-style-1" v-if="type==0 && articles.length > 0">
      <ul class="cp-posts-list">
        <article-item class="col-md-6 article-concept" v-for="(articleItem,index) of articles" :key="index" :type="type" :articleItem="articleItem" />
      </ul>
    </div>
    <div class="cp-news-isotope" v-if="type==1 && articles.length > 0 ">
      <div class="isotope items">
        <article-item v-for="(articleItem,index) of articles" :key="index" :type="type" :articleItem="articleItem" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['type', 'articles'],
  data() {
    return {
      articleAs : []
    }
  },
  mounted () {
    $(window).on("load", function() {
      var $container = $('.cp-news-isotope .isotope')
      if (this.articles) {
        if ($container.length  && this.articles.length > 0) {
          $container.isotope({
            itemSelector: '.item',
            transitionDuration: '0.6s',
            masonry: {
                columnWidth: $container.width() / 12
            },
            layoutMode: 'masonry'
          })
          $(window).resize(function() {
            $container.isotope({
              masonry: {
                columnWidth: $container.width() / 12
              }
            })
          })
        }
      }
    })
    if ($('.cp-home2-slider').length) {
      $('.cp-home2-slider').bxSlider({
        auto: true,
        pager: true,
        controls:false,
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.article-concept {
  .cp-thumb {
    height: 300px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .cp-post {
    height: 523px;
  } 
}

</style>
