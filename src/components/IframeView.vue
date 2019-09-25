<!--iframe通用组件-->
<template>
  <div class="iframeView" >
    <iframe frameborder="no" class="iframe" :src="src"></iframe>
  </div>
</template>

<script>
  export default {
    name: 'iframeView',
    props: {
      src: String
    },
    methods: {
    }
  }
</script>

<style scoped>
  .iframeView {
    width: 100%;
    height: 100%;
  }
  .iframe {
    width: 100%;
    height: 100%;
  }
</style>
