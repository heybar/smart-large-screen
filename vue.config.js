const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    port: 8080,
    open: true,
  },
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        // 保持默认配置，不做任何自定义
        javascriptEnabled: true, // 确保 Less 可以处理 JavaScript 表达式
      },
    },
  },
};
