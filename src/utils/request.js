
import axios from 'axios';

// 基本配置
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL, // 根据实际情况修改API地址
  timeout: 5000 // 设置超时时间，单位为ms
});

// 请求拦截器
instance.interceptors.request.use(config => {
  config.headers['Authorization'] = localStorage.getItem('token'); // 设置请求头部分，这里举例使用了localStorage存储的token作为身份标识
  return config;
}, error => {
  console.log(error);
  return Promise.reject(error);
});


//响应拦截处理  响应拦截器：包含两个函数（一个是成功返回的函数，一个是失败的返回的函数）
instance.interceptors.response.use(res => {
  // 我们一般在这里处理，请求成功后的错误状态码 例如状态码是500，404，403
  // res 是所有相应的信息
  console.log(res)
  return res.data
}, err => {
  let { res } = err
  if (res) {
    switch (res.status) {
      case 401:
        break
      case 403:
        break
      case 404:
        break
      case 500:
        break
    }
  } else {
    if (!window.navigator.onLine) {
      //断网处理：跳转到断网页面
      return
    }
  }
  // 服务器响应发生错误
  return Promise.reject(err)
})


export default instance;
