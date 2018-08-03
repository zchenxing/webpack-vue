<template>
    <transition :name="transitionName">
        <router-view class="child-view"></router-view>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                transitionName: 'slide-left'
            }
        },
        watch: {
            $route(to, from) {
                let isBack = this.$router.isBack;
                if (isBack) {
                    this.transitionName = 'slide-right'
                } else {
                    this.transitionName = 'slide-left'
                }
                this.$router.isBack = false;
            }
        },
    }
</script>

<style scoped>
    .child-view {
        position: absolute;
        width: 100%;
        transition: all .6s cubic-bezier(.55, 0, .31, 1.4);
    }
    
    .slide-left-enter,
    .slide-right-leave-active {
        opacity: 0;
        transform: translate(20px, 0);
    }
    
    .slide-left-leave-active,
    .slide-right-enter {
        opacity: 0;
        transform: translate(-20px, 0);
    }
</style>
