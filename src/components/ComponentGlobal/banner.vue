<template>
  <div class="banner" v-if="imp">
    <div id="cp-banner-style-1" class="cp-homev2-slider">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ul id="cp-banner-1">
              <li class="banner-item-cover" v-for="(item, index) of imp" :key="index"> <img class="banner-img-cover" :src="item.images[0].name.url | takeImage" alt="img">
                <div class="caption">
                  <div class="container">
                    <div class="holder">
                      <ul>
                        <li>{{item.created_at | moment}}</li>
                        <li>Travel</li>
                      </ul>
                      <h1>{{item.title |limit_description}}</h1>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['imp'],
    mounted() {
      if ($('#cp-banner-1').length) {
        $('#cp-banner-1').bxSlider({
          infiniteLoop: true,
          auto: true,
          hideControlOnEnd: true
        });
      }
    }
  }
</script>
<style>
.banner-img-cover {
  height: 100%;
  object-fit: cover;
}
.banner-item-cover {
  height: 400px;
  overflow: hidden;
}
</style>
