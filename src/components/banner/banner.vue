<template>
     <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in dataSource" 
            :key="index" 
            :style="{height: heightRem + 'rem'}">
            
            <div class="banner-img" 
                :style="{ height: heightRem + 'rem', backgroundImage:'url(' + item.img_url + ')'}">

            </div>

        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>

    export default {
        props: ['heightRem', 'dataSource'],
        data() {
            return{
               swiperOption: {
                    loop: true,
                    speed: 900,
                    autoplay: true,
                    pagination: {
                        el: '.swiper-pagination'
                    }
                },
            }
        },
        mounted() {
            console.log(this.dataSource)
        },
    }
</script>



<style scoped>
.banner-img {
    width: 100%;
    background-size: cover;
    background-position: center;
}
</style>
