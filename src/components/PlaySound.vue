<template>
  <div class="playsound">
    <figure>
      <audio
        id="audioPlayer"
        autoplay
        :onplay="showPlaying"
        :onpause="showStopped"
        :onended="showStopped"
      >
        <source 
          :src="fileName"
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
    showPlaying: function() {
      this.$emit('playing')
    },
    showStopped: function() {
      this.$emit('stopped')
    }
  }
};
</script>

<style scoped>
</style>
