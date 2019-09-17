<template>
  <div class="hello">
    <div class="smc_nav">
      <img src="../assets/smc-logo.png">
      <ul id="navMain"></ul>
      <button id="logoutBtn" class="md-button" type="button" md-no-ink="" ng-click="logout()">注销</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopMenu'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.smc_nav {
  height: 55px;
  background:url("~@/assets/navMain_bg.png") repeat center;
}
</style>
