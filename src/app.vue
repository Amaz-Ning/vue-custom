<template>
  <div class="box">
    <!-- <Dialog>
      <div>
        <input v-auto-focus />
      </div>
    </Dialog> -->
    <KForm :rules="rules" :info="info" ref="loginForm">
      <kFormItem label="用户名" prop="userName">
        <KInput type="text" v-model="info.userName" placeholder="用户名" />
        <kFormItem label="密码" prop="password">
          <KInput type="password" v-model="info.password" placeholder="密码" />
        </kFormItem>
        <kFormItem label="密码" prop="password">
          <KInput type="password" v-model="info.password" placeholder="密码" />
        </kFormItem>
        <div>
          <kFormItem label="密码" prop="password">
            <KInput
              type="password"
              v-model="info.password"
              placeholder="密码"
            />
          </kFormItem>
        </div>
      </kFormItem>
      <kFormItem label="密码" prop="password">
        <KInput type="password" v-model="info.password" placeholder="密码" />
      </kFormItem>
    </KForm>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
import KForm from './components/form/kForm.vue'
import KInput from './components/form/kInput.vue'
import KFormItem from './components/form/KFromItem.vue'
import Dialog from './components/dialog.vue'
export default {
  props: {},
  data() {
    return {
      info: {
        userName: '123',
        password: '1233321'
      },
      rules: {
        userName: [
          {
            required: true,
            message: '用户名不能为空'
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空'
          }
        ]
      }
    }
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    submit() {
      // 提交之前进行全局校验
      this.$refs.loginForm.validate(isValidate => {
        if (isValidate) {
          console.log('success')
        } else {
          console.log('fail')
        }
      })
    }
  },
  components: {
    KForm,
    KInput,
    KFormItem,
    Dialog
  }
}
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  height: 100%;
}
</style>
