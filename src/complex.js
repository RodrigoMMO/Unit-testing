const { evaluate } = require('mathjs')

class NumComplex {
  constructor (real, imaginary) {
    this.real = real
    this.imaginary = imaginary
  }

  toString () {
    if (this.imaginary === 0)
      return `${this.real}`
    else if (this.imaginary > 0)
      return `${this.real} + ${this.imaginary}i`
    else
      return `${this.real}${this.imaginary}i`
  }
}

class Complex {
  addition (n1, n2) {
    const result = evaluate(`(${n1.real} + ${n1.imaginary}i) + (${n2.real} + ${n2.imaginary}i)`)
    return `${new NumComplex(result.re, result.im)}`
  }

  subtraction (n1, n2) {
    const result = evaluate(`(${n1.real} + ${n1.imaginary}i) - (${n2.real} + ${n2.imaginary}i)`)
    return `${new NumComplex(result.re, result.im)}`
  }

  multiplication (n1, n2) {
    const result = evaluate(`(${n1.real} + ${n1.imaginary}i) * (${n2.real} + ${n2.imaginary}i)`)
    return `${new NumComplex(result.re, result.im)}`
  }

  division (n1, n2) {
    const result = evaluate(`(${n1.real} + ${n1.imaginary}i) / (${n2.real} + ${n2.imaginary}i)`)
    return `${new NumComplex(result.re, result.im)}`
  }
}

const n = new Complex()

module.exports = {
  Complex: n,
  NumComplex
}
