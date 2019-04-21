// import axios from 'axios'
// axios.defaults.baseURL = 'http://127.0.0.1:8080/'
// axios.defaults.headers.post['Content-Type'] = 'application/json'
// axios.interceptors.response.use(function (response) {
//   return response.data
// }, function (error) {
//   return Promise.reject(error)
// })
import axios from 'axios'
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})
axios.defaults.baseURL = 'http://127.0.0.1:8080/'

export function homes () {
  return axios.get('home')
}
export function getClothesnav () {
  return axios.get('home')
}

export function getstore () {
  return axios.get('store')
}

export function remen () {
  return axios.get('remen')
}

export function getData () {
  return axios.get('/live')
}
export function getHot () {
  return axios.get('/hot')
}
export function getWear () {
  return axios.get('/wear')
}
export function getCart () {
  return axios.get('/cart')
}

export function fenlei () {
  return axios.get('fenlei')
}
