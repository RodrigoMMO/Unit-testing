class StringHelper {
  cleaner(string, code) {
    let fullName
    const hasSecondName = !string.includes('//')
    if (hasSecondName)
      fullName = string.replace('//', ' ').replace(/\u002f/g, ' ')
    else
      fullName = string.replace(/\u002f/g, ' ')
    fullName = fullName.split(' ')
    switch (code) {
      case 1:
        return fullName[0]
      case 2:
        return hasSecondName ? fullName[1] : 'This person doesn\'t have second name'
      case 3:
        return hasSecondName ? fullName[2] : fullName[1]
      case 4:
        return hasSecondName ? fullName[3] : fullName[2]
    }
  }

  aPattern(string) {
    return this.cleaner(string, 3)
  }

  aMaternal(string) {
    return this.cleaner(string, 4)
  }

  aName1(string) {
    return this.cleaner(string, 1)
  }

  aName2(string) {
    return this.cleaner(string, 2)
  }
}

const sh = new StringHelper()

module.exports = sh
