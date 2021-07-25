<template>
    <div>
        <!-- <nav>
            <ul class="menu">
                <li class="home">Home</li>
                <li>Explore</li>
                <li>Bookmark</li>
            </ul>
        </nav> -->
        <div class="banner">
            <banner 
            :bannerList="mainData.mainBanner"
            />
        </div>
          <video-list
            v-for="(item, idx) in mainData.mainVideo"
            :key="idx"
            :videoList="item" />
    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VideoList from './VideoList.vue'
import { MainMutations } from '../store/main/mutations'
// import { Main } from '../store/main/types'
import Banner from './Banner.vue'

@Component({
    components: {
        VideoList,
        Banner
    },
})
export default class MainPage extends Vue {
    
    get mainData() {
        return (this as any).$store.getters.getMainData
    }

    set mainData(value: any) {
        (this as any).$store.commit(MainMutations.SET_HOME_RECOMM, value);
    }   

    // get mainBanner() {
    //     return (this as any).$store.getters.getMainBanner
    // }


    mounted () {
          (this as any).$store.dispatch('loadMainData');
          (this as any).$store.dispatch('loadBannerData');
    //    (this as any).$store.dispatch("loadMainData").then((data)=> {
    //        //this.mainData = data
    //        (this as any).$store.commit('SET_HOME_RECOMM', data)
    //    })
    
    }
}



</script>
