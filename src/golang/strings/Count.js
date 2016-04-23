module.exports = function Count (s, sep) {
  //  discuss at: http://locutusjs.io/php/printf/
  // original by: GopherJS (http://www.gopherjs.org/)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //   example 1: Count("cheese", "e")
  //   returns 1: 3
  //   example 2: Count("five", "") // before & after each rune
  //   returns 2: 5

  var Index = require('../strings/Index2')

  var pos
  var n = 0

  if ((sep.length === 0)) {
    return s.split(sep).length + 1
  } else if (sep.length > s.length) {
    return 0
  } else if ((sep.length === s.length)) {
    if (sep === s) {
      return 1
    }
    return 0
  }
  while (true) {
    pos = Index(s, sep)
    if (pos === -1) {
      break
    }
    n = n + (1) >> 0
    s = s.substring((pos + sep.length >> 0))
  }
  return n
}
