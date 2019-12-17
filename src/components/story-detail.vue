<template>
  <div class="article-details" v-if="story">
    <showroom :products="this.story.photos" :info="info"/>
  </div>
</template>

<script>
import * as types from '../store/types'
import Showroom from './showroom'

export default {
  name: 'StoryDetail',
  components: {
    'showroom': Showroom
  },
  data () {
    return {
      story: null,
      info: {
        title: null,
        desc: null
      }
    }
  },
  created() {
   this.$http.get(`${types.STORIES}/${this.$route.params.id}`).then(res => {
      this.story = res.body
      console.log(this.story)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
