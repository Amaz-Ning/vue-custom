<template>
  <div class="box">
    <!-- <Dialog>
      <div>
        <input v-auto-focus />
      </div>
    </Dialog>-->
    <!-- <KForm :rules="rules" :info="info" ref="loginForm">
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
            <KInput type="password" v-model="info.password" placeholder="密码" />
          </kFormItem>
        </div>
      </kFormItem>
      <kFormItem label="密码" prop="password">
        <KInput type="password" v-model="info.password" placeholder="密码" />
      </kFormItem>
    </KForm>
    <button @click="submit">提交</button>
    <router-view></router-view>-->
    <List @del="del" @add="add" @change="change" :listData="listData" />
    <button @click="toNotification">notify</button>
  </div>
</template>

<script>
import KForm from './components/form/kForm.vue'
import KInput from './components/form/kInput.vue'
import KFormItem from './components/form/KFromItem.vue'
import Dialog from './components/dialog.vue'
import List from './components/list/list.vue'
export default {
  props: {},
  data() {
    return {
      listData: [
        {
          detail: 'abcd',
          id: 1
        },
        {
          detail: '1234',
          id: 2
        }
      ],
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
  mounted() {
    console.log(Notification)
  },
  watch: {},
  methods: {
    change(data) {
      this.listData.forEach(item => {
        if (item.id == data.id) {
          console.log(data)
          item.detail = data.detail
        }
      })
    },
    del(data) {
      this.listData.forEach((item, index) => {
        if (item.id == data) {
          this.listData.splice(index, 1)
        }
      })
    },
    add(data) {
      this.listData.push(data)
    },
    toNotification() {
      if (!('Notification' in window)) {
        alert('This browser does not support desktop notification')
      }
      // 否则我们需要向用户获取权限
      else if (window.Notification.permission !== 'denied') {
        console.log(Notification.permission)
        window.Notification.requestPermission(function(permission) {
          console.log(permission)
          // 如果用户同意，就可以向他们发送通知
          if (permission === 'granted') {
            console.log(Notification)
            var notification = new Notification('赵梦倩是小胖子')
          }
        })
      }
    },
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
    Dialog,
    List
  }
}
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  height: 100%;
}
</style>
