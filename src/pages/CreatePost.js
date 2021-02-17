import { PageContainer } from '../components'
import { useState } from 'react'
export { CreatePost }

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

function CreatePost () {
  const [formState, setFormState] = useState({ title: '', content: '' })

  const handleSubmit = async e => {
    e.preventDefault()
    console.log('values ', formState)
    try {
      const data = await fetch('http://localhost:3000/post', {
        method: 'POST',
        body: JSON.stringify(formState),
        headers
      })
      console.log(data)
    } catch (err) {
      console.error(err)
    }
  }

  const handleChange = (name, e) => {
    setFormState(param => ({ ...param, [name]: e.target.value }))
  }

  const handleChangeContent = e => {}

  const { title, content } = formState
  return (
    <PageContainer>
      <form onSubmit={handleSubmit}>
        <label>title</label>
        <input
          value={title}
          name='title'
          onChange={e => handleChange('title', e)}
        />
        <p>title is: {title}</p>
        <label>content</label>
        <input
          value={content}
          name='content'
          onChange={e => handleChange('content', e)}
        />
        <p>content is: {content}</p>
        <button type='submit'>crea post</button>
      </form>
    </PageContainer>
  )
}
