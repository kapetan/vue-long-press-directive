<template>
  <button v-long-press='onlongpress'>Button</button>
</template>

<script>
module.exports = {
  name: 'app',
  methods: {
    onlongpress: function (e) {
      this.$root.$emit('longpress', e)
    }
  }
}
</script>
