<template>
  <div>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>

const default_layout = 'default'

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + '-layout'
    },
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>