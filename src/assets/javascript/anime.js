import AnimeJs from 'animejs'

let VueAnime = {};

VueAnime.install = (Vue) => {
    Vue.prototype.$anime = AnimeJs;
}

export default VueAnime;

