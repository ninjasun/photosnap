import { useEffect, useState } from 'react'
import './App.scss'
import no from 'not-defined'
import { PostCard } from './components'

function App () {
  const [data, setData] = useState([])

  //post
  const submit = () => {}

  useEffect(() => {
    async function fetchData () {
      try {
        const res = await fetch('http://localhost:3000/post')
        const data = await res.json()
        console.log(data)
        setData(data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='App'>
      <div>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {data &&
            data.length > 0 &&
            data.map(({ id, title, content, like }) => (
              <PostCard
                key={id}
                title={title}
                Content={<p>{content}</p>}
                like={like}
              ></PostCard>
            ))}
        </div>
      </div>
    </div>
  )
}

export default App
