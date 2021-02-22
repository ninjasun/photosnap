import { makeStyles } from '@material-ui/core/styles'
import './_post-card.scss'
import { useEffect, useState } from 'react'
import { ThumbUpAlt, Favorite, FavoriteBorder } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { useAuth } from '../../../hooks'
export { PostCard }
const useStyles = makeStyles(theme => ({
  container: {}
}))

function PostCard ({ title, id, Content }) {
  const classes = useStyles()
  const { authState } = useAuth()
  const [totalLike, setTotalLike] = useState('')
  const [likeMe, setLikeMe] = useState(false)

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const res = await fetch(`http://localhost:3001/likes/${id}`)
        const data = await res.json()
        console.log('likes received: ', data)
        /** count/users that likes/ ilike? */
        let dummy = {
          count: 2,
          likes: [
            { NoteId: 1, AuthorId: 2, user: { id: 2, nome: 'Grace' } },
            { NoteId: 1, AuthorId: 1, user: { id: 1, nome: 'Davide' } }
          ]
        }
        setTotalLike(dummy.count)
        const doIlike = dummy.likes.some(
          like => like.AuthorId === authState.userInfo.id
        )
        setLikeMe(doIlike)
      } catch (err) {
        console.error(err)
      }
    }
    fetchLikes()
  }, [id])

  const handleLike = async e => {
    e.preventDefault()
    try {
      const res = await fetch(`http://localhost:3001/likes/${id}`, {
        method: 'PUT'
      })
      //const data = await res.json()
      setLikeMe(!likeMe)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div key={id} className={'container'}>
      <h3 style={{}}>{title}</h3>
      {Content}
      <div style={{ width: '100%', height: 40, border: '1px solid grey' }}>
        <IconButton
          aria-label='like button'
          component='span'
          onClick={handleLike}
        >
          {likeMe ? <Favorite /> : <FavoriteBorder />}
        </IconButton>
        <span style={{ marginLeft: 20 }}>{totalLike} likes</span>
      </div>
    </div>
  )
}
