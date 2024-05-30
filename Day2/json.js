const obj1 = {
  name: 'Vasya',
  surname: 'Pupkin',
  add_info: {
    married: true,
    has_children: false
  },
  greeting: function () {
    console.log('Здорово!')
  }
}
const obj1Stringified = JSON.stringify(obj1)
JSON.parse(obj1Stringified)
