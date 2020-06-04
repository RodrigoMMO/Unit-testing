const isNumber = require('is-number')

const isEven = number => number % 2 === 0

const root = (number, root = 2) => {
  if (isNumber(number) && isNumber(root)) {
    if (isEven(root) && number < 0)
      return 'The number can\'t  be  negative'
    else if (root === 0) return 'Undefined'
    else if (number > 0) return number ** (1/root)
    else if (number === 0) return 0
    else if (number < 0) return -1*(-number)**(1/root)
  }
}

module.exports = root
