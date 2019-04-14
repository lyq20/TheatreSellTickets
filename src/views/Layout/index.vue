<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">演出分类</template>
          <el-menu-item index="2-1">歌剧</el-menu-item>
          <el-menu-item index="2-2">音乐</el-menu-item>
          <el-menu-item index="2-3">舞蹈</el-menu-item>
          <el-menu-item index="2-4">戏剧</el-menu-item>
          <el-menu-item index="2-5">戏曲</el-menu-item>
          <!-- <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>-->
        </el-submenu>
        <el-menu-item index="3">资讯动态</el-menu-item>
        <el-menu-item index="4">
          <a href="https://www.ele.me" target="_blank">关于我们</a>
        </el-menu-item>
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
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import { userName } from "../../api/http";
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  mounted() {
    userName().then(res => {
      console.log(res);
    });
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
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 100%;
}

.el-container {
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