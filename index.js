const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World! Hello Hello Hello</h1>')
})

const PORT = 8080

// testing workflows

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})