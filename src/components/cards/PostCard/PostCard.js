import { makeStyles } from '@material-ui/core/styles'
import './_post-card.scss'
export { PostCard }

const useStyles = makeStyles(theme => ({
  container: {}
}))

function PostCard ({ title, id, Content, like = null }) {
  const classes = useStyles()
  return (
    <div key={id} className={'container'}>
      <h3 style={{}}>{title}</h3>
      {Content}
      {like ? <div style={{}}>{like.count}</div> : ''}
    </div>
  )
}
