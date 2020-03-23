<template>
  <!-- 列表单项 -->
  <div class="container">
    <div>
      <input :readonly="canEdit" type="text" :value="datas.detail" @input="onInput" />
      <button @click="edit">{{canEdit ? '编辑' : '确定'}}</button>
      <button @click="del">删除</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    datas: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      canEdit: true,
      buttonStatus: '编辑',
      value: ''
    }
  },
  methods: {
    onInput(e) {
      this.value = e.target.value
    },
    del() {
      this.$parent.$emit('del', this.datas.id)
    },
    edit() {
      this.canEdit = !this.canEdit
      if (this.canEdit) {
        this.$parent.$emit('change', {
          id: this.datas.id,
          detail: this.value
        })
      }
    }
  },
  mounted() {},
  components: {}
}
</script>

<style scoped lang="scss">
</style>
