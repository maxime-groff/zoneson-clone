<template>
  <div>
    <h1 class="title">Home page</h1>
    <div>
      <!-- Components -->
      <div 
        class="tags"
        v-for="(quote, index) in quotes" 
        :key="index"
      >
        <router-link :to="'/tag/'+ quote">           
          <RandomColor :quote-msg="quote" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import RandomColor from "../components/RandomColor"

export default {
  name: 'Home',
  components:{
    RandomColor
  },
  data() {
    return {
      quotes: ['cheveux', 'gentil', 'facteur', 'bordel'],
    }
  },
}
</script>

<style>
</style>