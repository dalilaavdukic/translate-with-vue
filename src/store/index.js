import Vue from 'vue';
import Vuex from 'vuex';
import languages from '../assets/localization/languages';

Vue.use(Vuex);

const state = {
  currentLanguage: languages[0].id
};

const mutations = {
  setCurrentLanguage(state, language) {
    state.currentLanguage = language;
  }
};

const getters = {
  currentLanguage: state => state.currentLanguage,
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
});