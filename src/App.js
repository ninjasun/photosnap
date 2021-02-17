import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, CreatePost } from './pages'
import { Layout, Header, Footer } from './common'

function App () {
  return (
    <div className='App'>
      <Router>
        <Layout Header={<Header />} Footer={<Footer />}>
          <Switch>
            <Route path='/create-post'>
              <CreatePost />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  )
}

export default App
