<script setup lang="ts">
import NavList from './components/NavList.vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

</script>

<template>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <nav-list></nav-list>
  <router-view></router-view>
</template>

<style>
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  position: relative;
  user-select: none;
  background-image: linear-gradient(to right, rgb(48, 46, 46), rgb(92, 92, 92));
}
</style>
