<template>
  <figure class="cp-list-item">
    <img class="figure-img" :src="figure.cover" alt="">
    <figcaption>
      <ul class="cp-post-meta">
        <li><a href="#">{{figure.timeBefore}}</a></li>
        <li><a href="#">{{figure.type}}</a></li>
      </ul>
      <h3>{{figure.topic}}</h3>
    </figcaption>
  </figure>
</template>
<script>
  export default{
    props: ['figure']
  }
</script>
<style scoped>

.figure-img {
  height: 100%;
}
</style>

