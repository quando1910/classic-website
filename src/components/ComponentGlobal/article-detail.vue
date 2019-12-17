<template>
  <div class="cp-posts-style-1" v-if="article">
    <ul class="cp-posts-list cp-post-details">
      <li class="cp-post">
        <div class="cp-thumb">
          <ul class="cp-post-slider">
            <li v-if="article.images.length > 0" v-for="(item, index) of article.images" :key="index">
              <img class="detail-img" :src="item.name.url | takeImage" alt="Neo"/>
            </li>
          </ul>
        </div>
        <div class="cp-post-base">
          <div class="cp-post-content">
            <h2>{{article.title}}</h2>
            <tag :tags="article.key"/>
            <ul class="cp-post-meta">
              <li><a href="#">{{article.created_at |moment}}</a></li>
              <li><a href="#"><i class="fa fa-comment-o"></i> 2 Comments</a></li>
            </ul>
            <div class="fb-like" :data-href="url" data-layout="standard" data-action="like" data-size="large" data-show-faces="false" data-share="true"></div>
            <hr>
            <p>{{article.description}}</p>
            <p id="myDiv"></p>
            <hr>
          </div>
          <div class="cp-related-posts">
            <div class="fb-like" :data-href="url" data-layout="standard" data-action="like" data-size="large" data-show-faces="false" data-share="true"></div>
            <h4>You May Also Like</h4>
            <ul class="cp-posts">
              <li class="cp-post" v-for="(item, index) of articlesRelated" :key="index">
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
          <div class="cp-post-comments-form">
            <div class="row">
              <h4>Leave a Comment</h4>
              <div class="fb-comments"  v-if="url"  :data-href="url" data-numposts="10"></div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  props: ['article', 'articlesRelated'],
  data () {
    return {
      url : null
    }
  },
  created() {
    this.url = window.location.href
  },
  mounted() {
    if ($('.cp-post-slider').length) {
      $('.cp-post-slider').bxSlider({
        infiniteLoop: true,
        auto: true,
        hideControlOnEnd: true
      });
    }
    if (this.article.content) {
      var div = document.getElementById('myDiv')
      $('#myDiv').html(this.article.content)
      $("#myDiv p:has(img) img").each(function(){
        let srcChange= Vue.options.filters.takeImage($(this).attr('src'))
        $(this).attr('src', srcChange)
        $("p:has(img)").css({textAlign: "center"});
      })
    }
  },
  updated() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.detail-img{
  max-height: 564px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cp-thumb-r {
  height: 200px;
  overflow: hidden;
}
.cp-related-posts {
  h4 {
    margin: 20px 0;
  }
}
.fit-image-details {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>


