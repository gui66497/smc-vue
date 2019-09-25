<!--策略管理-->
<template>
  <div class="strategy">
    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#243b66"
            text-color="#fff"
            :router="true"
            active-text-color="#ffd04b">
      <el-menu-item index="/strategy/iframeGateway/strategy.white">白名单策略</el-menu-item>
      <el-menu-item index="/strategy/iframeGateway/strategy.firewall">防火墙策略</el-menu-item>
      <el-menu-item index="/strategy/iframeGateway/strategy.isolator">隔离器策略</el-menu-item>
    </el-menu>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'strategy',
  data() {
    return {
      activeIndex: '/strategy/iframeGateway/strategy.white'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    // 进来后触发选中第一个menu
    const firstNode = document.querySelector('.strategy .el-menu-item');
    console.log(firstNode);
    firstNode.click()
  }
}
</script>

<style scoped>

  .el-menu-demo{
    height: 40px;
  }
  .el-menu-demo .el-menu-item{
    height: 40px;
    line-height: 34px;
  }
  .strategy {
    height: 80%;
    width: 100%;
  }
</style>
