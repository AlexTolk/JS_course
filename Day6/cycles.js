// >>>--------------------------> for loop <----------------------------<<<
for (let i = 0; i < 5; i++) {
  console.log(i)
}
// 0
// 1
// 2
// 3
// 4
const myArray = [1, 2, 3, 4]

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i])
}
// 1
// 2
// 3
// 4

// >>>----------------------------> forEach <----------------------------<<<

myArray.forEach((el, i) => {
  console.log(el, i)
})
// 1 0
// 2 1
// 3 2
// 4 3

// >>>-----------------------------> while <----------------------------<<<
let i = 0
while (i < 5) {
  console.log(i)
  i++
}
// 0
// 1
// 2
// 3
// 4
while (myArray.length != 1) {
  let poppedElement = myArray.pop()
  console.log(poppedElement)
}
// 4
// 3
// 2
// undefined

// >>>-------------------------> do while <----------------------------<<<
let j = 0
do {
  console.log(j)
  j++
} while (j < 5)
  // 1
  // 2
  // 3
  // 4

// >>>--------------------------> for in <------------------------------<<<
const myObject = {
  x: 10,
  y: true,
  z: 'abc'
}

for (const key in myObject) {
  console.log(key, myObject[key])
}
// x 10
// y true
// z abc

for (const key in myArray) {
  console.log(myArray[key])
}
// 1

// >>>-----------------------> keys and values <-----------------------<<<

Object.keys(myObject).forEach(key => {
  console.log(key, myObject[key])
})
// x 10
// y true
// z abc

Object.values(myObject).forEach(value => {
  console.log(value)
})
// 10
// true
// abc

// >>>----------------------> for of <-------------------------------<<<
const lyrics = 'YMCA'

for (const letter of lyrics) {
  console.log(letter)
}
// Y
// M
// C
// A
