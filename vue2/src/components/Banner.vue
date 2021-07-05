<template>
    <div id="banner" v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
            <div class="swiper-slide" :key="banner.image" v-for="banner in bannerList">
                <img :src="banner.img">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script lang="ts"> 
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Banner extends Vue{
    
    @Prop() bannerList!: any
    swiperOption =  {
                    pagination: {
                    el: '.swiper-pagination'
                   }
    }
}
</script>
