<template>
    <div class="full-screen animation-two">
        <div id="circle-base">

        </div>
    </div>
</template>




<script>
    export default {
        mounted() { 
            // let circleBase = document.getElementById('circle-base');
            // new Promise((resolve) => {
            //     setTimeout(() => {
            //         circleBase.style.transform = 'scale(.8)';
            //         resolve()
            //     }, 300);
            // }).then(() => {
            //     setTimeout(() => {
            //         circleBase.style.transform = 'scale(2)';
            //     }, 800);
            // })

            
        }
    }
</script>



<style lang="less" scoped>

    .animation-two {
        background: #fc2441;
        overflow: hidden;
    }

    #circle-base {
        background: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -200px;
        margin-top: -200px;
        width: 400px;
        height: 400px;
        border-radius: 200px;

        // transform: scale(7.6);

        animation:change 2s ease-in-out;
        animation-fill-mode: forward;
    }

    @keyframes change {
        0% {
            transform: scale(7.6)
        }
        30% {
            transform: scale(.3)
        }
        50% {
            transform: scale(1.4)
        }
        70% {
            transform: scale(.8)
        }
        100% {
            transform: scale(1)
        }

    }

</style>
