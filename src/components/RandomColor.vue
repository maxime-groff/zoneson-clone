<template>
  <div>
    <router-link :to="'/tag/'+ quoteMsg">
      <span :style="'color:' + quoteColor ">#{{ quoteMsg }}</span>
    </router-link>        
  </div>
</template>

<script>
export default {
  name: 'RandomColor',
  props: {
    quoteMsg: {
      type: String,
      default: '',
    },
  },

  computed: {
    quoteColor() {
      return '#' + ((Math.random() * 0xffffff) << 0).toString(16)
    },
  },
}
</script>

<style scoped>
</style>
