<template>
  <div>
    <!-- Navbar -->
    <!-- Header -->
    <div>
      <Header msg="Nav goes here"/>
    </div>
    <!-- Container -->
    <div>
      <div>
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header'
export default {
  data() {
    return {}
  },
  components: {
    Header,
  },
}
</script>

<style scoped>
</style>