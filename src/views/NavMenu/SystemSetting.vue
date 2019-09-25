<!--系统设置-->
<template>
  <div class="system">
    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#243b66"
            text-color="#fff"
            :router="true"
            active-text-color="#ffd04b">
      <el-menu-item index="/system/assetManage">资产管理</el-menu-item>
      <el-menu-item index="/system/iframeGateway/baseConfig">基本配置</el-menu-item>
      <el-menu-item index="/system/iframeGateway/ruleConfig">告警配置</el-menu-item>
      <el-menu-item index="/system/iframeGateway/operationLog.index">操作日志</el-menu-item>
      <el-menu-item index="/system/iframeGateway/event.index">预处理规则</el-menu-item>
      <el-menu-item index="/system/iframeGateway/report.set">报表设置</el-menu-item>
      <el-menu-item index="/system/iframeGateway/weightConfig">权重配置</el-menu-item>
      <el-menu-item index="/system/iframeGateway/cascade">级联管理</el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'SystemSetting',
  data() {
    return {
      activeIndex: '/system/assetManage'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    // 进来后触发选中第一个menu
    const firstNode = document.querySelector('.system .el-menu-item');
    console.log(firstNode);
    firstNode.click()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .el-menu-demo{
    height: 40px;
  }
  .el-menu-demo .el-menu-item{
    height: 40px;
    line-height: 34px;
  }
  .system {
    height: 80%;
    width: 100%;
  }
</style>
