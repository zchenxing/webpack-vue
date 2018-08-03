Plugin = {
    login: true
}

var PluginData = {};

PluginData.install = (Vue) => {
    Vue.prototype.$plugin = Plugin;
}

export default PluginData;

