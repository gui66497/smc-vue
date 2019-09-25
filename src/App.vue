<template>
  <div id="app">
    <div v-if="needShow()" class="smc_nav">
      <el-row>
        <el-col :span="8"><img src="./assets/smc-logo.png"></el-col>
        <el-col :span="15">
          <el-menu
                  :default-active="activeIndex"
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="handleSelect"
                  background-color="#0f2953"
                  text-color="#fff"
                  :router="true"
                  active-text-color="#ffd04b">
            <el-menu-item index="/home">全网概览</el-menu-item>
            <el-menu-item index="/devops">设施运维</el-menu-item>
            <!--<el-menu-item index="3" disabled>消息中心</el-menu-item>-->
            <!--<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
            <el-menu-item index="/report">统计报表</el-menu-item>
            <el-menu-item index="/strategy">策略管理</el-menu-item>
            <el-menu-item index="/system">系统设置</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="1">
          <el-button type="text" style="color: white;line-height: 30px;font-size: 16px" @click="logout()">注销</el-button>
        </el-col>
      </el-row>

    </div>

    <!--<router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>-->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        visible: false,
        activeIndex: '/home'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      needShow() {
        if (this.$route.path.length > 1) {
          this.activeIndex = "/" + this.$route.path.split("/")[1];
        }
        return this.$route.path !== "/login"
      },
      logout() {
        localStorage.removeItem('token');
        this.$router.push('/login')
      }
    }
  }
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.el-menu.el-menu--horizontal{
  border-bottom: none !important;
}
.smc_nav {
  height: 60px;
  background:url("~@/assets/navMain_bg.png") repeat center;
}
.smc_nav img {
  margin-top: 8px;
  margin-left: 30px;
  margin-right: 90px;
  float: left;
}
.el-menu-demo{
  height: 40px;
}
.el-menu--horizontal>.el-menu-item{
  line-height: 34px;
}
/*.el-menu--horizontal>.el-submenu .el-submenu__title {
  #height: 34px !important;
}*/
body { margin: 0 !important; }
</style>
