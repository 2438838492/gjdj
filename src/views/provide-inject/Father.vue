<template>
  <div>
    <h4 @click="change()">二级</h4>
    {{ son }}
    <button @click="play()">子传父</button>
    <son />
  </div>
</template>

<script>
import Son from "./Son.vue";

export default {
  // inject: ["name"],
  props: {
    son: {},
  },
  components: {
    Son,
  },
  methods: {
    play(data) {
      this.$emit("play", data);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>