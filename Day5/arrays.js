const myArray = [1, 2, 3]
console.log(myArray)

const myArray2 = new Array(1, 2, 3)
console.log(myArray2)

myArray === myArray2
// false

const myArray3 = myArray

myArray3 === myArray
// true

console.log(myArray[0])
// 1

myArray[2] = 'abc'
console.log(myArray)
// [1, 2, 'abc']

myArray[3] = true
console.log(myArray.length)
// 4
console.log(myArray)
// [1, 2, 'abc', true]
