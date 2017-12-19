import Vue from 'vue'
export const marked = require('marked')
Vue.mixin({
  methods: {
    marked: function (input) {
      return marked(input)
    }
  }
})
