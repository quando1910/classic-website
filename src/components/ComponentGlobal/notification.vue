<template>
  <div class="notification">
    <i class="fa fa-times" aria-hidden="true" @click="stopInterval"></i>
    <router-link :to="{name: 'Detail', params: {id: noti.id} }">
      <div class="row">
        <div class="box-img-noti" style="width: 129px">
          <img class="noti-img" :src="noti.image.url |takeImage">
        </div>
        <div class="col-md-7 noti-meta">
          <h6 class="noti-title">{{noti.title}}</h6>
          <p class="noti-desc">{{noti.description}}</p><br>
          <a>Click để xem</a>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
  export default{
    props: ['noti'],
    methods: {
      stopInterval () {
        this.$emit('inter')
      }
    }
  }
</script>
<style lang="scss" scoped>
.notification {
  .fa-times {
    position: absolute;
    top: 0;
    font-size: 20px;
    right: 5px;
    padding: 10px;
    z-index: 1500;
  }
}
</style>

