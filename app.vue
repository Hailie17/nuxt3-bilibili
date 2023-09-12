<template>
  <!--Nuxt基于文件的路由系统-->
  <NuxtLink to="/">首页</NuxtLink>
  <NuxtLink to="/video">视频页</NuxtLink>
  <!--页面路由 相当于RouterView-->
  <NuxtPage />
</template>
<script setup lang="ts">
//seo优化
useSeoMeta({
  title:'别太离谱',
  description: '醒了？醒了就开播吧。我一定不看但你一定得播',
  keywords:'sy,乐不思蜀，yzz，乐子人',
})
</script>
<style>
// 基础样式
@import './assets/styles/base.scss';
// 字体图标
@import './assets/styles/iconfont.scss';
/*设置主题色*/
:root{
  --van-primary-color: #fb7299 !important;
}
</style>