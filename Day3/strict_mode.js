'use strict'

function myFn() {
  a = 5
  // Uncaught ReferenceError: a is not defined at myFn
  console.log(a)
}

myFn()

console.log(a)
