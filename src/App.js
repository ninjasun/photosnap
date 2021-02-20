import './App.scss'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, CreatePost, Auth } from './pages'
import { Layout, Header, Footer, PrivateRoute } from './common'
import { AuthProvider } from './hooks/'

function App () {
  return (
    <div className='App'>
      <Router>
        <AuthProvider>
          <Layout Header={<Header />} Footer={<Footer />}>
            <Switch>
              <Route path='/login'>
                <Auth />
              </Route>
              <PrivateRoute path='/create-post'>
                <CreatePost />
              </PrivateRoute>
              <PrivateRoute path='/' exact>
                <Home />
              </PrivateRoute>
              <PrivateRoute path='*'>
                <Home />
              </PrivateRoute>
            </Switch>
          </Layout>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
