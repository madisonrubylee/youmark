<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <mainPage></mainPage>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { UserMutations } from './store/user/mutations';
import mainPage from './components/MainPage.vue'

@Component({
  components: {
    mainPage
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

      // setTimeout( () => {
      //   this.userName = 'changed'
      // }, 3000)
    }
}
  
</script>

