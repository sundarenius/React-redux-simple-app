import React from 'react'
import { connect } from 'react-redux'
import ImgCard from '~/components/ImgCard'
import * as actions from '~/redux/actions/actions'
import Grid from '@material-ui/core/Grid'
import { getFlickr } from '~/axios/service'
import InputBase from '@material-ui/core/InputBase'
import Button from '@material-ui/core/Button'

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.updateSearchStr = this.updateSearchStr.bind(this)
    this.getImages = this.getImages.bind(this)
    this.saveToArchive = this.saveToArchive.bind(this)
    this.state = { 
      searchStr: 'dog'
     }
  }

  saveToArchive (img) {
    console.log('saveToArchive')
    console.log(img)
    this.props.saveToArchive(img)
  }

  updateSearchStr (e) {
    const newState = {
      searchStr: e.target.value
    }
    this.setState(newState)
  }

  async getImages () {
    const { searchStr } = this.state
    const callbackFunc = () => getFlickr(searchStr)
    this.props.flickGalleryApiReq(callbackFunc)
  }

  async componentDidMount () {
    this.getImages()
  }

  render () {
    return (
      <div className="main-page">
        <Grid container align="center" spacing={5}>
          <Grid item xs={12}>
            <h1>Main page</h1>
            <InputBase
              onChange={this.updateSearchStr}
              placeholder="Search…"
              className="input-style"
              inputProps={{ 'aria-label': 'search' }}
            />
            <div></div>
            <Button onClick={this.getImages} color="primary" variant="contained">Search</Button>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              { this.props.flickrGallery && this.props.flickrGallery.map(pic => (
                <Grid key={pic.id} xs={12} sm={6} item>
                  <ImgCard
                    btnText="Save to archive"
                    imgClickEvent={this.saveToArchive}
                    image={pic.url_m}
                    text={pic.title} />
                </Grid>
              )) }
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  flickrGallery: state.flickrGallery
})

const matActionsToProps = {
  setFlickrGallery: actions.setFlickrGallery,
  flickGalleryApiReq: actions.flickGalleryApiReq,
  saveToArchive: actions.addToArchive
}

export default connect(
  mapStateToProps,
  matActionsToProps
)(Main)
