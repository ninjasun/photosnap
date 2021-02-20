import './App.scss'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, CreatePost, Auth } from './pages'
import { Layout, Header, Footer } from './common'
import { AuthProvider } from './provider/useAuth'

function App () {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Layout Header={<Header />} Footer={<Footer />}>
            <Switch>
              <Route path='/login'>
                <Auth />
              </Route>
              <Route path='/create-post'>
                <CreatePost />
              </Route>
              <Route path='/' exact>
                <Home />
              </Route>
              <Route path='*'>
                <Home />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
