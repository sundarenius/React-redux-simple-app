import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from 'react-router-dom'

import Main from './pages/Main'
import Profile from './pages/Profile'
import Header from './components/Header'
import Footer from './components/Footer'
import Container from '@material-ui/core/Container';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Container maxWidth="sm">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </Container>
      </Router>
      <Footer />
    </React.Fragment>
  )
}

export default App
