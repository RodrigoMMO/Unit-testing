const isNumber = require('is-number')

const sum = (a, b) => {
  if(isNumber(a) && isNumber(b))
    return a + b
}

module.exports = sum