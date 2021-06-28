<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="userName"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import { UserMutations } from './store/user/mutations';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {

    get userName() {
      return (this as any).$store.getters.getUserName;
    }

    set userName(value: string) {
      (this as any).$store.commit(UserMutations.SET_USERNAME, value);
    }

    mounted () {
      (this as any).$store.dispatch("loadAPIResult");
      
      setTimeout( () => {
        this.userName = 'changed'
      }, 3000)
    }
}
  
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
