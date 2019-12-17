<template>
  <div class="pp_overlay1" @click="closeBox">
    <div id="picturebox" :class="{'picture-box': true, 'cover-box': loadHD }">
      <div class="btn-hover btn-control btn-prev" @click="prevImg"><i class="fa fa-angle-left" aria-hidden="true"></i></div>
      <img class="pic-view" @load="loadHdAction">
      <div class="lds-ripple" v-if="loadHD"  ><div></div><div></div></div>
      <div class="action-box">
        <!-- <a class="btn-hover btn-download-facebook pic-facebook" download><i class="fa fa-facebook-official" aria-hidden="true"></i></a> -->
        <a class="btn-hover btn-download pic-download" download><i class="fa fa-download" aria-hidden="true"></i></a>
        <a class="btn-hover btn-hd" @click="turnonHD">
          <img src="../../assets/images/hd-white.svg" v-if="!isHD" alt="hd">
          <img src="../../assets/images/hd.svg" v-if="isHD" alt="hd">
          </a>
      </div>  
      <div class="btn-hover btn-control btn-next" @click="nextImg"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['dataPic'],
  data() {
    return {
      loadHD: false,
      isHD: false
    }
  },
  mounted() {
    $('#picturebox').click(function(event){
      event.stopPropagation()
    });
  },
  methods: {
    closeBox () {
      this.isHD = false
      this.loadHD = false
      this.$emit('closeBox', 1)
    },
    nextImg () {
      this.isHD = false
      this.loadHD = false
      $('#loadingpos').show()
      this.$emit('nextImg', 1)
    },
    prevImg () {
      this.isHD = false
      this.loadHD = false
      $('#loadingpos').show()
      this.$emit('prevImg', 1)
    },
    loadHdAction() {
      this.loadHD = false
    },
    turnonHD () {
      this.loadHD = true
      this.isHD = true
      $('.pic-view').attr('src', this.$options.filters.hdImage(this.dataPic))
    }
  }
}
</script>
<style lang="scss">
.cover-box {
  &:after {
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
  }
}
.action-box {
   position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.pp_overlay1 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: rgba(0,0,0,0.8);
  z-index: 1000;
}
.btn-download {
  // position: absolute;
  // bottom: 0;
  // left: 50%;
  // transform: translateX(-50%);
  float: left;
}
.picture-box {
  width: 70%;
  max-height: 600px;
  position: absolute;
  top: 50%;
  z-index: 2000;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 40px;
  background-color: rgba(255,255,255,0.8);
}
.pic-view {
  width: 100%;
  height: 600px;
  object-fit: contain;
}
.fa-angle-left, .fa-angle-right {
  font-size: 100px;
  color: white;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.fa-download {
  font-size: 40px;
  color: white;
}
.btn-control {
  height: 100%;
}
.btn-next {
  float: right;
  padding-right: 40px;
}
.btn-prev {
  float: left;
}
.btn-hover {
  display: inline-block;
  i:hover {
    color: grey;
    transition: 0.3s;
  }
}
.btn-download-facebook {
  font-size: 30px;
  color: white;
  margin: 0 10px;
}
.btn-hd {
  margin: 0 10px;
  img {
    width: 40px;
  }
}
.lds-ripple {
  z-index: 100;
  position: absolute;
  display: inline-block;
  height: 65px;
  width: 65px;
  left: 50%;
  top: 50%;
  transform: translate(-50%);
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
} 
@keyframes lds-ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}

</style>
