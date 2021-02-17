import { useEffect, useState } from 'react'
import './App.css'
import no from 'not-defined'

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
            data.map(item => (
              <div
                key={item.id}
                style={{
                  width: 300,
                  height: 'auto',
                  border: '1px solid black',
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  margin: 10,
                  padding: 5
                }}
              >
                <div style={{}}>{item.name}</div>
                <div style={{}}>{item.content}</div>
                <div style={{}}>{item.like.count}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default App
