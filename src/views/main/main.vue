<template>
    <div>
        <header-view></header-view>        
        <router-view class="main-view"></router-view>
        <footer-view></footer-view>
    </div>
</template>


<script>
    import HeaderView from '../layouts/header.vue'
    import FooterView from '../layouts/footer.vue'

    export default {
        components: {
            HeaderView, FooterView
        }
    }

</script>
