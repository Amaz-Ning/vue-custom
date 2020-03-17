<template>
  <!-- 表单中的每一项 -->
  <div class="container">
    <!-- label用来展示名称 -->
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <!-- 这个p标签用户来展示错误信息 -->
    <p v-if="error" style="color:red;">{{ error }}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      error: ''
    }
  },
  methods: {
    validate(data) {
      // 做校验
      // 先通过prop获取数值并且做规则
      const info = this.form.info[this.prop]
      const rules = this.form.rules[this.prop]
      // 实例化 Schema 传递的参数为描述： 字段 -> 匹配的规则 规则可能有多个 所以可以是一个数组
      const Validator = new Schema({ [this.prop]: rules })
      // 实例化 Schema 之后我们得到一个 Validator 对象 使用其中的 validate 函数进行校验 传递的参数为 需要校验的属性 -> 属性的值
      return Validator.validate({ [this.prop]: info }, errors => {
        // 错误处理
        if (errors) {
          // 如果报错 我们取出错误信息中的第0项
          this.error = errors[0].message
        } else {
          this.error = ''
        }
      }).then(res => {})
    }
  },
  mounted() {
    this.$on('validate', data => {
      this.validate(data)
    })
  },
  components: {}
}
</script>

<style scoped lang="scss"></style>
