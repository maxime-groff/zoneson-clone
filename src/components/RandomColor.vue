<template>
  <div>    
    <span :style="'color:' + color "> 
      {{ quoteMsg }} 
    </span>
  </div>
</template>

<script>
export default {
  name: 'RandomColor',
  props: {
    quoteMsg: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  computed: {
    color() {
      return ('#' + ((Math.random() * 0xffffff) << 0).toString(16))
    },
  },
}
</script>

<style scoped>
</style>
