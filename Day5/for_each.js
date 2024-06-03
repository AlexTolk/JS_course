const myArray = [2, 4, 6, 8]
console.log(myArray)
// [2, 4, 6, 8]

const res = myArray.forEach(el => console.log(el ** 4))
// 16
// 256
// 1296
// 4096

console.log(res)
// undefined

console.log(myArray)
// [2, 4, 6, 8]

const newArray = myArray.map(el => {
  return el ** 4
})

console.log(newArray)
// [16, 256, 1296, 4096]
console.log(myArray)
// [2, 4, 6, 8]
