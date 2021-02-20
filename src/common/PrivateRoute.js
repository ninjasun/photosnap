import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../hooks'

export { PrivateRoute }
function PrivateRoute ({ children, ...rest }) {
  const { authState } = useAuth()

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authState.userInfo ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}
