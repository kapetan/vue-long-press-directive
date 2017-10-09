<template>
  <div class="container">
    <h1>Demo</h1>

    <button v-long-press='onlongpress' @mousedown='onmousedown'>Press me</button>
    <span>{{ state }}</span>
  </div>
</template>

<script>
module.exports = {
  name: 'app',
  data: function () {
    return {
      state: 'idle'
    }
  },
  methods: {
    onmousedown: function () {
      this.state = 'mouse-down'
    },
    onlongpress: function () {
      this.state = 'long-press'
    }
  }
}
</script>
