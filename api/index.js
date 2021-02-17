const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())

app.get('/post', (req, res) => {
  //console.log('OK')
  const data = [
    { id: 1, name: 'Davide' },
    { id: 2, name: 'Django' },
    { id: 3, name: 'Pinco' },
    { id: 4, name: 'Grace' }
  ]
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
