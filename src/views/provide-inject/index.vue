<template>
  <div>
    <h3>一级</h3>
    <p>hello world</p>
    <father @play="play(20)" son="father" />
  </div>
</template>

<script>
import Father from "./Father.vue";

export default {
  provide: () => {
    return { name: "李白" };
  },
  data() {
    return {
      msg: "123",
    };
  },
  components: {
    Father,
  },
  methods: {
    play(data) {
      console.log(data);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>