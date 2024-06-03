function multByFactor(value, multiplier = 1) {
  return value * multiplier
}

console.log(multByFactor(3, 2))
console.log(multByFactor(3))

// func_exp
const multByFactor = function(value, multiplier = 1) {
  return value * multiplier
}
console.log(multByFactor(3, 2))
console.log(multByFactor(3))

// arrow function
// (value, multiplier = 1) => {
//   return value * multiplier
// }

const newPost = (post, addedAt = Date()) => ({
  ...post,
  addedAt,
})

const firstPost = {
  id: 1,
  author: 'Alex'
}

const add_post = newPost(firstPost)
console.log(add_post)
