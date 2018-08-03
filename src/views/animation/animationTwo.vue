<template>
    <div class="full-screen animation-two">
        <div class="title-container">
            <div class="title-container__title">TD 老友记</div>
            <div class="title-container__content">首届用户线下交流会</div>
        </div>
        <div id="circle-base">
            <div id="home-text" :style="{backgroundImage: `url('${homeText}')`}"></div>
        </div>
    </div>
</template>




<script>
    export default {
        data() {
            return {
                homeText: require('assets/images/home-txt.png')
            }
        },
        mounted() {
            this.titleAnime();
            this.textAnime('#home-text');
            this.scaleCircleAnime('#circle-base');
        },
        methods: {
            titleAnime() {
                var functionBasedDelay = this.$anime({
                    targets: '.title-container div',
                    translateX: '-110%',
                    direction: 'normal',
                    delay: function(el, i, l) {
                        let delay = 0
                        i !== 0 ? delay = 1500 : delay = 1200
                        return delay
                    }
                });
            },
            textAnime(id) {
                let timeline = this.$anime.timeline();
                timeline.add({
                    targets: id,
                    opacity: 0,
                    scale: 0.2,
                    duration: 1100
                }).add({
                    targets: id,
                    opacity: 1,
                    scale: 1,
                    duration: 500,
                    easing: 'easeInOutQuad'
                })
            },
            scaleCircleAnime(id) {
                let timeline = this.$anime.timeline();
                timeline.add({
                    targets: id,
                    scale: 8,
                    duration: 0,
                    easing: 'easeInOutQuad'
                }).add({
                    targets: id,
                    scale: .6,
                    duration: 1000,
                    easing: 'easeInOutQuad'
                }).add({
                    targets: id,
                    scale: .6,
                    duration: 100,
                }).add({
                    targets: id,
                    scale: 1.4,
                    duration: 1000,
                    elasticity: 600
                })
            }
        }
    };
</script>



<style lang="less" scoped>
    .animation-two {
        padding: 50px;
        background: #fc2441;
        overflow: hidden;
    }
    
    .title-container {
        letter-spacing: 6px;
        color: #fff;
        position: relative;
        left: 110%;
    }
    
    .title-container__title {
        font-size: 60px;
    }
    
    .title-container__content {
        margin-top: 10px;
        font-size: 20px;
    }
    
    #circle-base {
        background: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -180px;
        margin-top: -180px;
        width: 360px;
        height: 360px;
        border-radius: 180px;
        box-shadow: 1px 1px 10px 1px rgba(121, 228, 214, 0.384);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    #home-text {
        width: 50%;
        height: 52%;
        opacity: 0;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>
