<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>
<script>
  export default {
    name:'CityHeader'
  }
</script>
<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>
  @import "~styles/varibes.styl"
    .header
      position :relative
      overflow :hidden
      height :$headerHeight
      line-height :$headerHeight
      text-align :center
      color :#fff
      background :$bgcolor
      font-size :0.32rem
      .header-back
        position :absolute
        top:0
        left :0
        width :0.64rem
        text-align content
        font-size :0.4rem
        color :#fff
</style>
