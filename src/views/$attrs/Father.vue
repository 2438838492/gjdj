<template>
  <div>
    <h1>father</h1>
    <!-- <el-button type="primary" size="mini" @click="play()">点击</el-button> -->
    <Son v-bind="$attrs" />
  </div>
</template>

<script>
import Son from "./Son.vue";
export default {
  components: {
    Son,
  },
  methods: {
    play() {
      console.log(111);
    },
  },
};
</script>

<style>
</style>