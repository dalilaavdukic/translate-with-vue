import store from '../store';
import dictionary from '../assets/localization';

export default {
  translate (key) {
    const currentLanguage = store.getters.currentLanguage;
    return dictionary[currentLanguage][key]
  }
}