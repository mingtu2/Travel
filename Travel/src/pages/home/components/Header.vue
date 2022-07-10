<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/主题/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont">&#xe600;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:"HomeHeader" //组件命名
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>
  @import '~styles/varibes.styl'
  /*1rem=50px*/
  .header
    display :flex
    line-heigth:0.76rem
    background: $bgcolor
    color :#fff
    .header-left
      margin-top :0.35rem
      width :0.64rem
      float :left
      .back-icon
        text-align:center
        font-size :0.4rem
    .header-input
      flex :1
      height :0.76rem
      line-height :0.76rem
      margin-top :0.1rem
      margin-bottom :0.1rem
      //margin-left :0.2rem
      background :#fff
      border-radius :0.1rem
      color :#ccc
      padding-left :0.1rem
    .header-right
      margin-top :0.35rem
      width :1.24rem
      float :right
      text-align center
</style>
