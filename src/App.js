import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from 'react-router-dom'

import { connect } from 'react-redux'
import { setSidebar } from '~/redux/actions/actions'

import Main from '~/pages/Main'
import Archive from '~/pages/Archive'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Container from '@material-ui/core/Container'
import Sidebar from '~/components/Sidebar'

const App = (props) => {
  const setSidebar = () => {
    return props.setSidebar(!props.sidebar)
  }

  return (
    <React.Fragment>
      <Router>
        <Header
          setSidebar={setSidebar} />
        <Sidebar
          setSidebar={setSidebar}
          sidebar={props.sidebar} />
        <Container maxWidth="sm">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/archive">
              <Archive />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </Router>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  sidebar: state.sidebar
})

const mapActionsToProps = {
  setSidebar
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App)
