
import { typesInfo } from './types'

const state = {
  language: 'zh-cn',
  locale: '',
  theme: 'light'
}
const mutations = {
  SET_LANGUAGE(state: typesInfo, data: string) {
    state.language = data;
  },
  SET_LOCALE(state: typesInfo, data: any) {
    state.locale = data;
  },
  SET_THEME(state: typesInfo, data: string) {
    state.theme = data;
  },

}
const actions = {
  setLanguage ({ commit, state }, data) {
      return new Promise((resolve, reject) => {
          commit("SET_LANGUAGE", data)
      })
  },
  setLocale ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      commit("SET_LOCALE", data)
    })
  },
  setTheme ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      commit("SET_THEME", data)
    })
  },

}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
