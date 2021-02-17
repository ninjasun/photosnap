import { makeStyles } from '@material-ui/core/styles'

export { PostCard }

const useStyles = makeStyles(theme => ({
  container: {
    width: 500,
    height: 'auto',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 10,
    padding: 5
  }
}))

function PostCard ({ title, id, Content, like }) {
  const classes = useStyles()
  return (
    <div key={id} className={classes.container}>
      <h3 style={{}}>{title}</h3>
      {Content}
      <div style={{}}>{like.count}</div>
    </div>
  )
}
