<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont">&#xe624;</div>
    </div>
    <div class="header-input">
      <input type="text"
             placeholder="请输入 城市/景点/主题"
             class="input-class"
             v-model="inputvalue"
      />
      <span
        class="iconfont sousuo"
        @click="handleClickTitle"
       >&#xe632;</span>
    </div>

    <router-link to="/city">
      <div class="header-right">
        {{this.currentCity}}
        <span class="iconfont">&#xe600;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name:"HomeHeader", //组件命名
    props:{

    },
    data (){
      return{
        inputvalue:'',
      }
    },
    methods:{
      handleClickTitle(){
        alert("没有查到数据,请重新输入");
        this.inputvalue='';
      }
    },
    computed:{
      ...mapState(
        {currentCity:'city'}
        )
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>
  @import '~styles/varibes.styl'
  /*1rem=50px*/
  .header
    display :flex
    line-heigth:$headerHeight
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
      text-align :center
      padding-left :0.1rem
      .input-class
        text-align :center
        padding-left :0.6rem
        margin-top :-0.16rem
      .sousuo
        line-height :0.76rem
        font-size :0.4rem
        padding-left :0.8rem
    .header-right
      margin-top :0.35rem
      width :1.24rem
      float :right
      color :#fff
      text-align center

</style>
