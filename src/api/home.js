import request from '../utils/request'

// 获取首页数据包含机组状态、资产统计、有功功率、储能电池SOC、社会效益
export function getHomeData() {
  return request({
    url: '/admin-api/ecs/home-page/get-home-data',
    method: 'put',
  })
}

// 储能电池-充放电折线图数据
export function getStoredInOutLine() {
  return request({
    url: '/admin-api/ecs/home-page/get-stored-in-out-line',
    method: 'get',
  })
}

// 电量指标-获取计划发电量数据
export function getPlanGeneCapacity() {
  return request({
    url: '/admin-api/ecs/home-page/get-plan-gene-capacity',
    method: 'get',
  })
}

// 发电统计-饼图数据
export function getGeneStatisticsPie() {
  return request({
    url: '/admin-api/ecs/home-page/get-gene-statistics-piey',
    method: 'get',
  })
}

// 电量指标-获取发电量数据
export function getGeneCapacity() {
  return request({
    url: '/admin-api/ecs/home-page/get-gene-capacity',
    method: 'get',
  })
}

// 有功功率折线图数据
export function getActivePowerLine() {
  return request({
    url: '/admin-api/ecs/home-page/get-active-power-line',
    method: 'get',
  })
}