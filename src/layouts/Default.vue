<template>
  <div>    
    <!-- Header -->
    <div>      
      <Header msg="Nav goes here" />
    </div>
    <!-- Container -->
    <div>
      <div>
        <slot />
      </div>
    </div>
    <!-- Footer -->
  </div>
</template>

<script>
import Header from '../components/Header'

export default {
  components: {
    Header,
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
</style>