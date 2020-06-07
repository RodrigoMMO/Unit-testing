const fs = require('fs')
const faker = require('faker')
const random = require('random')

const dbLocation = `${__dirname}/database.json`

const writeFile = db => {
  return new Promise((resolve, reject) => {
    fs.writeFile(dbLocation, JSON.stringify(db, null, 2), error => {
      if (error) reject(error)
      resolve('Saved successfully')
    })
  })
}

class MockUser {
  constructor (id = null) {
    this.name     = faker.name.firstName()
    this.lastName = faker.name.lastName()
    this.id       = id || faker.random.uuid()
    this.email    = faker.internet.email().toLowerCase()
  }

  toString () {
    return `{\n\tname: ${this.name},\n\tlastName: ${this.lastName},\n\tid: ${this.id},\n\temail: ${this.email}\n}`
  }
}

class DBController {

  constructor () {
    this.database = []
  }

  _emptiness () {
    return this.database.length === 0
  }

  create () {
    const newUser = new MockUser()
    this.database.push(newUser)
    return newUser
  }

  async read () {
    await writeFile(this.database)

    return this.database
  }

  update () {
    if (this._emptiness())
      return 'Empty database'

    const userToUpdate = random.int(0, this.database.length - 1)
    this.database[userToUpdate] = new MockUser(this.database[userToUpdate].id)

    return this.database[userToUpdate]
  }

  delete () {
    if (this._emptiness())
      return 'Empty database'

    const userToDelete = random.int(0, this.database.length - 1)

    return this.database.splice(userToDelete, 1)[0]
  }

  databaseSize () {
    return this.database.length
  }
}

module.exports = { DBController, MockUser }
