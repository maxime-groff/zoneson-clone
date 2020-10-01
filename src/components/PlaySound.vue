<template>
  <div class="playsound">
    <figure>
      <audio
        controls
        autoplay
      >
        <source 
          :src="'/audio/' + fileName"
          type="audio/mpeg"
        >
      </audio>
    </figure>
  </div>
</template>

<script>
export default {
  name: "PlaySound",
  props: {
    fileName: {
      type: String,
      default: 'sound.mp3'
    }
  }
};
</script>

<style scoped>
</style>
