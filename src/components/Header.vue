<template>
  <div class="header">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: {
      type: String, 
      default: 'yes life'
    }
  },
};
</script>

<style scoped>
</style>
