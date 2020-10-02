<template>
  <div>
    <div>
      <!-- Components -->
      <div id="player">
        <div id="player-content">
          <div id="bubble" style="background-color" class="bubble text-center">
            <PlaySound file-name="sound.mp3"/>
            <a href="/">
              <div :id="tagId" class="close">
                <span class="fa fa-times"/>
              </div>
            </a>
            <div id="bubble-main" class="replique-content">
              <div id="title">
                <span id="tag" class="replique-tag">{{ tagId }}</span>                
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
}
</script>

<style >
</style>