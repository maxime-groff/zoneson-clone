<template>
  <div>
    <div>
      <!-- Components -->
      <h1>Tag page</h1>
      <router-link to="/">
        Go to Homepage
      </router-link>
      <PlaySound file-name="sound.mp3" />
    </div>
  </div>
</template>

<script>
import PlaySound from '../components/PlaySound'
export default {
  name: 'Home',
  components: {
    PlaySound,
  },
  data() {
    return {}
  },
}
</script>

<style>
</style>