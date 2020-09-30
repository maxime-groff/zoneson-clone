<template>
  <Header msg="Nav goes here" />
  <h1>
    Home page
  </h1>
  <PlaySound file-name="sound.mp3" />
</template>

<script>
import Header from './components/Header.vue'
import PlaySound from './components/PlaySound.vue'

export default {
  name: 'App',
  components: {
    Header,
    PlaySound
  }
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
