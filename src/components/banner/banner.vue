<template>
     <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in dataSource" 
            :key="index" 
            :style="{height: height + 'px'}">
            
            <div class="banner-img" 
                :style="{ height: height + 'px', backgroundImage:'url(' + item.img_url + ')'}">

            </div>

        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    export default {
        props: ['height', 'dataSource'],
        data() {
            return{
               swiperOption: {
                   loop: true,
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
