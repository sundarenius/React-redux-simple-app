import * as actionTypes from './action-types'

export const setSidebar = sidebarBoo => ({
  type: actionTypes.SET_SIDEBAR,
  payload: {
    sidebar: sidebarBoo
  }
})

export const setFlickrGallery = pics => ({
  type: actionTypes.SET_FLICKR_GALLERY,
  payload: {
    flickrGallery: pics
  }
})

export const addToArchive = pic => ({
  type: actionTypes.ADD_TO_ARCHIVE,
  payload: {
    image: pic
  }
})

export const deleteImg = pic => ({
  type: actionTypes.DELETE_IMG,
  payload: {
    image: pic
  }
})

export const flickGalleryApiReq = (callbackApi) => {
  return async dispatch => {
    try {
      const gallery = await callbackApi()
      const { data } = gallery
      const images = data.photos.photo.splice(0, 50)
      dispatch(setFlickrGallery(images))
    } catch (err) {
      console.log(err)
    }
  }
}
