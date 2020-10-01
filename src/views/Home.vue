<template>
  <div>
    <div>
      <!-- Components -->
      <h1 class="title">
        Home page
      </h1>
      <div 
        v-for="(quote, index) in quotes" 
        :key="index"
      >
        <router-link :to="'/tag/'+ quote">
          Go to Tag Page {{ quote }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      quotes: ['cheveux', 'gentil', 'facteur', 'bordel'],
    }
  },
}
</script>

<style>
</style>