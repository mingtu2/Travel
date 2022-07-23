<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img :src="bannerImg" class="banner-img"/>
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe6eb;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary
        :imgs="bannerImgs"
        v-show="showGallary"
        @change="handleGallaryClose"
      >
      </common-gallary>
    </fade-animation>
  </div>
</template>

<script>
  import CommonGallary from 'common/gallary/Gallary'
  import FadeAnimation from 'common/fade/FadeAnimation'
  export default {
    name:"DetailBanner",
    props:{
      sightName:String,
      bannerImg:String,
      bannerImgs:Array,
    },
    data (){
      return {
        showGallary:false,
      }
    },
    methods: {
      handleBannerClick (){
       this.showGallary=true;

      },
      handleGallaryClose (){
       this.showGallary=false;

      }
    },
    components:{
      CommonGallary,
      FadeAnimation
    }
  }

</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>
  .banner
    position :relative
    overflow :hidden
    height :0
    padding-bottom :55%
    .banner-img
      width :100%
    .banner-info
      display :flex
      position :absolute
      left :0
      right :0
      bottom :0
      line-height :0.6rem
      color :#fff
      background-image :linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
        flex :1
        font-size :0.32rem
        padding :0.2rem
      .banner-number
        height :0.42rem
        line-height :0.42rem
        margin-top :0.3rem
        padding :0 0.4rem
        border-radius :0.2rem
        background :rgba(0,0,0,0.8)
        font-size :0.32rem
        text-align :center
        .banner-icon
          font-size: 0.32rem
</style>
