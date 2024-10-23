import request from '../utils/request'


export function getHomeData() {
  return request({
    url: '/admin-api/ecs/home-page/get-home-data',
    method: 'put',
  })
}