<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Translate with Vue</h1>
    <div class="demo-content">
      <language-selector></language-selector>
      <div class="items-to-translate">
        <h2>{{ 'lbl-welcome' | translate}}</h2>
        <button>{{'lbl-confirm' | translate}}</button>
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
  .demo-content {
    display: flex;
    justify-content: center;
  }
  .items-to-translate {
    padding: 0rem 5rem;
    border-left: solid 1px lightgrey;
    button, input[type="button"] {
      background-color: #52B986;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      border-radius: 5px;
    }
  }
}
</style>
