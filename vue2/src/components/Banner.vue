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
<swiper class="swiper" :options="swiperOption">
    <swiper-slide :key="`banner-swiper-${index}`" v-for="(banner, index) in bannerList" >
        <img class="slideImage" :src="banner.img">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
    <!-- <div v-once id="banner" class="swiper-container" v-swiper:swiper="swiperOption">
                <ul v-if="bannerList.length > 0" class="swiper-wrapper">
                   <li
                    :key="`banner-swiper-${index}`" 
                    v-for="(banner, index) in bannerList" 
                    class="swiper-slide">
                     <img :src="banner.img">
                   </li>  
                </ul>
        <div class="swiper-pagination"></div>
    </div> -->
</template>

<script lang="ts"> 
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
})
export default class Banner extends Vue{
    
    @Prop() bannerList!: any
    swiperOption =  {
                    loop: true,
                    spaceBetween: 30,
                    autoplay: {
                        delay: 4000
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        dynamicBullets: true,
                        dynamicMainBullets : 2 
                   },
                   backPoints:{
                        480: {
                        slidesPerView: 2,
                        spaceBetween: 10
                        },
                        // when window width is >= 640px
                        640: {
                        slidesPerView: 3,
                        spaceBetween: 20
                        },
                        1264: {
                        slidesPerView: 4,
                        spaceBetween: 30
                        }
                   }
    }
}
</script>
