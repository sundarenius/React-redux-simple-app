import React from 'react'
import { connect } from 'react-redux'
import ImgCard from 'components/ImgCard'
import * as actions from '../redux/actions/actions'
import Grid from '@material-ui/core/Grid';

class Main extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    console.log('Main class')
    console.log(this.props)

    return (
      <div className="main-page">
        <Grid container align="center" spacing={5}>
          <Grid item xs={12}>
            <h1>Main page</h1>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={5}>
              {[0, 1, 2].map(value => (
                <Grid key={value} item>
                  <ImgCard />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  dummyState: state.dummyState
})

const matActionsToProps = {
  dummyAction: actions.dummyAction
}

export default connect(
  mapStateToProps,
  matActionsToProps
)(Main)
