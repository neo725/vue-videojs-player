<template>
  <div class="hello">
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="/#/play-local"
          target="_blank"
        >
          遠傳 IDC (720p - 1000k 付費分段)
        </a>
      </li>
      <li>
        <a
          href="/#/play-local-360"
          target="_blank"
        >
          遠傳 IDC (360p - 800k 免費分段)
        </a>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
