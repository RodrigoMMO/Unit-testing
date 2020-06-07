const isNumber = require('is-number')

const converterKMM = (value, unit) => {
  if (!isNumber(value))
    return 'The value must be a number'
  else if (!unit || (unit !== 'km' && unit !== 'mile'))
    return 'Not a valid unit'
  else if (unit === 'km')
    return value*1.60934
  else if (unit === 'mile')
    return value*0.621371
}

const converterKGP = (value, unit) => {
  if(!value || !isNumber(value))
    return 'The value must be a number'
  else if (!unit || (unit !== 'kg' && unit !== 'lb'))
    return 'Not a valid unit'
  else if (unit === 'kg')
    return value*0.453592
  else if (unit === 'lb')
    return parseFloat((value*2.20462).toFixed(5))
}

module.exports = { converterKGP, converterKMM }
