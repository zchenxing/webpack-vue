<template>
    <div class="full-screen">
        
        <div>
            <label>{{count}}</label>
        </div>

        <div>
            <yz-button text='加' @click.native="increment"></yz-button>
            <yz-button text='减' @click.native="decrement" ></yz-button>
        </div>
        <yz-button text="点击返回" type="primary" @click.native="goBack"></yz-button>

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
                console.log('加')
                this.$store.commit('INCREMENT_COUNT');
            },
            decrement() {
                this.$store.commit('DECREMENT_COUNT');
            }
        }
    }
</script>