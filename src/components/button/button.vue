<template>
    <div id="my-button" :style="classObj">
        {{text}}
    </div>
</template>

<script>
    export default {
        name: 'yz-button',
        props: ['text', 'type'],
        data() {
            return {
                styleObj: {
                    color: '#656B78',
                    backgroundColor: '#F6F8FA',
                    border: '1px solid #E0E2E3'
                }
            }
        },
        computed: {
            classObj() {
                
                let classObj = this.styleObj
                switch (this.type) {
                    case 'primary':
                        classObj['color'] = '#fff'
                        classObj['backgroundColor'] = '#31A4FC'
                        classObj['border'] = 'none'
                        break;
                    case 'danger':
                        classObj['color'] = '#fff'
                        classObj['backgroundColor'] = '#ED5053'
                        classObj['border'] = 'none'
                        break;
                    default:
                        break;
                }

                return classObj

            }
        },
    }
</script>



<style scoped>
    
    #my-button {
        display: inline-block;
        padding: 20px 20px;
        background: palegoldenrod;
        font-size: 30px;
        border-radius: 8px;
    }

</style>
