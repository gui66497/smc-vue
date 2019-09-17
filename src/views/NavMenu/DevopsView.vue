<!--设施运维-->
<template>
  <div class="devops">
    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#243b66"
            text-color="#fff"
            :router="true"
            active-text-color="#ffd04b">
      <el-menu-item index="/devops/topoManage">拓扑管理</el-menu-item>
      <el-menu-item index="/devops/mapView">安全基线</el-menu-item>
    </el-menu>



    <router-view/>

  </div>
</template>

<script>

  import {init} from '@/components/topo/topo';

  export default {
    name: 'devops',
    props: {

    },
    data() {
      return {
        activeIndex: '/devops/topoManage',

      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted() {
      // 进来后触发选中第一个menu
      const firstNode = document.querySelector('.devops .el-menu-item');
      console.log(firstNode);
      firstNode.click()
    },
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
  .devops {
    position: absolute;
    top: 60px;
    bottom: 0;
    left: 0;
    right: 0;
    height: auto;
    width: auto;
    overflow: hidden;
  }
</style>
