const isNumber = require('is-number')

class Geometry {
  distance(x1, y1, x2, y2) {
    if (!isNumber(x1) || !isNumber(y1) || !isNumber(x2) || !isNumber(y2))
      return 'The parameters must be numbers'
    else {
      const result = ((x1 - x2)**2 + (y1 - y2)**2)**0.5
      return result === 0 ? -1 : parseFloat(result.toFixed(4))
    }
  }
}

const geometry = new Geometry()

module.exports = geometry
