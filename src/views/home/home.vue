<template>
    <div>
        <banner :height='200' :dataSource="dataSource"></banner>
    </div>
</template>


<script>
    
    import Banner from 'components/banner/banner.vue'

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
                ]
            };
        }
    };
</script>


