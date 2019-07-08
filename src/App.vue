<template>
<div class="front">
  <!-- 头部 -->
  <heads></heads>
  <div class="container-fluid">
    <div class="row">
      <!-- 左侧 -->
      <left></left>
      <!-- 右侧 -->
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
import heads from "./components/head.vue";
import left from "./components/left.vue";
import right from "./components/right.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: { heads, left, right }
};
</script>

<style lang="scss">
</style>
