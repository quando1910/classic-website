<template>
  <div class="showroom" v-if="products.length > 0 && cover!=null">
    <div :class="et === false ? 'col-md-9 viewer' : 'col-md-12 viewer'" :style="{'background-image': `url(${convertURL(cover.photo.url)})`}">
      <div class="actions">
        <i class="fa fa-angle-left" @click="prevPic()" v-if="pos > 0"></i>
        <i class="fa fa-angle-right" @click="nextPic()" v-if="pos < this.products.length -1"></i>
      </div>
      <i class="fa icon-close fa-external-link" @click="extendWindow"></i>
    </div>
    <transition name="slide-fade">
      <div v-if="et == false" class="col-md-3 bg-white">
        <header class="show-header">
          <a href="/">Go to Classic Website</a>
          <h1>{{info.title}}</h1>
          <p>{{info.desc}}</p>
        </header>
        <section class="thumbnails">
          <article v-for="(item,index) of products" :key="index" @click="changeCover(item, index)">
            <div class="thumbnail" data-position="left center" :style="{'background-image': `url(${convertURL(item.photo.url)})`}">
            </div>
          </article>
        </section>
        <footer id="footer">
          <span>&copy; The Classic Studio</span>
        </footer>
      </div>
    </transition>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  props: ['products', 'info'],
  name: "Showroom",
  data() {
    return {
      et: false,
      pos: 0,
      cover: null
    };
  },
  mounted() {
    if(this.products.length > 0) {
      this.cover = this.products[0]
    }
  },
  methods: {
    convertURL (url) {
      return Vue.options.filters.takeImage(url)
    },
    extendWindow (el) {
      this.et = !this.et
      if (el.target.classList.contains('fa-external-link')) {
        el.target.classList.remove('fa-external-link')
        el.target.classList.add('fa-compress')
      } else {
        el.target.classList.add('fa-external-link')
        el.target.classList.remove('fa-compress')
      }
    },
    changeCover(item, index) {
      this.cover = item
      this.pos = index
    },
    nextPic() {
      this.cover = this.products[++this.pos]
    },
    prevPic() {
      this.cover = this.products[--this.pos]
    }
  }
};
</script>
<style lang="scss" scoped>
.show-header {
  text-align: right;
}
.bg-white {
  background-color: white;
  padding: 10px 20px;
  overflow: hidden;
  right: 0;
  height: 100vh;
}
.thumbnails {
  overflow: scroll;
  height: 70vh;
  article {
    width: 50%;
    float: left;
  }
  .thumbnail {
    padding: 0;
    height: 15vh;
    background-size: cover;
    background-repeat: no-repeat; 
    background-position: center; 
    margin-bottom: 0;
  }
}
.viewer {
  z-index: 1000;
  position: relative;
  padding: 0;
  transition: 0.5s;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center; 
  .large-view {
    width: 100%;
  }
}
.fa {
  color: white;
  &:hover {
    color: #6d3b3b;
    transition: all 0.5s ease;
  }
}
.actions {
  width: 100%;
  padding: 0 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  .fa-angle-left {
    float: left;
    font-size: 100px;
  }
  .fa-angle-right {
    float: right;
    font-size: 100px;
  }
}
.icon-close  {
  position: absolute;
  font-size: 50px;
  right: 10px;
  top: 10px;
}
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(300px);
  opacity: 0;
}
.col-md-12 {
  height: 100vh;
}
</style>
