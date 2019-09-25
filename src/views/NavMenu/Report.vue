<!--统计报表-->
<template>
  <div class="report">
    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#243b66"
            text-color="#fff"
            :router="true"
            active-text-color="#ffd04b">
      <el-menu-item index="/report/iframeGateway/report.general">常规报表</el-menu-item>
      <el-menu-item index="/report/iframeGateway/report.custom">自定义报表</el-menu-item>
    </el-menu>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'report',
  data() {
    return {
      activeIndex: '/report/iframeGateway/report.general'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    // 进来后触发选中第一个menu
    const firstNode = document.querySelector('.report .el-menu-item');
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
  .report {
    height: 80%;
    width: 100%;
  }
</style>
