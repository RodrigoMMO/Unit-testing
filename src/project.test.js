const root = require('./root')
const { converterKGP, converterKMM } = require('./converter') 
const geometry = require('./geometry')
const stringHelper = require('./stringHelper')
const { Complex, NumComplex } = require('./complex')

// Unit testing for the root

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

// Unit testing for the converter

test('1km to miles', () => {
  expect(converterKMM(1, 'mile')).toBe(0.621371)
})

test('7km to miles', () => {
  expect(converterKMM(7, 'mile')).toBe(4.349597)
})

test('1 mile to km', () => {
  expect(converterKMM(1, 'km')).toBe(1.60934)
})

test('7 mile to km', () => {
  expect(converterKMM(7, 'km')).toBe(11.26538)
})

test('1 kg to pounds', () => {
  expect(converterKGP(1, 'lb')).toBe(2.20462)
})

test('7 kg to pounds', () => {
  expect(converterKGP(7, 'lb')).toBe(15.43234)
})

test('1 lb to kg', () => {
  expect(converterKGP(1, 'kg')).toBe(0.453592)
})

test('7 lb to kg', () => {
  expect(converterKGP(7, 'kg')).toBe(3.175144)
})

// Unit testing for the distance

test('Distance between (1, 1) and (3, 4)', () => {
  expect(geometry.distance(1, 1, 3, 4)).toBe(3.6056)
})

test('Distance between (-1, 1) and (-3, 4)', () => {
  expect(geometry.distance(-1, 1, -3, 4)).toBe(3.6056)
})

test('Distance between (-1, -1) and (-3, -4)', () => {
  expect(geometry.distance(-1, -1, -3, -4)).toBe(3.6056)
})

test('Distance between (1, -1) and (3, -4)', () => {
  expect(geometry.distance(1, -1, 3, -4)).toBe(3.6056)
})

test('Distance between (1, 1) and (1, 1)', () => {
  expect(geometry.distance(1, 1, 1, 1)).toBe(-1)
})

// Unit testing for the String Helper

test('First name of Steve/Anthony/Luzquiños/Agama', () => {
  expect(stringHelper.aName1('Steve/Anthony/Luzquiños/Agama')).toBe('Steve')
})

test('Second name of Steve/Anthony/Luzquiños/Agama', () => {
  expect(stringHelper.aName2('Steve/Anthony/Luzquiños/Agama')).toBe('Anthony')
})

test('First last name of Steve/Anthony/Luzquiños/Agama', () => {
  expect(stringHelper.aPattern('Steve/Anthony/Luzquiños/Agama')).toBe('Luzquiños')
})

test('Second last name of Steve/Anthony/Luzquiños/Agama', () => {
  expect(stringHelper.aMaternal('Steve/Anthony/Luzquiños/Agama')).toBe('Agama')
})

test('Second name of Steve//Luzquiños/Agama', () => {
  expect(stringHelper.aName2('Steve//Luzquiños/Agama')).toBe('This person doesn\'t have second name')
})

// Unit testing for the complex operation
const n1 = new NumComplex(1, 1)
const n2 = new NumComplex(1, 1)

test('(1+i) + (1+i)', () => {
  expect(Complex.addition(n1, n2)).toBe('2 + 2i')
})

test('(1+i) - (1+i)', () => {
  expect(Complex.subtraction(n1, n2)).toBe('0')
})

test('(1+i) * (1+i)', () => {
  expect(Complex.multiplication(n1, n2)).toBe('0 + 2i')
})

test('(1+i) / (1+i)', () => {
  expect(Complex.division(n1, n2)).toBe('1')
})
