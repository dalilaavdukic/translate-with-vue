import Vue from 'vue';
import translateService from '../services/translate.service';

const translateKey = (key) => {
  if (!key) return ''
  return translateService.translate(key)
}

Vue.filter('translate', translateKey)

export default translateKey