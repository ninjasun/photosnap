import './_layout.scss'
export { Layout }

function Layout ({ Header, Footer, children }) {
  return (
    <div className='layout'>
      {Header}
      {children}
      {Footer}
    </div>
  )
}
