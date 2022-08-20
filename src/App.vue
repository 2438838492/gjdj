<template>
  <div class="app">
    <div class="nav">
      <router-link v-for="item in navData" :key="item.path" :to="item.path">{{
        item.title
      }}</router-link>
    </div>
    <keep-alive include="live">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navData: [
        { title: "计算属性", path: "/computed" },
        { title: "监听器", path: "/watch" },
        { title: "vue2-bug", path: "/vue2-bug" },
        { title: "provide", path: "/provide-inject" },
        { title: "keeplive", name: "keeplive", path: "/keeplive" },
        { title: "$attrs", name: "live", path: "/$attrs" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  height: 100%;
  .nav {
    background: rgb(31, 237, 31);
    width: 200px;
    display: flex;
    flex-direction: column;
  }
}
</style>