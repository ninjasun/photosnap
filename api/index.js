const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())

app.get('/post', (req, res) => {
  //console.log('OK')
  const data = [
    {
      id: 1,
      title: 'Davide',
      content: '',
      like: { count: 340, data: [{ id: 4, name: 'Grace' }] }
    },
    {
      id: 2,
      name: 'Django',
      content: '',
      like: {
        count: 2,
        data: [
          { id: 4, name: 'Grace' },
          { id: 2, name: 'Pinco' }
        ]
      }
    },
    {
      id: 3,
      name: 'Pinco',
      content: '',
      like: { count: 0, data: [] }
    },
    {
      id: 4,
      name: 'Grace',
      content: '',
      like: { count: 1, data: [{ id: 4, name: 'Grace' }] }
    }
  ]
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
