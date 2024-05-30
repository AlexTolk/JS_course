function sum(a, b) {
  const c = a + b
  return c
}

console.log(sum(10453, 983402))

console.dir(sum)

function increaseAge(person) {
  const updatedPerson = Object.assign({}, person)
  updatedPerson += 1
  return updatedPerson
}

let person1 = {
  name: 'Bob',
  age: 25
}


const updatedPerson1 = increaseAge(person1)
console.log(person1.age)
console.log(updatedPerson1.age)
