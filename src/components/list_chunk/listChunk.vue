<template>
    <div class="list-chunk">
        <div v-for="(item, index) in 10" :key="index" class="list-chunk__item">
            <div class="lc-item--img">

            </div>
            <p class="lc-item--content">
                '北欧风格（Nordic style）是指欧洲北部国家挪威、丹麦、瑞典、芬兰及冰岛等国的艺术设计风格'
            </p>
        </div>
    </div>
</template>


<script>

    import './listChunk.less'

    export default {
        data() {
            return {
            }
        }
    }
    
</script>
