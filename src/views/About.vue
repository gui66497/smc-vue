<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="nav">
      <router-link to="/about/aa">AA</router-link> |
      <router-link to="/about/bb">BB</router-link>
    </div>
    <router-view/>
  </div>
</template>
