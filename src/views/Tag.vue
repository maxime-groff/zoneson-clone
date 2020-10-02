<template>
  <div>
    <div>
      <!-- Components -->
      <h1>Tag page</h1>
      <router-link to="/">
        Go to Homepage
      </router-link>
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
              <div
                :id="tagId"
                class="close"
              >
                <span class="fa fa-times" />
              </div>
            </a>
            <div
              id="bubble-main"
              class="replique-content"
            >
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
                <div class="citation">
                  {{ quote }}
                </div>
              </div>
              <div
                id="bubble-toolbar"
                role="toolbar"
                class="btn-group"
              >
                <a
                  href="#"
                  target="_blank"
                ><span class="fa fa-twitter" /></a>
                <a
                  href="#"
                  target="_blank"
                ><span class="fa fa-facebook" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  props: {
    tag: {
      type: String,
      default: 'tag'
    },
    quote: {
      type: String,
      default: 'quote'
    }
  },
  data() {
    return {
      listening: true
    }
  },
  computed: {
    tagId() {
      return this.$route.params.id
    },
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

<style scoped>
  #bubble {
    background-color: #e49c6d;
  }
  .bubble {
    padding: 5;
  }
  .text-center {
    text-align: center;
  }
  a {
    color: #428bca;
    text-decoration: none;
    background: 0 0;
  }
  .bubble .close {
    font-size: 3rem;
    color: #fff;
    text-shadow: 0 1px 0 #000;
  }
  .close {
    float: right;
    font-size: 21px;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .2;
  }
  #title {
    display: flex;
    justify-content: center;
  }
.replique-tag {
    color: #FFF;
    font-size: 4rem;
    font-family: 'Lobster', cursive;
}
.citation {
  font-size: 3rem;
    font-style: italic;
    font-family: 'Playfair Display', serif;
    color: #fff;
}
#bubble-toolbar {
    width: 100%;
    height: 5rem;
    line-height: 5rem;
}
.btn-group {
    position: relative;
    display: inline-block;
    vertical-align: middle;
}
.playsound {
  display: inline-block;
}
#btnAudio {
    width: 64px;
    height: 64px;
    color: rgba(255,255,255,.66);
}
.btnIcon {
    font-size: 64px;
    width: 64px;
    height: 64px;
}
</style>