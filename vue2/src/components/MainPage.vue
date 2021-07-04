<template>
    <div>
    <nav>
        <ul class="menu">
            <li>Home</li>
            <li>Explore</li>
            <li>Bookmark</li>
        </ul>
    </nav>
    <video-list
      :videoList="mainData"></video-list>
    </div>
</template>
er

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VideoList from './VideoList.vue'
import { MainMutations } from '../store/main/mutations'
import { Main } from '../store/main/types'

@Component({
    components: {
        VideoList
    },
})
export default class MainPage extends Vue {
    
    get mainData() {
        return (this as any).$store.getters.getMainData
    }

    set mainData(value: Main[]) {
        (this as any).$store.commit(MainMutations.SET_HOME_RECOMM, value);
    }   

    mounted () {
          (this as any).$store.dispatch("loadMainData")
          
    //    (this as any).$store.dispatch("loadMainData").then((data)=> {
    //        //this.mainData = data
    //        (this as any).$store.commit('SET_HOME_RECOMM', data)
    //    })
    
    }
}



</script>
