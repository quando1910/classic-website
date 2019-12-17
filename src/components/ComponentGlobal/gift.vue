<template>
  <div class="gift">
    <i :class="[icon1, icon2]" :style="{'color': colorArr[Math.floor(Math.random()*colorArr.length)]}" aria-hidden="true"></i>
    <p class="bold-text">{{keyword}}</p>
    <p>{{content}}</p>
  </div>
</template>
<script>
  export default{
    props: ['keyword', 'content', 'icon'],
    data() {
      return {
        colorArr: ['#ffa534', '#fb404b', '#ff9510', '#cc2127', '#248cc9' ,'#4ec6f8'],
        icon1: 'fa',
        icon2: this.icon
      }
    }
  }
</script>
<style scoped>
span {
  font-size: 20px;
  color: black;

}
.gift {
  position: relative;
  height: 50px;
  margin-bottom: 20px;
}
.bold-text {
  font-weight: 700;
  text-transform: uppercase;
}
.fa {
  float: left;
  padding-right: 5px;
  width: 60px;
  height: 60px;
  font-size: 50px;
  text-align: center;
  overflow: hidden;
}
</style>

