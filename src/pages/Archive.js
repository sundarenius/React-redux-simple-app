import React from 'react'
import { connect } from 'react-redux'
import ImgCard from '~/components/ImgCard'
import Grid from '@material-ui/core/Grid'
import * as actions from '~/redux/actions/actions'

class Archive extends React.Component {
  deleteFromArchive = (img) => {
    this.props.deleteImg(img)
  }

  render () {
    return (
      <React.Fragment>
        <Grid style={{ marginTop: '60px' }} item xs={12}>
          <h1 style={{ textAlign: 'center' }}>Your Archive</h1>
            <Grid container justify="center" spacing={2}>
              { this.props.archive && this.props.archive.map(pic => (
                <Grid key={pic} xs={12} sm={6} item>
                  <ImgCard
                    btnText="Delete from archive"
                    imgClickEvent={this.deleteFromArchive}
                    image={pic} />
                </Grid>
              )) }
            </Grid>
          </Grid>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  archive: state.archive
})

const mapActionsToProps = {
  deleteImg: actions.deleteImg
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Archive)
