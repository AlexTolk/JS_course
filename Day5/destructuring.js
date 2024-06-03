// >>>-----------------> destructuring an object <----------------------------<<<
const userProfile = {
  name: 'Alexander Tolkachev',
  commentQty: 2456,
  hasSignedAgreement: true
}

const { name } = userProfile
console.log(name)
// 'Alexander Tolkachev'

// >>>--------------------> destructuring an array <-----------------------<<<
const favFood = ['pizza', 'pasta', 'schintzel']

const [food1, food2] = favFood
console.log(food1)
// 'pizza'
console.log(food2)
// 'pasta'

// >>>-----------------> destructuring a function <-------------------------<<<

const userInfo = ({ name, commentQty }) => {
  if (!commentQty) {
    return `${name} has no comments`
  }
  return `${name} has ${commentQty} comments`
}
userInfo(userProfile)
// 'Alexander Tolkachev has 2456 comments'
