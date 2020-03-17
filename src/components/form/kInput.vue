<template>
  <!-- 输入框 -->
  <div class="container">
    <input
      :type="type"
      @input="onInput"
      :value="value"
      :placeholder="$attrs.placeholder"
    />
  </div>
</template>

<script>
export default {
  // 阻止组件的根元素继承特性
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {}
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
      // 校验逻辑
      // 这里直接通知父元素校验
      this.$parent.$emit('validate', e.target.value)
    }
  },
  components: {}
}
</script>

<style scoped lang="scss"></style>
