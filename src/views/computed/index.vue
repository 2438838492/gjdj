<template>
  <div>
    <h2>计算属性</h2>
    <p>a:{{ a }} <button @click="a++">a++</button></p>
    <p>b:{{ b }} <button @click="b += 2">b+=2</button></p>
    <h4>求和: {{ c }}</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 1,
      b: 2,
    };
  },
  computed: {
    c() {
      return this.a + this.b;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>