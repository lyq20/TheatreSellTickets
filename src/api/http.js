import axios from 'axios'
const urlConfig = "http://localhost:8001"
export function getMenu() {
  return axios.get(urlConfig + '/v2/index_entry', {
    params: {
      geohash: '39.99287,116.31025',
      group_type: 1,
      flags: ['F']
    }
  })
}
// 验证码
export function getCaptchas(query) {
  return axios({
    headers: {
      'Content-Type': 'application/json'
    },
    transformRequest: [function (data) {
      data = JSON.stringify(data)
      return data
    }],
    url: urlConfig + '/v1/captchas',
    method: 'post',
    data: {}
  })
}
// 登录
// export function postLogin(query) {
//   return axios({
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     transformRequest: [function (data) {
//       data = JSON.stringify(data)
//       return data
//     }],
//     url: urlConfig + '/v2/login',
//     method: 'post',
//     data: query
//   })
// }
// 轮播图
export function getSwiper(query) {
  return axios.get(urlConfig + '/promotion/v2/users/107/expired_hongbaos', {
    params: query
  })
}
// 商品列表
export function getShopList(query) {
  return axios.get(urlConfig + '/shopping/v1/restaurants/delivery_modes', {
    params: query
  })
}
// 添加订单
export function addOrder(query) {
  return axios({
    url: urlConfig + '/v1/users/107/addresses',
    headers: {
      'Content-Type': 'application/json'
    },
    transformRequest: [function (data) {
      data = JSON.stringify(data)
      return data
    }],
    method: 'post',
    data: query
  })
}
// 查询订单
export function queryOrderList(query) {
  return axios.get(urlConfig + '/v1/users/107/addresses', {
    params: query
  })
}
export function deletOrder(id) {
  return axios({
    url: urlConfig + '/v1/users/107/addresses/' + id,
    method: 'DELETE'
  })
}
// 关于我们
export function queryOurs() {
  return axios.get(urlConfig + '/v3/profile/explain')
}