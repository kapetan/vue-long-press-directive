# vue-long-press-directive

Long press directive plugin for Vue.js. See the [live demo](https://kapetan.github.io/vue-long-press-directive/demo/index.html).

    npm install vue-long-press-directive

## Usage

Register the plugin with Vue. It's possible to specify the press duration in the options object.

```javascript
var Vue = require('vue')
var longpress = require('vue-long-press-directive')

Vue.use(longpress, { duration: 1000 })
```

The directive can now be used in a template.

```html
<button v-long-press='onlongpress'>Press and hold</button>
```
