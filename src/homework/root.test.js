const root = require('./root')

test('2nd root of 4 equals to 2', () => {
  expect(root.calculator(4)).toBe('2')
})

test('2nd root of -4 equals to 2i', () => {
  expect(root.calculator(-4)).toBe('2i')
})

test('2nd root of [1, 4, 9] equals to [1, 2, 3]', () => {
  expect(root.calculator([1, 4, 9])).toEqual(['1', '2', '3'])
})

test('2nd root of [-1, -4, -9] equals to [i, 2i, 3i]', () => {
  expect(root.calculator([-1, -4, -9])).toEqual(['i', '2i', '3i'])
})

test('2nd root of [-1, 4, -9] equals to [i, 2, 3i]', () => {
  expect(root.calculator([-1, 4, -9])).toEqual(['i', '2', '3i'])
})
