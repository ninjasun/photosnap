import { Link } from 'react-router-dom'
import { Profile } from './Profile'
export { Header }
function Header () {
  return (
    <div
      style={{
        height: 75,
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex'
      }}
    >
      <nav style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <ul
          style={{
            display: 'flex',
            justifyContent: 'center',
            textTransform: 'uppercase',
            color: 'white',
            listStyle: 'none'
          }}
        >
          <li>
            <Link
              to={'/'}
              style={{
                width: 160,
                display: 'flex',
                textTransform: 'uppercase',
                color: 'white',
                listStyle: 'none'
              }}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to={'/create-post'}
              style={{
                width: 160,
                display: 'flex',
                textTransform: 'uppercase',
                color: 'white',
                listStyle: 'none'
              }}
            >
              new post
            </Link>
          </li>
        </ul>
      </nav>
      <Profile
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          alignSelf: 'center',
          width: 200
        }}
      />
    </div>
  )
}
