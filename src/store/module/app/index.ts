
import { LanguageInfo } from './types'

const state = {
  language: 'zh-cn',
  locale: null
}
const mutations = {
  SET_LANGUAGE(state: LanguageInfo, data: string) {
    state.language = data;
  },
  SET_LOCALE(state: LanguageInfo, data: any) {
    state.locale = data;
  }

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

}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
