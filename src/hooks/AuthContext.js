import React from 'react'
import { useHistory } from 'react-router-dom'

const AuthContext = React.createContext()
const { Provider } = AuthContext

const AuthProvider = ({ children }) => {
  const history = useHistory()
  const userInfo = null
  const token = ''

  const [authState, setAuthState] = React.useState({
    userInfo: userInfo,
    token
  })

  const setAuthInfo = ({ userInfo, token = '' }) => {
    setAuthState({
      userInfo,
      token
    })
  }

  const logout = () => {
    setAuthState({
      userInfo: null,
      token: null
    })

    history.push('/login')
  }

  const isAuthenticated = () => {
    if (!authState.token) {
      return false
    }
    if (new Date().getTime() / 1000 < authState.expiresAt) {
      return true
    }
    /** expired */
    logout()
    return false
  }

  const values = {
    authState,
    logout,
    isAuthenticated,
    setAuthState: loginData => setAuthInfo(loginData)
  }

  return <Provider value={values}>{children}</Provider>
}

export { AuthContext, AuthProvider }
