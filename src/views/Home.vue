<template>
  <div>
    <div>
      <!-- Components -->
      <div
        v-for="(quote, index) in quotes"
        :key="index" 
        class="tags"
      >
        <RandomColor :quote-msg="quote.tag" />
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
      quotes: null,
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      const endpoint = "https://clone-zonesons-server.herokuapp.com/api/quotes"
      fetch(endpoint).then(response => response.json()).then(data => this.quotes = data);
    }
  }
}
</script>

<style>
</style>