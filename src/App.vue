<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Translate with Vue</h1>
    <hr>
    <div>
      <language-selector></language-selector>
      <div class="items-to-translate">
        <h2>{{ 'lbl-welcome' | translate}}</h2>
        <input type="button" :value="'lbl-confirm' | translate">
        <input type="button" :value="'lbl-cancel' | translate">
      </div>
    </div>
  </div>
</template>

<script>
import LanguageSelector from './components/LanguageSelector';
 
export default {
  name: 'app',
  components: {
    LanguageSelector,
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 30px;
}
</style>
