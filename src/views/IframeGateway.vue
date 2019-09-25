<!--iframe 跳转网关-->
<!--该页面根据路由参数来设置iframe的src-->
<!--该页面为临时页面，按照正常是每个页面对应一个文件，这里为了方便复用同一页面-->
<template>
  <div class="iframeGateway" >
    <iframeView :src="src"></iframeView>
  </div>
</template>

<script>
  const EJJG_URL = process.env.VUE_APP_EJJG_URL;
  import iframeView from '@/components/IframeView';

  export default {
    name: 'iframeGateway',
    // 引入iframe通用组件
    components: {iframeView},
    data() {
      return {
        src: '',
      }
    },
    methods: {
    },
    mounted() {
      // 初始化src参数
      this.routerParam = this.$route.params.name;
      this.src = EJJG_URL + this.routerParam.replace(".", "/");
    },
    watch:{
      // 监听路由变化 将src参数更新
      $route( to , from ){
        let routerParam = to.params.name;
        this.src = EJJG_URL + routerParam.replace(".", "/");
      }

    }
  }
</script>
<style scoped>
  .iframeGateway {
    width: 100%;
    height: 100%;
  }
</style>
