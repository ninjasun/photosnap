import { makeStyles } from '@material-ui/core/styles'
import './_post-card.scss'
import cardImg from '../../../images/card-img.jpg'
import { useEffect, useState } from 'react'
import { ThumbUpAlt, Favorite, FavoriteBorder } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { useAuth } from '../../../hooks'
import { Link } from 'react-router-dom'
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
    <article
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid rgba(219,219,219, 1)',
        backgroundColor: 'white',
        borderRadius: 3,
        marginBottom: 60,
        padding: 0,
        marginLeft: -1,
        marginRight: -1
      }}
    >
      <header
        style={{
          flexDirection: 'row',
          height: 60,
          padding: 16,
          alignItems: 'center',
          position: 'relative',
          borderBottom: '1px solid rgba(239,239,239,1)',
          display: 'flex'
        }}
      >
        <div
          style={{
            width: 22,
            height: 22,
            border: '1px solid black',
            borderRadius: '50%',
            display: 'inline-flex'
          }}
        ></div>
        <div
          style={{
            marginLeft: 14,
            display: 'flex',
            alignItems: 'flex-start',
            flexGrow: 1,
            flexShrink: 1
          }}
        >
          <span style={{ fontSize: 14 }}>{title}</span>
        </div>
        <div>
          <button
            style={{
              position: 'absolute',
              right: 10,
              width: 22,
              height: 22,
              top: 18
            }}
          ></button>
        </div>
      </header>

      <div
        style={{
          display: 'flex',
          alignItems: 'stretch',
          border: '0 solid #000',
          flexDirection: 'column',
          flexShrink: 0,
          margin: 0,
          padding: 0,
          position: 'relative'
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(var(--bb2,239,239,239),1)',
            display: 'block',
            width: '100%'
          }}
        >
          <div style={{ paddingBottom: '100%' }}>
            <img
              src={cardImg}
              style={{
                height: '100%',
                left: 0,
                position: 'absolute',
                top: 0,
                width: '100%'
              }}
            />
          </div>
        </div>
      </div>
      <div style={{ width: '100%', padding: 0, backgroundColor: 'white' }}>
        <section
          style={{
            paddingLeft: 16,
            paddingRight: 16,
            marginTop: 4,
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <span
            to={'/'}
            style={{
              display: 'flex',
              textTransform: 'uppercase',
              color: 'black',
              listStyle: 'none',
              height: 22,
              width: 22,
              padding: 8,
              boxSizing: 'content-box'
            }}
          >
            <IconButton
              aria-label='like button'
              component='span'
              onClick={handleLike}
            >
              {likeMe ? <Favorite /> : <FavoriteBorder />}
            </IconButton>
          </span>
          <Link
            to={'/'}
            style={{
              display: 'flex',
              textTransform: 'uppercase',
              color: 'black',
              marginLeft: 15,
              height: 22,
              width: 22,
              padding: 8,
              boxSizing: 'content-box'
            }}
          >
            <svg
              aria-label='Activity Feed'
              class='_8-yf5 '
              fill='#262626'
              height='22'
              viewBox='0 0 48 48'
              width='22'
            >
              <path d='M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z'></path>
            </svg>
          </Link>
          <Link
            to={'/'}
            style={{
              display: 'flex',
              textTransform: 'uppercase',
              color: 'black',
              marginLeft: 15,
              height: 22,
              width: 22,
              padding: 8,
              boxSizing: 'content-box'
            }}
          >
            <svg
              aria-label='Activity Feed'
              class='_8-yf5 '
              fill='#262626'
              height='22'
              viewBox='0 0 48 48'
              width='22'
            >
              <path d='M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z'></path>
            </svg>
          </Link>
          <span style={{ marginLeft: 'auto', marginRight: -14 }}>P</span>
        </section>
        <section
          style={{
            paddingLeft: 16,
            marginBottom: 8,
            display: 'flex',
            flexDirection: 'row',
            paddingRight: 16,
            justifyContent: 'flex-end'
          }}
        >
          <div style={{ flex: '1 1 auto' }}>
            <span>liked by Paul and 343 others</span>
          </div>
        </section>
        <section
          style={{
            paddingLeft: 16,
            marginBottom: 8,
            display: 'flex',
            flexDirection: 'row',
            paddingRight: 16,
            borderTop: '1px solid rgba(239,239,239,1)',
            color: 'rgba(142,142,142,1)',
            justifyContent: 'center',
            flexShrink: 0,
            fontSize: 14,
            lineHeight: 18,
            minHeight: 56,
            margin: 0,
            padding: 0,
            position: 'relative'
          }}
        >
          <form
            style={{
              display: 'flex',
              width: '100%',
              position: 'relative',
              height: '100%'
            }}
          >
            <button
              type='button'
              style={{
                backgroundColor: 'white',
                border: 0,
                display: 'inline-block',
                padding: '8px 16px 8px 0'
              }}
            ></button>
            <textarea
              placeholder='Add a comment'
              style={{
                width: '100%',
                height: '18px !inportant',
                border: 'none'
              }}
            ></textarea>
            <button
              type='submit'
              style={{
                backgroundColor: 'white',
                border: 0,
                position: 'absolute',
                right: 10,
                top: 18
              }}
            >
              Post
            </button>
          </form>
        </section>
      </div>
    </article>
  )
}
