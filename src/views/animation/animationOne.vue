<template>
    <div class="full-screen">
        
        <div >
            <mt-badge size="large">{{count}}</mt-badge>
        </div>

        <div>
            <mt-button type="primary" @click="increment">加</mt-button>
            <mt-button type="danger" @click="decrement">减</mt-button>
        </div>
        <mt-button @click.native="goBack()">点击返回</mt-button>

    </div>
</template>



<script>
    export default {
        computed: {
            count() {
                return this.$store.state.count;
            }
        },
        mounted() {
            console.log(this.$plugin)
        },
        methods: {
            goBack() {
                this.$router.goBack();
            },
            increment() {
                this.$store.commit('INCREMENT_COUNT');
            },
            decrement() {
                this.$store.commit('DECREMENT_COUNT');
            }
        }
    }
</script>