<template>
  <div>
    <h1>grandfather</h1>
    <p msg="123" name="abc">爷传孙</p>
    <Father msg="123" name="abc" />
    <p>456</p>
  </div>
</template>

<script>
import Father from "./Father.vue";
export default {
  components: {
    Father,
  },
};
</script>

<style>
</style>