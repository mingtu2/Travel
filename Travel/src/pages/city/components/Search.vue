<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="请输入城市名或拼音">
    </div>
    <div class="search-content" ref="search"  v-show="keyword">
      <ul>
        <li class="search-item border-bottom"
            v-for="item of list"
            :key="item.id"
            @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有您要查找的数据
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Bscroll from 'better-scroll'
  import {mapMutations} from 'vuex'
  export default {
    name:'CitySearch',
    props:{
      cities:Object,
    },
    data (){
      return{
        keyword:'',
        list:[],
        timer:null,
      }

    },
    methods:{
      handleCityClick:function (city) {
        //派发事件
        // this.$store.dispatch('changeCity',city);
       // this.$store.commit('changeCity',city);
        this.changeCity(city);
        this.$router.push("/");
      },
      ...mapMutations(['changeCity'])
    },
    watch:{
      keyword (){
        if(this.timer){
          clearTimeout(this.timer);
        }
        //当关键字为空时,清空列表
        if(!this.keyword){
          this.list=[];
          return;
        }
        this.timer=setTimeout(()=>{
          var result=[];
          for (let i in this.cities) {
            this.cities[i].forEach((value)=>{
              if(value.spell.indexOf(this.keyword)>-1 ||
                 value.name.indexOf(this.keyword)>-1){
                 result.push(value);
              }
            })
          }
         this.list=result;
        },100)
      }
    },
    computed:{
      //当没有数据时,显示数据为空
      hasNoData(){
        return !this.list.length;
      }
    },
    mounted (){
      this.scroll=new Bscroll(this.$refs.search);
    }
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
  .search-content
    overflow :hidden
    z-index :1
    background :#eee
    position :absolute
    top:2.9rem
    left:0
    right:0
    bottom:0
    text-align :left
    .search-item
      line-height :0.62rem
      padding-left :0.2rem
      background :#fff
      color :#666

</style>
