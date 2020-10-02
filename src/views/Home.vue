<template>
  <div>
    <div>
      <!-- Components -->
      <div class="tags" v-for="(quote, index) in quotes" :key="index">
        <RandomColor :quote-msg="quote"/>
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