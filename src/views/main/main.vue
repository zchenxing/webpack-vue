<template>
    <div>
        <header-view></header-view>        
        <router-view></router-view>
        <footer-view></footer-view>
    </div>
</template>


<script>
    import HeaderView from '../layouts/header.vue'
    import FooterView from '../layouts/footer.vue'
    import '../../assets/stylesheets/layout.less'

    export default {
        components: {
            HeaderView, FooterView
        }
    }

</script>
