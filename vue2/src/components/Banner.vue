<template>
<swiper class="swiper" :options="swiperOption">
    <swiper-slide :key="`banner-swiper-${index}`" v-for="(banner, index) in bannerList" >
        <img class="slideImage" :src="banner.img">
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
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
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

@Component({
    Swiper,
    SwiperSlide
})
export default class Banner extends Vue{
    
    @Prop() bannerList!: any
    swiperOption =  {
                    loo: true,
                    autoplay: {
                        delay: 6000
                    },
                    pagination: {
                    el: '.swiper-pagination'
                   }
    }
}
</script>
