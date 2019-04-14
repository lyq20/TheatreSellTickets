import axios from 'axios'

export function userName() {
  return axios.get('/v1/user', {
    params: {
      url_id: 1
    }
  })
}