const myArray = [1, 2, 3]
console.log(myArray)
// [1, 2, 3]

myArray.push(4)
console.log(myArray)
// [1, 2, 3, 4]

const poppedElement = myArray.pop()
console.log(myArray)
// [1, 2, 3]
console.log(poppedElement)
// 4

myArray.unshift(0)
console.log(myArray)
// [0, 1, 2, 3]

const shiftedElement = myArray.shift()
console.log(myArray)
// [1, 2, 3]
console.log(shiftedElement)
// 0
