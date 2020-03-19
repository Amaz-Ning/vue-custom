// 自定义router
// 这里可以选择直接import Vue 但是在webpack没有启动代码切割的情况下 打包的时候会把Vue也打包进去 总而言之就是没有意义
// 选择声明一个变量 在加载插件的时候 通过参数给Vue赋值
let Vue

// 声明类
class VRouter {
  constructor(options) {
    // 保存一下配置选项
    this.$options = options
    // 保存routermap
    this.routerMap = {}
    // 这里通过vue的响应式数据 实时渲染组件
    this.app = new Vue({
      data: {
        current: '/'
      }
    })

    // 执行初始化函数
    this.init()
  }
  // 声明初始化函数
  init() {
    // 生成routerMap
    this.createRouterMap()
    // 监听事件
    this.eventListen()
    // 注册组件
    this.initComponents()
  }
  // 生成routerMap函数
  createRouterMap() {
    this.$options.routes.forEach(item => {
      // 做一个映射表
      this.routerMap[item.path] = item
    })
  }
  // 监听hashchange事件
  eventListen() {
    // 这里需要bind一下 如果不bind 当onhashchange运行的时候this指向的是window
    window.addEventListener('hashchange', this.onHashChange.bind(this))
    // 监听页面load
    window.addEventListener('load', this.onHashChange.bind(this))
  }
  // 监听事件
  onHashChange() {
    // 拿到的hash值例如为 #index 我们从第一位开始截取
    this.app.current = window.location.hash.slice(1) || '/'
  }
  initComponents() {
    Vue.component('router-view', {
      render: h => {
        const component = this.routerMap[this.app.current].component
        return h(component)
      }
    })
  }
}

// 实现插件
VRouter.install = function(_Vue) {
  // 赋值
  Vue = _Vue
  // 这里做一个全局的混入 执行挂载操作
  Vue.mixin({
    beforeCreate() {
      // 如果根组件传入了router选项的话 就把$router挂载到Vue原型上（全局）
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
        // 调用router的init方法 进行初始化
        this.$options.router.init()
      }
    }
  })
}

export default VRouter
