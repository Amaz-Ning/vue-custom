<template>
  <!-- 仿照elementui
  需求分析 单选框 输入框 下拉选择
  单项校验 全局校验
  提交事件 -->
  <div class="container">
    <slot> </slot>
  </div>
</template>

<script>
import KInput from './kInput.vue'
import KFormItem from './KFromItem.vue'
export default {
  props: {
    rules: {
      type: Object,
      default: null
    },
    info: {
      type: Object,
      default: null
    }
  },
  provide() {
    return {
      form: this
    }
  },
  methods: {
    validate(callback) {
      // 全局校验
      const arr = this.getTasks([], this.$children)
      Promise.all(arr)
        .then(res => callback(true))
        .catch(err => callback(false))
    },
    getTasks(arr, children) {
      // 获取所有子组件的校验promise
      children.forEach(item => {
        if (item.validate || item.$children) {
          item.validate ? arr.push(item.validate()) : ''
          this.getTasks(arr, item.$children)
        }
      })
      return arr
    }
  },
  data() {
    return {}
  },
  mounted() {},
  components: {}
}
</script>

<style scoped lang="scss"></style>
