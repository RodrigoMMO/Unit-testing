class Root {
  calculator (value) {
    let result

    if (Array.isArray(value))
      result = value.map(n => {
        if (n < 0)
          if (n === -1) return 'i'
          else return `${(-1 * n)**0.5}i`
        else
          return `${n**0.5}`
      })
    else
      if (value < 0)
        if (value === -1) result = 'i'
        else result = `${(-1 * value)**0.5}i`
      else 
        result = `${value**0.5}`

    return result
  }
}

module.exports = new Root()
