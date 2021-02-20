import { useContext } from 'react'
import { AuthContext } from './'
// We also create a simple custom hook to read these values from.
const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error(
      '`useAuth` hook must be used within a `AuthProvider` component'
    )
  }
  return context
}
export { useAuth }
