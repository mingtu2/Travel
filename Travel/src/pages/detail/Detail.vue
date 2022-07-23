<template>
  <div>
    <detail-banner :sightName="sightName"
                   :bannerImg="bannerImg"
                   :bannerImgs="bannerImgs"
    >
    </detail-banner>
    <detail-header></detail-header>

    <div class="content">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Header'
  import DetailList from './components/List'
  import axios from 'axios'
  export default {
    name:"Detail",
    components:{
      DetailBanner,
      DetailHeader,
      DetailList,
    },
    methods:{
      getDetailInfo (){
       //axios.get("/api/detail.json?id="+this.$router.params.id);
        axios.get("/api/detail.json",{
          params:{
            id:this.$route.params.id
          }
        }).then(this.handleGetData);
       },
      handleGetData(res){
        res=res.data;
        if(res.ret && res.data){
          console.log(res.data);
          res=res.data;
          this.sightName=res.sightName;
          this.bannerImg=res.bannerImg;
          this.bannerImgs=res.bannerImgs;
          this.categoryList=res.categoryList;
        }
      }
    },
    //进入页面就会加载数据
    mounted(){
      this.getDetailInfo();
    },
    data (){
      return{
        sightName:'',
        bannerImg:'',
        bannerImgs:[],
        categoryList:[],
      }
    }
  }

</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>
  .content
    height :40rem
</style>
