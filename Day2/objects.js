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


obj1.job = 'tractorist'
obj1.name = 'Petya'
delete obj1.surname
obj1['city'] = 'Gorno-Altaysk'


console.log(`My name is ${obj1.name}. I am a ${obj1.job}. I am from ${obj1.city}`)
obj1.greeting()
