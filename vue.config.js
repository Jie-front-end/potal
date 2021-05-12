const port = process.env.port || process.env.npm_config_port || 9601 // dev port

module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: port,
    proxy: {
      '/potal': {
        // target: 'http://219.159.152.72:14107',
        target: 'http://10.0.150.77:8083',
        changeOrigin: true,
        pathRewrite: {
          '^/potal': ''
        }
      },
      '/login': {
        target: 'http://10.0.150.77:8081',
        changeOrigin: true,
        pathRewrite: {
          '^/login': '/login'
        }
      }
    }
  }
}
