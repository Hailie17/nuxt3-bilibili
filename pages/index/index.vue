<template>
  <AppHeader />
  <!--  频道模块 -->
  <van-tabs>
    <van-tab v-for="item in channelList" :key="item.id" :title="item.name" />
  </van-tabs>
  <!--  视频列表-->
  <van-list v-model:loading="loading" v-model:error="error" error-text="请求失败，点击重新加载" :finished="finished" finished-text="去 bilibili APP 查看更多" @load="onLoad">
    <div class="video-list">
      <AppVideo  v-for="item in list" :key="item.aid" :item="item" />
    </div>
  </van-list>

</template>

<script setup>

const { data:channelList } = useFetch('/api/channel')
const { data:videoList } = useFetch('/api/video')

const list = ref([]);
const error = ref(false);
const loading = ref(false);
const finished = ref(false)
// 页码
let page = 1
let pageSize = 10

// 触底触发
const onLoad = () => {
  // 正在加载
  loading.value = false
  // 根据页码提取数据
  const data = videoList.value?.slice((page - 1) * pageSize, page * pageSize);
  list.value.push(...data)
  //页码累加
  page++
  // 加载结束
  if (videoList.value?.length === list.value?.length){
    finished.value = true
  }
};

</script>

<style lang="scss">

// 视频列表
.video-list {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 5px;
}

</style>
