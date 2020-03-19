import home from './src/pages/home.vue'
import about from './src/pages/about.vue'
import VRouter from './vRouter.js'
import Vue from 'Vue'
Vue.use(VRouter)
export default new VRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
