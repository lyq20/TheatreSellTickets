<template>
  <el-container>
    <el-header>
      <el-menu
        router
        :default-active="$router.path"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="/home">首页</el-menu-item>
        <el-submenu index="/list">
          <template slot="title">演出分类</template>
          <el-menu-item index="/list">歌剧</el-menu-item>
          <el-menu-item index="">音乐</el-menu-item>
          <el-menu-item index="">舞蹈</el-menu-item>
          <el-menu-item index="">戏剧</el-menu-item>
          <el-menu-item index="">戏曲</el-menu-item>
        </el-submenu>
        <el-menu-item index="/order">我的订单</el-menu-item>
        <el-menu-item index="/aboutOurs">关于我们</el-menu-item>
        <el-menu-item class="admin">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看个人信息</el-dropdown-item>
              <el-dropdown-item>
                <el-button class="loginout" type="text" @click="loginOut()">注销账户</el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <!-- <el-footer>Footer</el-footer> -->
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    loginOut() {
      console.log("退出");
      this.$router.push({
        path: "/login"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0;
}

.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  text-align: center;
  height: 100%;
}

.el-container {
  width: 1280px;
  margin: 0 auto;
  height: 100%;
}
.admin {
  float: right;
}
.loginout {
  width: 100%;
  text-align: left;
}
</style>