import { createStore } from 'vuex'
import index from './module/app/index'
import getters from './getters'


export default createStore ({
  modules: {
    index
  },
  getters
})
