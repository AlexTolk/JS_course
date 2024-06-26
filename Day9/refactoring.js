const getData = async (url) => {
  const res = await fetch(url)
  const json = await res.json()
  return json
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'

try {
  const data = await getData(url)
  console.log(data)
} catch (error) {
  console.log(error.message)
}
