<template>
  <div id="wrapper"> 
    <div id="cp-content-wrap" class="cp-content-wrap" style="margin-top: -80px;" >
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <el-form class="contract">
        <div class="center-head">
          <h2>HỢP ĐỒNG ĐIỆN TỬ</h2>
          <h5>eBillings</h5>
          <div class="header__logo"><a href="/home"><img src="/img/logo.png" style="width: 150px;" alt=""/></a></div>
          <h5>Mã code hoá đơn:  <b style="text-transform: uppercase"> {{contract.code}} </b></h5>
          <h5>Tình trạng:
            <!-- <% if @contract.paid %> 
              <b style="text-transform: uppercase; color: green">Đã thanh toán </b>
            <% else %>
              <b style="text-transform: uppercase; color: red">Chưa thanh toán</b>
            <% end %> -->
          </h5>
          <h5>Ảnh:
            <!-- <% if @contract.photoshop %> 
              <b style="text-transform: uppercase; color: green">Đã giao</b>
              <% linkImage = '/viewers/' + @contract.code.to_s %>
              <a class="btn" href="<%= linkImage %>">link ảnh</a>
            <% else %>
              <b style="text-transform: uppercase; color: red">Chưa giao</b>
            <% end %> -->
          </h5>
          <a class="btn" href="#">Cập nhật</a>
        </div>
        <hr>
        <div class="row">
          <div class="col-md-6 center-head">
            <h4>Bên A</h4>
            <label>Họ và Tên: </label><b>Đỗ Hồng Quân</b><br>
            <label>Đơn vị: </label><b>The Classic Studio</b><br>
            <label>Địa chỉ: </label><b>43 Tống Phước Phổ, Đà Nẵng</b><br>
            <label>SĐT: </label><b>01223420210</b><br>
          </div>
          <div class="col-md-6 center-head">
            <h4>Bên B</h4>
            <label>Họ và Tên: </label><b>{{contract.representative}}</b><br>
            <label>Đại diện của: </label><b>{{contract.group}} - {{contract.client}}</b><br>
            <label>SĐT: </label>
            <b><a :href="`tel: ${contract.phone1}`">{{contract.phone1}}</a></b> -
            <b><a :href="`tel: ${contract.phone2}`">{{contract.phone2}}</a></b><br>
            <label>Số lượng thành viên: </label><b> {{ contract.numerator }}</b><br>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-md-6">
            <div style="padding-left: 3rem;">
              <h3 class="center-head">Nội dung hợp đồng</h3>
                <el-form-item label="Ngày quay chụp:">
                  <b v-for="(item, index) of contract.taken_dates" :key="index">+ {{item.start_time }}<br></b>
                </el-form-item>
                <el-form-item label="Các gói dịch vụ:">
                  <b> {{contract.deposit}}</b>
                </el-form-item>
                <el-form-item label="Lưu ý:">
                  <b> {{contract.deposit}}</b>
                </el-form-item>
                <el-form-item label="Tổng tiền tạm tính:">
                  <b> {{contract.deposit}}</b>
                </el-form-item>
                <el-form-item label="Đã đặt cọc:">
                  <b> {{contract.deposit}}</b>
                </el-form-item>
                <a>Xem hóa đơn đầy đủ tại đây</a>
          </div>
          </div>
          <div class="col-md-6 center-head">
            <h3>Kịch bản ngày chụp</h3>
            <table>
              <tr>
                <th>Thời gian</th>
                <th>Trang phục</th>
                <th>Địa điểm</th>
                <th>Lớp cần chuẩn bị</th>
              </tr>
              <% @contract.contract_plans.each do |plan|%>
              <tr>
                <td> plan.quater %></td>
                <td> plan.costume %></td>
                <td> plan.place %></td>
                <td><%= plan.prepare %></td>
              </tr>
              <% end %>
            </table>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-md-6">
            <div class="center-head" style="padding-left: 3rem;">
              <h3>Chữ ký bên A</h3>
              <img src="/img/sign.png" style="width: 300px">
            </div>
          </div>
          <div class="col-md-6 center-head">
            <h3>Chữ ký bên B</h3>
            <img src="<%= @contract.sign %>" style="width: 300px">
          </div>
        </div>
        <hr>
        <div class="center-head">
          <h3>Thông tin thợ chụp và quay</h3>
          <ul>
            <% @ctr_photo.each do |ctr|%>
              <li class="photo-item">
                <div>
                  <img src="<%=ctr.photographer.avatar%>" class="ava">
                  <div>
                    <label>Họ và Tên: </label><b><%= ctr.photographer.name %></b><br>
                    <label>Vai trò: </label><b><%= ctr.photographer.role%></b><br>
                    <label>SĐT: </label><b><%= ctr.photographer.phone%></b><br>
                  </div>
                </div>
              </li>
            <% end %>
          </ul>
        </div>
        <hr>
        <h3 class="center-head">Các điều khoản cơ bản</h3>
          <div class="col-lg-4">
              <div class="contact">
                <h5 class="contact__title">Lợi ích cho gói chụp cơ bản</h5>
                <p>★ Thời gian chụp từ <b>8h - 17h</b></p>
                <p>★ Không giới hạn ảnh chụp.</p>
                <p>★ Dời lịch chụp nếu trời mưa.</p>
                <p>★ Không giới hạn địa điểm chụp.</p>
                <p>★ Edit photoshop 100% ảnh gốc.</p>
                <p>★ Design ảnh bìa và lên layout.</p>
                <p>★ Ekip nhiệt tình và thường xuyên cập nhật xu hướng mới.</p>
                <p>★ Khâu chuẩn bị và lên KỊCH BẢN chuyên nghiệp giữa 2 bên.</p>
                <p>★ Được hỗ trợ giá từ các tiệm thuê đồ trên toàn Đà Nẵng.</p>
                <p>★ Mỗi bộ ảnh, chúng tôi đều nắm bắt những KHOẢNH KHẮC nhỏ nhất.</p>
              </div><!-- End / contact -->
            </div>
            <div class="col-lg-4">
              <div class="contact">
                <h5 class="contact__title">Lợi ích mở rộng gói chụp</h5>
                <h5>- Gói chụp đêm</h5>
                <p>★ Thời gian chụp từ <b>18h - 20h30</b></p>
                <p>★ Team sẽ <b>chuẩn bị máy nổ</b> (ở những nơi ko có điện).</p>
                <p>★ Team sẽ <b>chuẩn bị đèn dây tóc trang trí</b>.</p>
                <p>★ Team có rất nhiều <b>kinh nghiệm trong việc hỗ trợ setup khung cảnh.</b></p>
                <p>★ Team có thể <b>kiểm soát ánh sáng nhân tạo.</b></p>
                <h5>- Gói chụp phát sinh thêm ngày hoặc khung giờ không thuộc 8h-20h30</h5>
                <p>★ Liên hệ để biết thêm chi tiết</p>
              </div><!-- End / contact -->
            </div>
            <div class="col-lg-4">
              <div class="contact">
                <h5 class="contact__title">Lợi ích cho gói video</h5>
                <h5>- Tất cả gói video đều:</h5>
                <p>★ <b>Giao toàn bộ source gốc</b></p>
                <p>★ Quay xuyên suốt trong quá trình chụp.</p>
                <p>★ Đảm bảo <b>màu sắc cinematic.</b></p>
                <br>
                <h5>- Confession Video </h5>
                là video lưu lại toàn bộ nội dung của buổi trò chuyện từ các thành viên trong lớp như một chương trình trực tiếp.
                <br>
                <br><h5>- Highlight Video </h5>
                là video nắm bắt những khoảnh khắc, cảm xúc trong ngày chụp. Được xây dựng như dạng MV.
                <p>★ Độ dài từ <b>3-5 phút.</b></p>
                <br>
                <h5>- Story Video</h5>
                là video có kịch bản với những tình huống gây cười và các thành viên trong lớp là người diễn xuất.
                <p>★ Độ dài từ <b>7-10 phút.</b></p>
              </div><!-- End / contact -->
            </div>
              <div class="col-lg-4">
              <div class="contact">
                <h5 class="contact__title">Lợi ích cho gói chụp event - team building</h5>
                <p>★ Chụp xuyên suốt thời gian diễn ra event.</b></p>
                <p>★ Không giới hạn ảnh chụp.</p>
                <p>★ Edit photoshop 100% ảnh gốc.</p>
                <p>★ Design ảnh bìa.</p>
                <p>★ Ekip nhiệt tình và thường xuyên cập nhật xu hướng mới.</p>
                <p>★ Khâu chuẩn bị và lên KỊCH BẢN chuyên nghiệp giữa 2 bên.</p>
                <p>★ Mỗi bộ ảnh, chúng tôi đều nắm bắt những KHOẢNH KHẮC nhỏ nhất.</p>
              </div><!-- End / contact -->
            </div>
            <div class="col-lg-4">
              <div class="contact">
                <h5 class="contact__title">Lợi ích cho gói quay event - team building</h5>
                <p>★ <b>Clip sản phẩm dài 5p trở lên</b></p>
                <p>★ Quay xuyên suốt trong quá trình diễn ra sự kiện - team building.</p>
                <p>★ Đảm bảo đầy đủ nội dung chương trình.</p>
                <p>★ Đảm bảo các kỹ thuật quay phim chuyên nghiệp.</p>
                <p>★ Đảm bảo <b>màu sắc cinematic, chất lượng và độ nét đạt chuẩn Full HD 1920x1080.</b></p>
                <p>★ Nắm bắt những KHOẢNH KHẮC nhỏ nhất, chân thật nhất.</b></p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="contact">
                <h5 class="contact__title">Lợi ích cho gói flycam</h5>
                <p>★ Quay và chụp theo yêu cầu đã thoả thuận trong kịch bản</p>
                <p>★ Đảm bảo các cảnh quay toàn cảnh chương trình, và những đội hình đặc biệt.</p>
                <p>★ Đảm bảo chất lượng clip flycam đạt chuẩn FUll HD 1920x1080</p>
                <p>★ Đảm bảo chất lượng kỹ thuật bay flycam</p>
              </div><!-- End / contact -->
            </div>
      </el-form>
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
  name: 'Contract',
  data() {
    return {
      contract: null
    }
  },
  created () {
    this.$http.get(`${process.env.SERVER_IP2}/api/contracts/${this.$route.params.token}/${this.$route.params.id}`).then(res => {
      this.contract = res.body
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.contract {
  h3 {
    text-transform: uppercase;
    padding: 1rem 0;
    text-decoration: underline;
  }
  label, b, table{
    font-size: 1.4rem;
  }
  label {
    padding-right: 1rem;
  }
  .ava {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  table,tr,td {
    border: 1px black solid;
  }
}
.center-head {
  text-align: center;
}
</style>
