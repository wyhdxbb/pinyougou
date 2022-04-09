<template>
    <div class="swiper-container" id="floor1Swiper" ref="mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(carousel) in list" :key="carousel.id">
                <img :src="carousel.imgUrl">
            </div>
        </div>
        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import swiper from 'swiper'
export default {
    name:'Carousel',
    props:['list'],
    watch:{
        List: {
            immediate:true,
            handler(newValue,oldValue){
                this.$nextTick(() => {
          //回调里面写代码的时候:1:服务器数据回来了 2:v-for执行完毕，结构已经有了
                    var mySwiper = new swiper(this.$refs.mySwiper, {
                        loop: true,
                // 如果需要分页器
                        pagination: {
                        el: ".swiper-pagination",
                //分页器小球点击的时候切换图片
                        clickable: true,
                        },
                // 如果需要前进后退按钮
                        navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                        },
                    });
                });
            }
        }
    }
}
</script>

<style>

</style>