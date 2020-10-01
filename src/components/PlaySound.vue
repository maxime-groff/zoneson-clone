<template>
  <div class="playsound">
    <figure>
      <audio
        id="audioPlayer"
        autoplay
        :onended="showStopped"
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
  },
  methods: {
    showStopped: function() {
      this.$emit('finished')
    }
  }
};
</script>

<style scoped>
</style>
