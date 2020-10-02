<template>
  <div class="header">
    <router-link to="/">
      <h1 class="title">{{ title }}</h1>
    </router-link>
    <p class="big">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'Home page',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
</style>
