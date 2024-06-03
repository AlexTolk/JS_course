// >>>---------------------------> if <--------------------------------<<<
let val = 10

if (val > 10) {
  val += 20
}

console.log(val)
// 30

const person = {
  age: 55
}

if (!person.name) {
  console.log('No name')
}
// >>>----------------------------> if else <----------------------------<<<
if (val < 5) {
  val += 10
} else {
  val -= 10
}
console.log(val)
// 0
// >>>--------------------------> else if <-------------------------------<<<
const age = 25

if (age > 18) {
  console.log('is adult')
} else if ( age >= 12 ) {
  console.log('is teenager')
} else {
  console.log('is child')
}
