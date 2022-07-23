<template>
  <div>
    <router-link tag="div"
                 to="/"
                 class="header-abs"
                 v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>

    <div class="header-fixed"
         v-show="!showAbs"
         :style="opacityStyle">
      <router-link  to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
  export default {
    name:"DetailHeader",
    data (){
      return{
        showAbs:true,
        opacityStyle:{
          opacity:0
        }

      }
    },
    methods:{
      handleScoll (){
        var top=document.documentElement.scrollTop;
        if(top>60){
          var opacity=top/140;
          opacity=opacity>1?1:opacity;
          this.opacityStyle={
            opacity
          };
          this.showAbs=false;
        }else {
          this.showAbs=true;
        }

      }
    },
    //绑定事件
    mounted (){
      window.addEventListener('scroll',this.handleScoll)
    },
    //解绑事件
    destroyed (){
      window.removeEventListener('scroll',this.handleScoll)
    }
  }

</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>
    @import "~styles/varibes.styl"
    .header-abs
      position :absolute
      left :0.2rem
      top :1.2rem
      width :0.8rem
      height :0.8rem
      border-radius :0.4rem
      text-align :center
      line-height :0.8rem
      //background :rgba(0,0,0,0.8)
      .header-abs-back
        color: #fff
        font-size :0.5rem
        margin-top :-1rem
    .header-fixed
      z-index: 2
      position: fixed
      top: 0
      left: 0
      right: 0
      height: $headerHeight
      line-height: $headerHeight
      text-align: center
      color: #fff
      background: $bgColor
      font-size: .32rem
      .header-fixed-back
        position: absolute
        top: 0
        left: 0
        width: .64rem
        text-align: center
        font-size: .4rem
        color: #fff
</style>
