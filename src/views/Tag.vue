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
            <div
              v-for="(quote) in quotes" 
              :key="quote" 
                
            >

              <PlaySound
                v-if="quote.tag == tagId"
                :file-name="quote.url"
                @playing="playing"
                @stopped="stopped"
              />
            </div>
            <a href="/">
              <div :id="tagId" class="close">
                <span class="fa fa-times" />
              </div>
            </a>
            <div id="bubble-main" class="replique-content">
              <div id="title">
                <div id="btnAudio" @click="toggle">
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
                <span id="tag" class="replique-tag">{{ tagId }}</span>
              </div>

              <div class="quotes">
                <div 
                  v-for="(quote) in quotes" 
                  :key="quote" 
                  class="citation"
                >
                  <div v-if="quote.tag == tagId">{{ quote.citation }}</div>
                </div>
              </div>
              <div id="bubble-toolbar" role="toolbar" class="btn-group">
                <a href="#" target="_blank">
                  <span class="fa fa-twitter" />
                </a>
                <a href="#" target="_blank">
                  <span class="fa fa-facebook" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-for="(quote, index) in quotes" :key="index" class="tags">
      <RandomColor :quote-msg="quote.tag" />
    </div>
  </div>
</template>

<script>
import PlaySound from '../components/PlaySound'
import RandomColor from '../components/RandomColor'
import axios from 'axios'

export default {
  name: 'Tag',
  components: {
    PlaySound,
    RandomColor,
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    quoteColor: String,
  },
  data() {
    return {
      quotes: null,
      // currentQuote: null,
      listening: true,
    }
  },
  computed: {
    tagId() {
      return this.$route.params.id
    },
    currentQuote() {
      for( const quote in this.quotes) {
        console.log(quote.tag)
        return quote.tag
      }
      return "test"
    }
  },
  mounted() {
    axios.get("https://clone-zonesons-server.herokuapp.com/api/quotes").then(res => res.data).then(data => {
      this.quotes = data 
    })
  },
  methods: {
    toggle: function () {
      var audio = document.getElementById('audioPlayer')

      if (audio.paused) {
        audio.play()
      } else {
        audio.pause()
      }
    },
    playing: function () {
      this.listening = true
    },
    stopped: function () {
      this.listening = false
    },
    fetchData() {
      const endpoint = 'https://clone-zonesons-server.herokuapp.com/api/quotes'
      fetch(endpoint)
        .then((response) => response.json())
        .then((data) => {
          this.quotes = data
          console.log(this.quotes)
          console.log(this.quotes.target)
          // data.foreach((quote) => {
          //   if (quote.tag == this.tagId) {
          //     this.currentData = quote.citation
          //   } else {
          //     this.currentData = 'notworking lololo'
          //   }
          // })
          // console.log("currentdata : " +this.currentData)
        })
    },
  },
}
</script>

<style >
</style>