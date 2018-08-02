<template>
    <animation-one v-if="animationId == 1"></animation-one>
    <animation-two v-else-if="animationId == 2"></animation-two>
</template>



<script>

    import AnimationOne from './animationOne.vue'
    import AnimationTwo from './animationTwo.vue'

    export default {
        components: {
            AnimationOne, AnimationTwo
        },
        data() {
            return {
                animationId: ''
            }
        },
        mounted() {
            this.animationId = this.$route.query.id
        }

    }
</script>