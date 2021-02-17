const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())

const _CONTENT =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
app.get('/post', (req, res) => {
  //console.log('OK')
  const data = [
    {
      id: 1,
      title: 'Davide',
      content: _CONTENT,
      like: { count: 340, data: [{ id: 4, name: 'Grace' }] }
    },
    {
      id: 2,
      title: 'Django',
      content: _CONTENT,
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
      title: 'Pinco',
      content: _CONTENT,
      like: { count: 0, data: [] }
    },
    {
      id: 4,
      title: 'Grace',
      content: 'ciao',
      like: { count: 1, data: [{ id: 4, name: 'Grace' }] }
    }
  ]
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
