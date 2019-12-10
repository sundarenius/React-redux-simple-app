import axios from 'axios'

export const GET = (endpoint) => {
  return axios({
    method: 'get',
    url: `${endpoint}`
  })
}
