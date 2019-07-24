import App from './app.vue'
import Vue from 'vue'
window.onload = function () {
    new Vue({
        el: '#app',
        components: { App },
        render: h => h(App)
    })
}