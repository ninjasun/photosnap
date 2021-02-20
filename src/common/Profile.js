import { useAuth } from '../hooks/'
export { Profile }

const Profile = function () {
  const { authState, logout } = useAuth()

  return (
    <div
      style={{
        marginRight: 20,
        display: 'flex',
        minWidth: 150,
        justifyContent: 'space-between'
      }}
    >
      {authState && authState.userInfo ? (
        <>
          <h6 style={{ color: 'white' }}>{authState.userInfo.nome}</h6>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <button
              onClick={logout}
              style={{
                padding: '6px 8px 6px 8px',
                backgroundColor: 'white',
                color: 'black',
                cursor: 'pointer'
              }}
            >
              logout
            </button>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  )
}
