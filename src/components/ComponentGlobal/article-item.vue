<template>
  <div>
    <router-link :to="{path: `${articleItem.id}`}" append>
      <li class="cp-post cp-photoset-post" v-if="type == 0 && articleItem.images.length !== 0">
        <div class="cp-thumb"> 
          <img :src="articleItem.images[0].name.url |takeImage" alt="neo">
          <div class="cp-post-hover"> 
            <a href="#"><i class="fa fa-link"></i></a> 
            <a href="#"><i class="fa fa-search"></i></a> 
          </div>
        </div>
        <div class="cp-post-base">
          <div class="cp-post-content">
            <h2>{{articleItem.title}}</h2>
            <ul class="cp-post-meta">
              <li><a href="#">1 months ago</a></li>
              <li><a href="#">Travel</a></li>
            </ul>
            <a href="single-post.html" class="read-more">Read More</a> <a href="#" class="leave-comment"><i class="fa fa-comment-o"></i> Leave a Comment</a> </div>
        </div>
      </li>

      <li class="cp-post cp-quote-post" v-if="type == 0 && articleItem.images.length == 0">
        <div class="cp-post-base">
          <div class="cp-post-content">
            <ul class="cp-post-meta">
              <li><a href="#">20 days ago</a></li>
              <li><a href="#">Music</a></li>
            </ul>
            <blockquote>{{articleItem.title}}</blockquote>
            <a href="single-post.html" class="read-more">Read More</a> <a href="#" class="leave-comment"><i class="fa fa-comment-o"></i> Leave a Comment</a> </div>
        </div>
      </li>

      <div class="item cp-post col-md-4" v-if="type == 1 && articleItem.title!== ''">
        <figure v-if="articleItem.images.length > 0" class="cp-thumb">
          <img :src="articleItem.images[1].name.url |takeImage"/>
          <!-- <ul v-if="articleItem.images.length !== 1" class="cp-home2-slider">
            <li v-for="(item, index) of articleItem.images" :key="index">
              <img :src="item.name.url |takeImage" alt="">
            </li>
          </ul> -->
        </figure>
        <div class="cp-post-content">
          <h3>{{articleItem.title}}</h3>
          <ul class="cp-post-meta">
            <li><a href="#">1 months ag123123o</a></li>
            <li><a href="#">Travel</a></li>
          </ul>
          <p>{{articleItem.desc}}</p>
          <a class="read-more" href="single-post.html">Read More</a> <a class="leave-comment" href="#"><i class="fa fa-comment-o"></i> Leave a Comment</a> </div>
      </div>
      
      <div class="item cp-post col-md-4" v-if="type == 1 && articleItem.title== ''">
        <blockquote>
        <figure class="cp-thumb"><img v-if="articleItem.images.length > 0" :src="articleItem.images[0].name.url |takeImage" alt=""></figure>
        <div class="cp-post-content">
            <p>{{articleItem.desc}}</p>
          <ul class="cp-post-meta">
              <li><a href="#">1 months ag1312o</a></li>
              <li><a href="#">Travel</a></li>
            </ul>
            <a class="leave-comment" href="#"><i class="fa fa-comment-o"></i> Leave a Comment</a> </div>
        </blockquote>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['articleItem', 'type'],
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
