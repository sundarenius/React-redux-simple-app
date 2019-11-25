import React from 'react'
import { connect } from 'react-redux'

class Profile extends React.Component {
  render () {
    return <h1>Profile page</h1>
  }
}

export default connect()(Profile)
