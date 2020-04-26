import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

/* 导出通过Vuex创建的仓库Store */
export default new Vuex.Store({

  // state: state,
  // mutations: mutations
  // 键值一样，简化
  state,
  mutations

})
