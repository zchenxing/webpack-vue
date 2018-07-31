<template>
    <div>
        <banner :heightRem='5' :dataSource="dataSource"></banner>
        
        <div class="tpl-container">
            <div class="tpl-container__item" 
                v-for="(item, index) in tpl" 
                :key="index"
                @click="handleTpl(index)"
                >
                <img :src="item.icon" alt="">
                <p>{{item.name + (index + 1)}}</p>
            </div>
        </div>

        <div class="hot-container">
            <div class="hot-container__title">热门案例</div>
            <div class="hot-container__item">
                <div v-for="(item, index) in hots" 
                    :key="index" 
                    :data-hot="index === 0 ? true : false"
                    :style="{backgroundImage: `url('${item.bg_img}')`}">
                </div>
            </div>
        </div>


    </div>
</template>


<script>
    
    import Banner from 'components/banner/banner.vue'
    import './home.less'

    export default {
        components: {
            Banner
        },
        data() {
            return {
                dataSource: [
                    {img_url: require('assets/images/banner-1.png')},
                    {img_url: require('assets/images/banner-2.png')},
                    {img_url: require('assets/images/banner-3.png')}
                ],
                tpl: [
                    {name: '页面', icon: require('assets/images/toy/toy-1.png')},
                    {name: '页面', icon: require('assets/images/toy/toy-2.png')},
                    {name: '页面', icon: require('assets/images/toy/toy-3.png')},
                    {name: '页面', icon: require('assets/images/toy/toy-4.png')},
                    {name: '页面', icon: require('assets/images/toy/toy-5.png')},
                    {name: '页面', icon: require('assets/images/toy/toy-6.png')},
                    {name: '页面', icon: require('assets/images/toy/toy-7.png')},
                    {name: '页面', icon: require('assets/images/toy/toy-8.png')},
                ],
                hots: [
                    {bg_img: require('assets/images/hot/h-1.jpg')},
                    {bg_img: require('assets/images/hot/h-2.jpg')},
                    {bg_img: require('assets/images/hot/h-3.jpg')},
                    {bg_img: require('assets/images/hot/h-4.jpg')},
                    {bg_img: require('assets/images/hot/h-5.jpg')},
                ]
            };
        },
        methods: {
            handleTpl(index) {
                this.$router.push({
                        path: '/animation',
                        query: {
                            id: index + 1
                        }
                    });
            }
        }
    };
</script>
