import App from './app.vue'
import Vue from 'vue'
import './directives'
import VrouterOptions from '../VrouterOptions.js'
window.onload = function() {
  new Vue({
    route: VrouterOptions,
    el: '#app',
    components: { App },
    render: h => h(App)
  })
}
