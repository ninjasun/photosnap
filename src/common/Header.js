import { Link } from 'react-router-dom'

export { Header }
function Header () {
  return (
    <div
      style={{
        height: 75,
        width: '100%',
        backgroundColor: 'black',
        color: 'white'
      }}
    >
      <nav>
        <ul>
          <li>
            <Link to={'/'}>home</Link>{' '}
          </li>
          <li>
            <Link to={'/create-post'}>new post</Link>{' '}
          </li>
        </ul>
      </nav>
    </div>
  )
}
