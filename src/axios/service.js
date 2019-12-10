import { GET } from './index'

const getFlickrUrl = (searchString) => {
  const flickrAPIkey = process.env.FLICKR_API_KEY || '98fe32903b79825b53f0ee120a1a4298'
  const flickrBase = `https://api.flickr.com/services/rest/`
  const flickParams = `?method=flickr.photos.search&api_key=${flickrAPIkey}&text=searchString&extras=url_q, url_o, url_m&format=json&tags=${searchString}&license=2,3,4,5,6,9&sort=relevance&parse_tags=1&nojsoncallback=1`
  return `${flickrBase}${flickParams}`
}


export const getFlickr = (searchString) => GET(getFlickrUrl(searchString))
