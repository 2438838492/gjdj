<template>
  <div>
    {{ arr }}
    <button @click="change()">button</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3],
    };
  },
  methods: {
    change() {
      this.arr[1] = 666;
      console.log(this.arr);

      let newArr = [...this.arr];
      this.arr = newArr;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>