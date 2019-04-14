var proxyTable = require('http-proxy-middleware');
module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {//服务器代理
      '/v1': {
        target: 'http://localhost:27017',//代理地址
        changeOrigin: true,//是否允许开启代理
        pathRewrite: {//代理地址重写
          '^/v1': '/v1'
        }
      },
      '/api': {
        target: "http://localhost:8080",		//第三方接口
        changeOrigin: true,		//跨域
        pathRewrite: {
          '^/api': './static'			//这里根据需要可以修改地址，我这里配置的是本地存放json的文件夹
        }
      }
    }
  }
}