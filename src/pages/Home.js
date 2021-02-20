import { useEffect, useState } from 'react'
import { PageContainer, PostCard } from '../components'

export { Home }
function Home () {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData () {
      try {
        const res = await fetch('http://localhost:3001/post')
        const data = await res.json()
        //console.log(data)
        setData(data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])
  return (
    <PageContainer>
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
    </PageContainer>
  )
}
