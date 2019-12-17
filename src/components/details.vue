<template>
  <div class="article-details">
    <div id="wrapper"> 
      <div id="cp-content-wrap" class="cp-content-wrap" style="margin-top: -80px;" >
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <article-detail v-if="articlesRelated != null" :article ="article" :articlesRelated="articlesRelated"/>
            </div>
            <div class="col-md-3">
              <side-bar/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as types from '../store/types'

export default {
  name: 'Details',
  data () {
    return {
      article: {},
      articlesRelated: null
    }
  },
  created() {
    this.$http.get(`${types.SHOW_DETAIL}/${this.$route.params.id}`).then(res => {
      this.article = res.body
      this.$http.get(types.SHOW_RELATED_DETAIL, {params: {kind: this.article.kind}}).then(res => {
        this.articlesRelated = res.body
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
