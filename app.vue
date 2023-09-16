<template>
  <!--页面路由 相当于RouterView-->
  <!--缓存10级页面，提升用户体验-->
  <NuxtPage :keepalive="{ max: 10 }" />
</template>
<script setup lang="ts">
//seo优化
useSeoMeta({
  title:'别太离谱',
  description: '醒了？醒了就开播吧。我一定不看但你一定得播',
  keywords:'sy,乐不思蜀，yzz，乐子人',
  // 绕开b站防盗链
  referrer: 'no-referrer'
})
</script>
<style lang="scss">
/*设置样式*/
@import './assets/styles/base.scss';
/*字体图标*/
@import './assets/styles/iconfont.scss';
/*设置主题色*/
:root{
  --van-primary-color: #fb7299 !important;
}
</style>
