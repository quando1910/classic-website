<template>
  <div>
    <div class="widget tags-widget">
      <div class="widget-content">
        <ul>
          <li> 
            <a href="" v-for="(item, index) of tags.split(',')" :key="index"> {{item}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tags'],
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
