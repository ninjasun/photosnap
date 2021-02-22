import './_layout.scss'
export { Layout }

function Layout ({ Header, Footer, children }) {
  return (
    <div className='layout'>
      {Header}
      <main
        style={{ display: 'flex', width: '100%', justifyContent: 'center' }}
      >
        <section
          style={{
            flexFlow: 'row nowrap',
            maxWidth: 935,
            paddingTop: 30,
            display: 'flex',
            width: '100%'
          }}
        >
          {children}
        </section>
      </main>
      {Footer}
    </div>
  )
}
