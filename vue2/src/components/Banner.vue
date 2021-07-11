<template>
<!-- <div v-swiper:mySwiper="swiperOption" class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"
            :key="`banner-swiper-${index}`"
             v-for="(banner, index) in bannerList">
                <img :src="banner.img">
             </div>
    </div>
    <div class="swiper-pagination" v-if="bannerList.length > 1"></div>
</div> -->
    <div class="bannerWrapper">
        <swiper v-if="bannerList.length > 1" class="swiper" :options="swiperOption">
            <swiper-slide :key="`banner-swiper-${index}`" v-for="(banner, index) in bannerList" >
                <img :src="banner.img">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script lang="ts"> 
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
})
export default class Banner extends Vue{
    
    @Prop() bannerList!: any
    swiperOption =  {
                    initialSlide :0,
                    autoplay:{
                        delay:1500,
                        disableOnInteraction:false
                     },
                    loop:true,
                    pagination: {
                        el: '.swiper-pagination',
                   },
    }
}
</script>
