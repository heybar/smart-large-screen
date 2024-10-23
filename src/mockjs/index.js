
// 引用 Mock
const Mock = require('mockjs')

export const getHomeData = Mock.mock(process.env.VUE_APP_API_BASE_URL + "/admin-api/ecs/home-page/get-home-data", "put", {
  "code": 0,
  "data": {
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