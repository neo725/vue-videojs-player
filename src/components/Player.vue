<template>
  <video-player
    class="video-player-box vim-css"
    ref="videoPlayer"
    :options="playerOptions"
    :playsinline="true"
    @play="onPlayerPlay($event)" @pause="onPlayerPause($event)" @ended="onPlayerEnded($event)"
    @waiting="onPlayerWaiting($event)" @playing="onPlayerPlaying($event)" @loadeddata="onPlayerLoadeddata($event)"
    @timeupdate="onPlayerTimeupdate($event)" @canplay="onPlayerCanplay($event)"
    @canplaythrough="onPlayerCanplaythrough($event)" @statechanged="playerStateChanged($event)" @ready="playerReadied">
  </video-player>
</template>

<script>
  // Similarly, you can also introduce the plugin resource pack you want to use within the component
  // import 'some-videojs-plugin'

  // hls plugin for videojs6
  require('videojs-contrib-hls')

  export default {
    data() {
      return {
        playerOptions: {
          // videojs options
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [
            {
              type: "video/mp4",
              src: "https://d22649asu92cqd.cloudfront.net/MP4/LT20190401.mp4"
            },
            {
              type: "application/x-mpegURL",
              //src: "https://d22649asu92cqd.cloudfront.net/HLS/LT20190401-hls-lt.m3u8"
              src: "https://d19w9c30b5m5um.cloudfront.net/out/v1/53a897685fc24d55bc1b502675b42f12/index.m3u8"
            }
          ],
          html5: { hls: { withCredentials: false }},
          poster: "/static/images/author.jpg",
        }
      }
    },
    mounted() {
      console.log('this is current player instance object', this.player)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
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
