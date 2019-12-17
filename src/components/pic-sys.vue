<template>
  <div id="cp-content-wrap" class="page404 cp-login-page">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="cp-login-box align-center">
            <h3>GET YOUR PICTURE</h3>
            <form>
              <ul>
                <li>
                  <input type="text" class="form-control"  v-model=code placeholder="Gõ mã code của lớp ">
                </li>
                <li class="cp-login-buttons">
                  <router-link :to="{name: 'PicCode', params: {code: code}}">
                    <button type="submit" :disabled="!code" style="margin-bottom: 10px">Tìm kiếm</button>
                  </router-link>
                  <p>Xem lại hợp đồng để lấy được mã code của lớp</p>
                  <p>Mã code là công cụ bảo mật vì thế quý khách hàng vui lòng giữ kĩ</p>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as types from '../store/types'
export default {
  name: 'PicSys',
  data () {
    return {
      code: null
    }
  },
  created () {
    
  }
}
</script>
<style>
button:disabled,
button[disabled]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
</style>
