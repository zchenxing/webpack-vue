<template>
    <div class="footer-view">
    
        <div class="footer-view__item" v-for="(item, index) in tabbar" :key="index" :class="{active: index === tabbarIndex}" :data-name="item.link" v-on:click="handleSelect(index)">
            <div>
                <img v-if="index === tabbarIndex" :src="item.select_img_url" alt="">
                <img v-else :src="item.img_url" alt="">
            </div>
            <p>{{item.name}}</p>
        </div>
    
    </div>
</template>



<script>
    export default {
        data() {
            return {
                tabbarIndex: 0,
                tabbar: [{
                        name: "首页",
                        link: "/",
                        img_url: require("../../assets/images/home.png"),
                        select_img_url: require("../../assets/images/home_select.png"),
                    },
                    {
                        name: '发现',
                        link: '/discover',
                        img_url: require('../../assets/images/discover.png'),
                        select_img_url: require('../../assets/images/discover_select.png')
                    },
                    {
                        name: "我的",
                        link: "/my",
                        img_url: require("../../assets/images/my.png"),
                        select_img_url: require("../../assets/images/my_select.png")
                    }
                ]
            };
        },
        mounted() {
            console.log(this.$route.path);

            let _this = this;
            this.tabbar.forEach((tab, index) => {
                if(tab.link === _this.$route.path) { 
                    _this.tabbarIndex = index;
                }
            })
        },
        methods: {
            handleSelect(index) {
                this.tabbarIndex = index;
                this.$router.push(this.tabbar[index].link);
            }
        }
    };
</script>
