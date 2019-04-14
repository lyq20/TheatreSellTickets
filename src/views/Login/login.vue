<template>
  <el-card class="login">
    <p
      style="height: 36px; width: 100%; margin-bottom: 15px; font-size: 24px; font-weight: blod;"
    >请登录</p>
    <el-form ref="from" label-width="100px" class="demo-dynamic" :model="formData">
      <el-form-item
        prop="userName"
        label="用户名"
        :rules="{ required: true, message: '请输入用户名（邮箱地址）', trigger: 'blur' }"
      >
        <el-input v-model="formData.userName"></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="passWord"
        :rules="{ required: true, message: '密码不能为空', trigger: 'blur' }"
      >
        <el-input type="password" v-model="formData.passWord"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="submit" type="primary" @click="submitForm('from')">登 录</el-button>
        <el-button @click="resetForm('from')">重 置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      formData: {
        userName: "", // 用户名
        passWord: "" // 密码
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (
            this.formData.userName === "leiyangqing@163.com" &&
            this.formData.passWord === "123456"
          ) {
            this.$router.push({
              path: "/home"
            });
          } else {
            this.$message.error("密码错误，请重新填写");
          }
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
html,
body {
  width: 100%;
  height: 100%;
}
.el-button {
  width: 100px;
  font-size: 16px;
}
.submit {
  margin-right: 20px;
}
.login {
  width: 500px;
  height: 300px;
  background: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
</style>