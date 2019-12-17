<template>
  <div class="video">
    <div id="cp-content-wrap" class="cp-content-wrap">
      <div class="container">
        <div class="row">
          <ul class="cp-extended-gallery gallery">
            <li class="col-md-6" style="margin-bottom: 20px" v-for="(item,index) of videos" :key="index">
              <figure class="cp-gallery-thumb"> 
                <iframe :src="`https://www.facebook.com/plugins/video.php?href=${item.video}`" width="100%" height="100%" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
              </figure>
              <div class="cp-gallery-content">
                <h3>{{item.title}}</h3>
                <ul class="cp-post-meta">
                  <li><a href="#">{{item.created_at |moment}}</a></li>
                  <li><a href="#">Life</a></li>
                </ul>
                <p>{{item.desc}} </p>
              </div>
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
  name: 'Videos',
  data () {
    return {
      videos: []
    }
  },
  created () {
    this.$http.get(types.VIDEOS).then(res => {
      this.videos = res.body
      this.result = true
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
<style lang="scss">
.cp-gallery-thumb {
  width: 555px;
  height: 300px;
}
</style>

