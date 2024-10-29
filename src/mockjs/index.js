
// 引用 Mock
const Mock = require('mockjs')


// 获取首页数据包含机组状态、资产统计、有功功率、储能电池SOC、社会效益 -w
export const getHomeData = Mock.mock(process.env.VUE_APP_API_BASE_URL + "/admin-api/ecs/home-page/get-home-data", "put", {
  "code": 0,
  "data": {
    // 机组状态
    "unitStatusRespVO": {
      "windRunSts": "20",
      "windInterruptSts": "20",
      "windStopSts": "20",
      "lightRunSts": "20",
      "lightInterruptSts": "20",
      "lightStopSts": "20",
      "storedRunSts": "20",
      "storedInterruptSts": "20",
      "storedStopSts": "20",
      "fireRunSts": "20",
      "fireInterruptSts": "20",
      "fireStopSts": "20"
    },
    // 资产统计
    "propertyRespVO": {
      "windCapacity": "300",
      "windNum": "300",
      "lightCapacity": "300",
      "lightNum": "300",
      "fireCapacity": "300",
      "fireNum": "300",
      "storedCapacity": "300",
      "storedNum": "300"
    },
    // 有功功率
    "activePowerRespVO": {
      "windActivePower": "300",
      "lightActivePower": "300",
      "fireActivePower": "300",
      "storedActivePower": "300"
    },
    "storedBatteryRespVO": {
      "storedSoc": "0.8"
    },
    "socialBenefitRespVO": {
      "greenGeneCapa": "3000",
      "reduceCarbonOutNum": "300",
      "thriftyCoalNum": "300",
      "equalTreeNum": "300"
    }
  },
  "msg": ""
});

// 储能电池-充放电折线图数据 -w -电池折线图
export const getStoredInOutLine = Mock.mock(process.env.VUE_APP_API_BASE_URL + "/admin-api/ecs/home-page/get-stored-in-out-line", "get", {
  "code": 0,
  "data": {
    "categories": [
      "2024-10-17",
      "2024-10-18",
      "2024-10-19",
      "2024-10-20",
      "2024-10-21",
      "2024-10-22",
      "2024-10-23"
    ],
    "series": [
      {
        "name": "充电量",
        "data": [
          "30",
          "54",
          "76",
          "32",
          "54",
          "76",
          "32"
        ]
      },
      {
        "name": "放电量",
        "data": [
          "70",
          "89",
          "45",
          "65",
          "89",
          "45",
          "65"
        ]
      }
    ],
    "scene": null
  },
  "msg": ""
});

// 电量指标-获取计划发电量数据  -电量指标 -左上
export const getPlanGeneCapacity = Mock.mock(process.env.VUE_APP_API_BASE_URL + "/admin-api/ecs/home-page/get-plan-gene-capacity", "get", {
  "code": 0,
  "data": {
    "planDayGeneCapa": "30",
    "planMonthGeneCapa": "1000",
    "planYearGeneCapa": "10000"
  },
  "msg": ""
});

// 电量指标-获取发电量数据   -电量指标 -左上
export const getGeneCapacity = Mock.mock(process.env.VUE_APP_API_BASE_URL + "/admin-api/ecs/home-page/get-gene-capacity", "get", {
  "code": 0,
  "data": {
    "dayGeneCapa": "300",
    "monthGeneCapa": "10000",
    "yearGeneCapa": "100000"
  },
  "msg": ""
});

// 发电统计-饼图数据
export const getGeneStatisticsPie = Mock.mock(process.env.VUE_APP_API_BASE_URL + "/admin-api/ecs/home-page/get-gene-statistics-pie", "get", {
  "code": 0,
  "data": {
    "seriesData": [
      {
        "name": "风力累计发电",
        "value": 40
      },
      {
        "name": "光伏累计发电",
        "value": 30
      },
      {
        "name": "火力累计发电",
        "value": 60
      }
    ],
    "title": "示例饼图"
  },
  "msg": ""
});

// 有功功率折线图数据 -正下折线图
export const getActivePowerLine = Mock.mock(process.env.VUE_APP_API_BASE_URL + "/admin-api/ecs/home-page/get-active-power-line", "get", {
  "code": 0,
  "data": {
    "categories": [
      "09:10:00",
      "12:13:00",
      "14:00:00",
      "15:24:00",
      "16:40:20",
      "18:00:00"
    ],
    "series": [
      {
        "name": "充电量",
        "data": [
          "54.02",
          "76.30",
          "32.24",
          "54.10",
          "76.00",
          "32.01"
        ]
      },
      {
        "name": "放电量",
        "data": [
          "89.43",
          "45.32",
          "65.43",
          "89.55",
          "45.67",
          "65.24"
        ]
      }
    ],
    "scene": "1"
  },
  "msg": ""
});