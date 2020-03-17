import App from './app.vue'
import Vue from 'vue'
import './directives'
window.onload = function() {
  new Vue({
    el: '#app',
    components: { App },
    render: h => h(App)
  })
}
