import Vue from 'vue'
import * as moment from 'moment'

Vue.filter('capitalize', function (value) {
  return value.replace(/\b\w/g, l => l.toUpperCase())
})

Vue.filter('takeImage', function (value) {
  return process.env.SERVER_IP + value
})

Vue.filter('smallGoogleImage', function (value) {
  if (screen.width < 415) {
    console.log(screen.width)
    return `https://drive.google.com/thumbnail?id=${value}&sz=w128-h192`
  } else {
    return `https://drive.google.com/thumbnail?id=${value}&sz=w314-h472`
  }
})

Vue.filter('mediumGoogleImage', function (value) {
  return `https://drive.google.com/thumbnail?id=${value}&sz=w950-h630`
})

Vue.filter('facebookImage', function (value) {
  return `https://drive.google.com/thumbnail?id=${value}&sz=w2048-h1365`
})

Vue.filter('hdImage', function (value) {
  return `https://drive.google.com/thumbnail?id=${value}&sz=w4096-h2730`
})

Vue.filter('fullGoogleImage', function (value) {
  return `https://drive.google.com/uc?export=download&id=${value}`
})

Vue.filter('moment', function (date) {
  return moment(date).fromNow()
})

Vue.filter('limit_description', function (graph) {
  if (graph.length > 100) {
    return graph.substr(0, 100) + '...'
  }
  return graph
})

Vue.filter('limit_review_content', function (graph) {
  if (graph.length > 100) {
    return graph.substr(0, 97) + '...'
  }
  return graph
})
