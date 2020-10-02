<template>
  <div>
    <div>
      <!-- Components -->
      <div id="player">
        <div id="player-content">
          <div
            id="bubble"
            class="bubble text-center"
          >
            <PlaySound
              file-name="sound.mp3"
              @playing="playing"
              @stopped="stopped"
            />
            <a href="/">
              <div :id="tagId" class="close">
                <span class="fa fa-times"/>
              </div>
            </a>
            <div id="bubble-main" class="replique-content">
              <div id="title">
                <div
                  id="btnAudio"
                  @click="toggle"
                >
                  <div
                    v-if="listening"
                    id="btnIconStop"
                    ref="btnIconStop"
                    class="btnIcon fa fa-stop-circle"
                  />
                  <div
                    v-else
                    id="btnIconPlay"
                    ref="btnIconPlay"
                    class="btnIcon fa fa-play-circle"
                  />
                </div>
                <span
                  id="tag"
                  class="replique-tag"
                >{{ tagId }}</span>
              </div>

              <div class="quotes">
                <div class="citation">{{ quote }}</div>
              </div>
              <div id="bubble-toolbar" role="toolbar" class="btn-group">
                <a href="#" target="_blank">
                  <span class="fa fa-twitter"/>
                </a>
                <a href="#" target="_blank">
                  <span class="fa fa-facebook"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tags" v-for="(quote, index) in quotes" :key="index">
      <RandomColor :quote-msg="quote"/>
    </div>
  </div>
</template>

<script>
import PlaySound from '../components/PlaySound'
import RandomColor from "../components/RandomColor"

export default {
  name: 'Tag',
  components: {
    PlaySound,
    RandomColor,
  },
  props: {
    quoteColor: String,
  },
  data() {
    return {
      quotes: ['cheveux', 'gentil', 'facteur', 'bordel'],
      listening: true
    }
  },
  computed: {
    tagId() {
      return this.$route.params.id
    },
    quote() {
      return 'Vous êtes très gentil. Attention, j’ai bien dit gentil, j’ai pas dit homosexuel, hein.'
    },
  },
  mounted() {    
    console.log(this.$route.params)
  },
  methods: {
    toggle: function () {
      var audio = document.getElementById('audioPlayer');
      
      if (audio.paused) {
        audio.play()
      }
      else {
        audio.pause();
      }
    },
    playing: function() {
      this.listening = true

    },
    stopped: function() {
      this.listening = false
    }
  }
}
</script>

<style >
</style>