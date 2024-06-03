const sumPositiveNumbers = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'one of the arguments is not a number'
  }

  if (a <= 0 || b<= 0) {
    return 'numbers are not positive'
  }

  return a + b
}

console.log(sumPositiveNumbers(-1, 3))
// numbers are not positive
console.log(sumPositiveNumbers(-1, -3))
// numbers are not positive
console.log(sumPositiveNumbers(-1, true))
// one of the arguments is not a number
console.log(sumPositiveNumbers('abc', 3))
// one of the arguments is not a number
console.log(sumPositiveNumbers(14590, 36520))
// 51110
