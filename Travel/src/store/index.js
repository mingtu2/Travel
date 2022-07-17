import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //公共组件间进行传值vuex,代表公用数据
  state:{
    city:'北京'
  },
  actions:{
    //ctx：代表上下文参数
    changeCity(ctx,city){
      ctx.commit('changeCity',city);
    }
  },
  mutations:{
    changeCity(state,city){
      state.city=city;
    }
  }

})
