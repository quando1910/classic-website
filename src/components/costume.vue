<template>
  <div v-if="articles.length != 0">
    <banner v-if="imp" :imp="imp"/>
    <div id="cp-content-wrap" class="cp-content-wrap">
      <div class="container">
        <div class="row"> 
          <article-list :type="1" :articles="articles"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as types from '../store/types'
export default {
  name: 'Costume',
  data () {
    return {
      articles: [],
      imp: null
    }
  },
  created () {
    this.$http.get(types.LIST_ARTICLE, {params: {kind: 0}}).then(res => {
      this.articles = res.body
      this.imp = this.articles.filter(x => x.favorite == 1)
    })
  },
  mounted () {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
