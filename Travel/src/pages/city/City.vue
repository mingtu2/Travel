<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange">

    </city-alphabet>
  </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
  export default {
    name:'City',
    components:{
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet,
    },
    data (){
      return{
        cities:{},
        hotCities:[],
        letter:'',
      }
    },
    methods:{
      //axios 远程请求数据
      getCityInfo(){
        axios.get("/api/city.json").then(this.handlerGetCityInfoSource);
      },
      handlerGetCityInfoSource(resp){
        resp=resp.data;
        if(resp.ret &&resp.data){
          resp=resp.data;
          this.hotCities=resp.hotCities;
          this.cities=resp.cities;
        }
      },
      handleLetterChange:function (letter) {
        this.letter=letter;
      }
    },
    mounted () {
      this.getCityInfo();
    }
  }
</script>
<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>

</style>
