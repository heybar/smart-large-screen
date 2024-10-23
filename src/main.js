import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// // 引入字体的文件
import './assets/font/iconfont.css'
// 引入全局的样式文件
import './assets/css/index.css'
import axios from 'axios'
import SocketService from '@/utils/socket_service'
import "@/mockjs/index"
// 对服务端进行websocket的连接
// 其他的组件  this.$socket
Vue.use(ElementUI);
Vue.prototype.$socket = SocketService.Instance
// 请求基准路径的配置
axios.defaults.baseURL = ''

Vue.prototype.$echarts = window.echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
