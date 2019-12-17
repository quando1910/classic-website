<template>
  <div class="picture">
    <div class="cp-middle-banner">
      <ul class="list-type-picture">
        <router-link :to="{ name: 'Gallery', query: {title: 'Portrait', 'type': 1 }}">
          <li class="col-1 item-1 js-item" @click="changeStyleCover">
            <figure class="banner-item">
              <img src="../assets/images/pic-4.jpg" alt="">
              <figcaption>
                <ul class="cp-post-meta">
                  <li><a href="#">1 months ago</a></li>
                  <li><a href="#">Travel</a></li>
                </ul>
                <h3>Portrait</h3>
              </figcaption>
            </figure>
          </li>
        </router-link>
        <router-link :to="{ name: 'Gallery', query: {title: 'Night Shooting', 'type': 2 }}">
          <li class="col-2 item-2 js-item" @click="changeStyleCover">
            <figure class="banner-item">
              <img src="../assets/images/pic-2.jpg" alt="">
              <figcaption>
                <ul class="cp-post-meta">
                  <li><a href="#">2 months ago</a></li>
                  <li><a href="#">Life</a></li>
                </ul>
                <h3>Night Shooting</h3>
              </figcaption>
            </figure>
          </li>
        </router-link>
        <router-link :to="{ name: 'Gallery', query: {title: 'Typography', 'type': 3 }}">
          <li class="col-3 item-3 js-item" @click="changeStyleCover">
            <figure class="banner-item">
              <img src="../assets/images/pic-1.jpg" alt="">
              <figcaption>
                <ul class="cp-post-meta">
                  <li><a href="#">3 months ago</a></li>
                  <li><a href="#">Feshion</a></li>
                </ul>
                <h3>Typography</h3>
              </figcaption>
            </figure>
          </li>
        </router-link>
        <router-link :to="{ name: 'Gallery', query: {title: 'Flycam', 'type': 4 }}">
          <li class="col-1 item-4 js-item" @click="changeStyleCover">
            <figure class="banner-item">
              <img src="../assets/images/pic-3.jpg" alt="">
              <figcaption>
                <ul class="cp-post-meta">
                  <li><a href="#">4 months ago</a></li>
                  <li><a href="#">Food</a></li>
                </ul>
                <h3>Flycam</h3>
              </figcaption>
            </figure>
          </li>
        </router-link>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Pictures',
  data () {
    return {
    }
  },
  mounted() {
    console.log(this.$route.path)
  },
  methods: {
    changeStyleCover(el) {
      $('.js-item').addClass('item-type')
      $(el.currentTarget).addClass('active')
      $(el.currentTarget).removeClass('item-type')
    }
  },
  beforeRouteEnter(to,from, next) {
    $('.js-item').removeClass('item-type')
    next()
  }
}
</script>
