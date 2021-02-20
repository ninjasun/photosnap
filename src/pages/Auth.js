import { useState } from 'react'
import { PageContainer } from '../components'
import { useAuth } from '../hooks'
import { useHistory } from 'react-router-dom'
export { Auth }

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

function Auth () {
  const [formState, setFormState] = useState({ username: '', password: '' })
  const { setAuthState } = useAuth()
  const history = useHistory()

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:3001/login', {
        method: 'POST',
        body: JSON.stringify(formState),
        headers
      })
      const data = await res.json()

      const loginData = {
        userInfo: data,
        token: 'dummy token'
      }

      setAuthState(loginData)
      history.push('/')
    } catch (err) {
      console.error(err)
    }
  }

  const handleChange = (name, e) => {
    setFormState(param => ({ ...param, [name]: e.target.value }))
  }

  const { username, password } = formState
  return (
    <PageContainer>
      <form onSubmit={handleSubmit}>
        <label>user</label>
        <input
          onChange={e => handleChange('username', e)}
          name='username'
          value={username}
        />
        <label>password</label>
        <input
          onChange={e => handleChange('password', e)}
          name='password'
          value={password}
        />
        <button type='submit'>login</button>
      </form>
    </PageContainer>
  )
}
