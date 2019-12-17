import Vue from 'vue'

Vue.directive('liker', function (el, binding) {
  var str = binding.value.likes.map(x => x.name)
  if (binding.value.yourLike) {
    str = str.filter(x => x !== binding.value.yourName)
    el.innerHTML = 'You' + (str.length > 0 ? ', ' + str.splice(0, 1) : '') + (str.length > 0 ? (' & ' + str.length + (str.length === 1 ? ' other' : ' others')) : '')
  } else {
    el.innerHTML = str.splice(0, 2).join(', ') + (str.length > 0 ? (' & ' + str.length + (str.length === 1 ? ' other' : ' others')) : '')
  }
})
