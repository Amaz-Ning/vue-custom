<template>
  <!-- 收货地址列表
  需求：可以添加 编辑 删除-->
  <!-- 拆分组件： 整体列表 列表单项 -->
  <div class="container">
    <button @click="add">添加</button>
    <list-item v-for="datas in listData" :key="datas.id" :datas="datas" />
  </div>
</template>

<script>
import ListItem from './listItem.vue'
export default {
  props: {
    listData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {}
  },
  components: {
    ListItem
  },
  mounted() {
    // this.$on('changeContent', data => {
    //   this.$emit('change', data)
    // })
    // this.$on('delete', data => {
    //   this.$emit('delete', data)
    // })
  },
  methods: {
    add() {
      alert(
        '这里需要用另一个组件 例如dialog 来维护一组数据 我这里只是象征性的添加一组数据 如果添加多个会报key值重复的错误'
      )
      this.$emit('add', {
        id: 4,
        detail: 1233
      })
    }
  }
}
</script>

<style scoped lang="scss">
</style>
