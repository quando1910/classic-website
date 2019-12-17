<template>
  <div>
    <banner v-if="imp" :imp="imp"/>
    <div id="cp-content-wrap" class="cp-content-wrap">
      <div class="container">
        <div class="row"> 
          <div class="col-md-9">
            <article-list v-if="articles.length > 0" :type="0" :articles="articles"/>
          </div>
          <div class="col-md-3">
            <side-bar/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as types from '../store/types'
export default {
  name: 'Concept',
  data() {
    return {
      articles: [],
      kind: null,
      imp: null
    }
  },
  beforeCreate() {
    if (this.$route.path == '/concept') {
      this.kind = 2
    } else if (this.$route.path == '/posing') {
      this.kind = 1
    } else if (this.$route.path == '/ask') {
      this.kind = 3
    } else if (this.$route.path == '/offer') {
      this.kind = 4
    } else if (this.$route.path == '/notice') {
      this.kind = 5
    }
    this.$http.get(types.LIST_ARTICLE, {params: {kind: this.kind}}).then(res => {
      this.articles = res.body
      this.imp = this.articles.filter(x => x.favorite == 1)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
