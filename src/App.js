import { useEffect, useState } from 'react'
import './App.css'

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
        <button onClick={submit}>call ap</button>
        <div style={{ display: 'flex', width: 500 }}>
          <ul>
            {data &&
              data.length > 0 &&
              data.map(item => <li key={item.id}>{item.name}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
