<template>
  <div class="decor" v-if="products.length > 0">
    <showroom :products="products" :info="info"></showroom>
  </div>
</template>

<script>
import * as types from '../store/types'
import Showroom from './showroom'
export default {
  data () {
    return {
      products: [],
      info: {
        title: 'Trang Trí',
        desc: 'Mỗi sản phẩm thiết kế cho các bạn, chúng tôi đều đặt hết tâm sức và tính thẩm mỹ vào đấy'
      }
    }
  },
  components: {
    'showroom': Showroom
  },
  created() {
    this.$http.get(types.LIST_PRODUCTS, {params: {kind: this.$route.query.type}}).then(res => {
      this.products = res.body
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
