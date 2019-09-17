<!--全网概览-->
<template>
  <div class="home">
    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#243b66"
            text-color="#fff"
            :router="true"
            active-text-color="#ffd04b">
      <el-menu-item index="/home/topoView">拓扑视图</el-menu-item>
      <el-menu-item index="/home/mapView">地图视图</el-menu-item>
      <el-menu-item index="/home/listView">列表视图</el-menu-item>
    </el-menu>

    <router-view/>

    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--    <TopMenu/>-->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import TopMenu from '@/components/TopMenu.vue'

export default {
  name: 'home',
  data() {
    return {
      activeIndex: '/home/topoView'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    // 进来后触发选中第一个menu
    const firstNode = document.querySelector('.home .el-menu-item');
    console.log(firstNode);
    firstNode.click()
  },
  components: {
    // TopMenu,
    HelloWorld
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
</style>
