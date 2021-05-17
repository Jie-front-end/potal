const port = process.env.port || process.env.npm_config_port || 9601 // dev port

module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: port,
    proxy: {
      '/portal': {
        // target: 'http://219.159.152.72:14107',
        target: 'http://10.0.150.77:8084',
        changeOrigin: true,
        pathRewrite: {
          '^/portal': '/portal'
        }
      },
      '/oauth': {
        target: 'http://10.0.150.77:8081',
        changeOrigin: true,
        pathRewrite: {
          '^/oauth': '/oauth'
        }
      }
    }
  }
}
