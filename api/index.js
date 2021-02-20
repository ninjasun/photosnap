const express = require('express')
const app = express()
var cors = require('cors')
const port = 3001

app.use(cors())
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const _CONTENT =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
const users = [
  {
    id: 1,
    nome: 'Davide',
    password: 'password',
    role: 'Developer'
  },
  {
    id: 2,
    nome: 'Grace',
    password: 'password',
    role: 'Developer'
  }
]
let likes = [
  {
    NoteId: 1,
    AuthorId: 2
  },
  {
    NoteId: 1,
    AuthorId: 1
  },
  {
    NoteId: 3,
    AuthorId: 1
  }
]

let data = [
  {
    id: 1,
    title: 'This is a post about software',
    content: _CONTENT,
    AuthorId: 1
  },
  {
    id: 2,
    title: 'This is a post about Django',
    content: _CONTENT,
    AuthorId: 1
  },
  {
    id: 3,
    title: 'This is a post about nature',
    content: _CONTENT,
    AuthorId: 2
  }
]

app.post('/like', (req, res) => {
  const { PostId } = req.body
  //get author id

  res.status(201)
  res.send()
})

app.get('/post', (req, res) => {
  //console.log('OK')
  res.status(200)
  res.send(data)
})

app.post('/post', (req, res) => {
  //console.log('OK')
  console.log(req.body)
  const { title, content } = req.body
  const newPost = {
    title,
    content,
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 5,
    like: {}
  }
  data.push(newPost)
  res.status(201)
  res.send(newPost)
})

/* update a post **/
app.put('/post/:id', (req, res) => {
  //console.log('OK')
  console.log(req.params)
  const { title, content } = req.body
  let updatedPost = null
  data = data.map(post => {
    if (post.id === req.params.id) {
      updatedPost = {
        ...post,
        title,
        content,
        updatedAt: new Date()
      }
      return updatedPost
    }
    return post
  })

  res.status(200)
  res.send(updatedPost)
})

/* update a post **/
app.delete('/post/:id', (req, res) => {
  //console.log('OK')

  data = data.filter(post => {
    if (post.id !== req.params.id) {
      return post
    }
  })

  res.status(200)
  res.send()
})

app.get('/post/:id', (req, res) => {
  //console.log('OK')
  console.log(req.body)
  const { title, content } = req.body
  const newPost = {
    title,
    content,
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 5,
    like: {}
  }
  data.push(newPost)
  res.status(201)
  res.send(newPost)
})

app.post('/login', (req, res) => {
  try {
    const { username, password } = req.body
    let user = null
    console.log('username ', username)
    user = users.filter(user => {
      return user.nome === username && user.password === password
    })

    console.log('user ', user)

    res.status(200)
    res.send(user[0])
  } catch (err) {
    console.error(err)
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
