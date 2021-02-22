import { useEffect, useState } from 'react'
import { PageContainer, PostCard, ProfilesCarousel } from '../components'

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
          float: 'left',
          marginRight: 28,
          maxWidth: 614,
          width: '100%'
        }}
      >
        <ProfilesCarousel />
        <div
          style={{
            flexDirection: 'column',
            paddingBottom: 6400,
            paddingTop: 0
          }}
        >
          {data &&
            data.length > 0 &&
            data.map(({ title, content, ...rest }) => (
              <PostCard
                key={rest.id}
                title={title}
                Content={<p>{content}</p>}
                {...rest}
              ></PostCard>
            ))}
        </div>
      </div>
    </PageContainer>
  )
}
