var Vue = require('vue')
var App = require('./app.vue')
var longpress = require('../')

Vue.use(longpress)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: function (createElement) {
    return createElement(App)
  }
})
