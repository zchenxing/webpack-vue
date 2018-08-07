import Banner from './banner/banner.vue'
import ListChunk from './list_chunk/listChunk.vue'
import YzButton from './button/button.vue'

const install = (Vue) => {
    Vue.component('yz-banner', Banner)
    Vue.component('yz-list-chunk', ListChunk)
    Vue.component('yz-button', YzButton)
}

export {
    Banner,
    ListChunk,
    YzButton
}


export default install;