<template>
  <div>
    <h1>son</h1>
    <p>{{ name }}</p>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  props: ["name", "msg"],
};
</script>

<style>
</style>