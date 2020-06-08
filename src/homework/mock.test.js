const { DBController, MockUser } = require('./mock')

const dbc = new DBController()
// const mu = new MockUser()

test('Empty database', () => {
  expect(dbc.databaseSize()).toBe(0)
})

test('Update empty database', () => {
  expect(dbc.update()).toBe('Empty database')
})

test('Delete in empty database', () => {
  expect(dbc.delete()).toBe('Empty database')
})

test('Adding new user', () => {
  expect(dbc.create()).toBeInstanceOf(MockUser)
})

test('Read database', async () => {
  const result = await dbc.read()
  expect(result).toBeInstanceOf(Array)
})

test('Update element from database', () => {
  const userUpdated = dbc.update()
  console.log(`Updated user: ${userUpdated}`)
  expect(userUpdated).toBeInstanceOf(MockUser)
})

test('Delete element from database', () => {
  const deletedUser = dbc.delete()
  console.log(`Deleted user: ${deletedUser}`)
  console.log('Database size after deleting the user: ' + dbc.databaseSize())
  expect(deletedUser).toBeInstanceOf(MockUser)
})

