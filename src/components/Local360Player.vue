<template>
  <div>
    <video-player class="video-player-box vim-css vjs-4-3" ref="videoPlayer1" :options="player1Options"
      :playsinline="true" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)" @ended="onPlayerEnded($event)"
      @waiting="onPlayerWaiting($event)" @playing="onPlayerPlaying($event)" @loadeddata="onPlayerLoadeddata($event)"
      @timeupdate="onPlayerTimeupdate($event)" @canplay="onPlayerCanplay($event)"
      @canplaythrough="onPlayerCanplaythrough($event)" @statechanged="playerStateChanged($event)"
      @ready="playerReadied">
    </video-player>
    <video-player class="video-player-box vim-css vjs-4-3" ref="videoPlayer2" :options="player2Options"
      :playsinline="true" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)" @ended="onPlayerEnded($event)"
      @waiting="onPlayerWaiting($event)" @playing="onPlayerPlaying($event)" @loadeddata="onPlayerLoadeddata($event)"
      @timeupdate="onPlayerTimeupdate($event)" @canplay="onPlayerCanplay($event)"
      @canplaythrough="onPlayerCanplaythrough($event)" @statechanged="playerStateChanged($event)"
      @ready="playerReadied">
    </video-player>
  </div>
</template>

<script>
  // Similarly, you can also introduce the plugin resource pack you want to use within the component
  // import 'some-videojs-plugin'

  // hls plugin for videojs6
  require('videojs-contrib-hls')

  var urls = {
    video_1: 'http://media-dlc.sce.pccu.edu.tw/videos/360p-800k-3.mp4',
    video_2: 'http://media-dlc.sce.pccu.edu.tw/videos/360p-800k-3.mp4?start=720'
  }

  var getOptions = (video_src) => {
    return {
      // videojs options
      muted: false,
      language: 'en',
      playbackRates: [0.7, 1.0, 1.5, 2.0],
      sources: [{
        type: "video/mp4",
        //src: "https://d22649asu92cqd.cloudfront.net/MP4/LT20190401.mp4"
        //src: "https://digichannel.go2school.com.tw/_temp-mp4/720p-1000k-test-8.mp4"
        //src: 'http://media-dlc.sce.pccu.edu.tw/videos/SC20190401-1.mp4'
        src: video_src
      }],
      html5: {
        hls: {
          withCredentials: false
        }
      },
      poster: "/static/images/author.jpg",
    }
  }

  export default {
    data() {
      return {
        player1Options: getOptions(urls.video_1),
        player2Options: getOptions(urls.video_2)
      }
    },
    mounted() {
      console.log('this is current player instance object', this.player1, this.player2)
    },
    computed: {
      player1() {
        return this.$refs.videoPlayer1.player
      },
      player2() {
        return this.$refs.videoPlayer2.player
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      onPlayerEnded(player) {

      },
      onPlayerWaiting(player) {

      },
      onPlayerPlaying(player) {

      },
      onPlayerLoadeddata(player) {

      },
      onPlayerTimeupdate(player) {

      },
      onPlayerCanplay(player) {

      },
      onPlayerCanplaythrough(player) {

      },

      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      }
    }
  }

</script>
