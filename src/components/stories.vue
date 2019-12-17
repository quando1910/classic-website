<template>
  <div class="stories" v-if="stories">
    <div id="cp-content-wrap" class="cp-content-wrap" style="padding-top: 0">
      <div class="container">
        <div class="row">
          <div class="cp-heading-holder col-md-3 col-sm-6">
            <div class="align-center">
              <h3 class="title-price">Câu chuyện của lớp</h3>
              <p>Mỗi bộ hình kỉ yếu là một câu chuyện riêng</p>
            </div>
          </div>
          <ul class="cp-extended-gallery gallery">
            <li class="col-md-4" v-for="(item,index) of stories" :key="index">
              <router-link :to="{name: 'StoryDetail', params:{id: item.id}}" tag="a">
                <figure> 
                  <progressive-img class="product-photo" alt="img02" :src="item.cover.url | takeImage"/>
                </figure>
                <div class="cp-gallery-content">
                  <h3>{{item.title}}</h3>
                  <ul class="cp-post-meta">
                    <li><a href="#">{{item.created_at |moment}}</a></li>
                    <li><a href="#">Life</a></li>
                  </ul>
                  <p>{{item.desc}} </p>
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
import * as types from '../store/types'
export default {
  name: 'Stories',
  data () {
    return {
      stories: null
    }
  },
  created () {
    this.$http.get(types.STORIES).then(res => {
      this.stories = res.body
    })
  },
  updated() {
    if ($('.gallery').length) {
      $("area[data-rel^='prettyPhoto']").prettyPhoto();
      $(".gallery:first a[data-rel^='prettyPhoto']").prettyPhoto({
        animation_speed:'normal',
        theme:'light_square',
        slideshow:3000, 
        autoplay_slideshow: false
      });
    }
  }
}
</script>
