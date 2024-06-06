class Comment {
  constructor(text) {
    this.text = text
    this.votesQty = 0
  }

  upvote() {
    this.votesQty += 1
  }

  static mergeComments(first, second) {
    return `${first} ${second}`
  }
}

const firstComment = new Comment("i'm first")

firstComment.upvote()

console.log(firstComment.text)
// i'm first
console.log(firstComment.votesQty)
// 1
firstComment instanceof Comment
// true
firstComment instanceof Object
// true
firstComment instanceof Array
// false
console.log(firstComment.hasOwnProperty('text'))
// true
console.log(firstComment.hasOwnProperty('upvote'))
// false

const secondComment = new Comment("i'm second")
const thirdComment = new Comment("i'm third")

secondComment.upvote()
secondComment.upvote()
secondComment.upvote()
secondComment.upvote()
console.log(secondComment)
// Comment { text: "i'm second", votesQty: 4 }
thirdComment.upvote()
thirdComment.upvote()
thirdComment.upvote()
thirdComment.upvote()
thirdComment.upvote()
thirdComment.upvote()
console.log(thirdComment)
// Comment { text: "i'm third", votesQty: 6 }
Comment.mergeComments('hello ', 'world')
// hello world
firstComment.mergeComments('hello ', 'world')
// TypeError: firstComment.mergeComments is not a function
