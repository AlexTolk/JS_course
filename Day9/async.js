async function myFn1() {
  return 'yes!'
}

const myFn2 = async () => {
  throw new Error('There was an error!')
}

myFn1()
  .then(value => console.log(value))
  .catch(error => console.log(error.message))

myFn2()
  .then(value => console.log(value))
  .catch(error => console.log(error.message))
