import './_layout.scss'
export { Layout }

function Layout ({ Header, Footer, children }) {
  return (
    <div className='layout'>
      {Header}
      <main
        style={{
          flexFlow: 'row nowrap',
          maxWidth: 935,
          paddingTop: 30,
          display: 'flex'
        }}
      >
        {children}
      </main>

      {Footer}
    </div>
  )
}
