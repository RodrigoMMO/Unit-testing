const sum = require('./sum')
const root = require('./root')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('2nd root of -4', () => {
  expect(root(-4)).toBe('The number can\'t  be  negative')
})

test('3rd root of -8', () => {
  expect(root(-8, 3)).toBe(-2)
})

test('3rd root of 8', () => {
  expect(root(8, 3)).toBe(2)
})

test('2nd root of 9', () => {
  expect(root(9)).toBe(3)
})

test('0th root of 9', () => {
  expect(root(9, 0)).toBe('Undefined')
})

test('2nd root of 0', () => {
  expect(root(0)).toBe(0)
})
