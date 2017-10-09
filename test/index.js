var jsdom = require('jsdom')

var dom = new jsdom.JSDOM('<html><body></body></html>')
var window = dom.window
var document = window.document

global.document = document
global.window = window
global.navigator = window.navigator

var test = require('tape')
var Vue = require('vue')
var longpress = require('../')
var App = require('./app.vue')

Vue.use(longpress, { duration: 500 })

var VM = function (options) {
  return new Vue({
    el: document.createElement('div'),
    render: h => h(App)
  })
}

test('simple render', function (t) {
  t.plan(1)
  var vm = VM()
  t.ok(vm.$el instanceof window.HTMLButtonElement, 'html button')
})

test('trigger press', function (t) {
  t.plan(1)

  var vm = VM()

  vm.$on('longpress', function (e) {
    t.ok(e instanceof window.MouseEvent, 'mouse event')
  })

  var event = new window.MouseEvent('mousedown')
  vm.$el.dispatchEvent(event)
})

test('cancel press', function (t) {
  t.plan(1)

  var vm = VM()

  vm.$on('longpress', function () {
    t.fail('long press')
  })

  var event = new window.MouseEvent('mousedown')
  vm.$el.dispatchEvent(event)

  setTimeout(function () {
    event = new window.MouseEvent('mouseup')
    document.dispatchEvent(event)
  }, 200)

  setTimeout(function () {
    t.pass('expire')
  }, 800)
})
