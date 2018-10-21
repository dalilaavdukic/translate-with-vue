import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './filters/translate.filter';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
