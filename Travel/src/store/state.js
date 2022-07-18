let defaultCity='北京'
try {
  if(localStorage.city){
    defaultCity=localStorage.city;
  }
}catch (e){

}

export default {
  //公共组件间进行传值vuex,代表公用数据
    city:defaultCity //刷新后城市值不变
  }
