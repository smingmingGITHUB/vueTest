const path = require('path')
module.exports = {
  // 基本路径
  baseUrl: './',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => {},
  configureWebpack: () => {},
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    // modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: true,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'https://localhost:8080/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
     } 
    }, // 设置代理
    before: app => {}
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
    'style-resources-loader':{
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }
  }
  // module: {
  //     rules: [{
  //       test: /\.less$/,
  //       use: ['style-loader', 'css-loader', 'less-loader', {
  //           loader: 'style-resources-loader',
  //           options: {
  //               patterns: path.resolve(__dirname, 'path/to/less/variables/*.less'),
  //               injector: 'append'
  //           }
  //       }]
  //     }]
  // }
}