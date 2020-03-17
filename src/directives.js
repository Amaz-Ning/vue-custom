import Vue from 'vue'
Vue.directive('auto-focus', {
  inserted: function(el) {
    el.focus()
  }
})
