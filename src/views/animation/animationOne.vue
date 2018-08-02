<template>
    <div class="full-screen">
        <mt-button type="primary" @click="goBack()">primary</mt-button>
    </div>
</template>




<script>
    
    export default {
        mounted() {
            console.log(this.$store.state.count)
        },
        methods: {
            goBack() {
                this.$router.goBack();
            }
        }
    }

</script>