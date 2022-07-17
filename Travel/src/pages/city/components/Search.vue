<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="请输入城市名或拼音">
  </div>
</template>
<script>
  export default {
    name:'CitySearch'
  }
</script>
<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>
  @import "~styles/varibes.styl"
  .search
    height :0.72rem
    padding :0.1rem
    background :$bgcolor
    .search-input
      width :100%
      height :0.62rem
      line-height :0.62rem
      text-align :center
      border-radius :0.06rem
      padding :0.1rem
      box-sizing :border-box
      color :#666
</style>
