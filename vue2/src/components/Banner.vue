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
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide :key="`banner-swiper-${index}`" v-for="(banner, index) in bannerList" >
                <img :src="banner.img" class="swiperImg">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script lang="ts"> 
import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  Swiper as SwiperClass,
  Pagination,
  Mousewheel,
  Autoplay,
} from 'swiper/core'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import 'swiper/swiper-bundle.css'

SwiperClass.use([Pagination, Mousewheel, Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))
//const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass)

@Component({
    // Swiper,
    // SwiperSlide
})
export default class Banner extends Vue{
    
    @Prop() bannerList!: any
    swiperOption =  {
                    autoplay: { delay: 5000 },
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets'
                   },
    }
}
</script>
