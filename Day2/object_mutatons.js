let person1 = {
  name: 'Bob',
  age: 25
}

const person2 = person1
person2.age = 26

console.log(person1.age)

let person3 = Object.assign({}, person1)
person3.age = 30

console.log(person1.age)
console.log(person3.age)

let person4 = { ...person1 }
person4.name = 'Alice'

console.log(person4.name)
console.log(person1.name)

const person5 = JSON.parse(JSON.stringify(person1))
person5.name = 'Sean'

console.log(person5.name)
console.log(person1.name)
