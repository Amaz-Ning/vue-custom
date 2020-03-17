<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
import mixinJs from '../mixin/toastAndDialog.js'
export default {
  mixins: [mixinJs.toastAndDialog],
  mounted() {
    this.sayHello()
  },
  components: {}
}
</script>

<style scoped lang="scss"></style>
