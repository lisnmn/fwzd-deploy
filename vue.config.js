module.exports = {
    // 基本路径配置
    publicPath: process.env.NODE_ENV === 'production' ? '/vue-fwzd/' : '/',
    // build生成的生产环境构建文件目录
    outputDir: 'vue-fwzd',
    // 组件位置
    assetsDir: 'static',
    // eslint-loader是否在保存的时候检查
    lintOnSave: false,
    chainWebpack: () => {},
    // 生产环境是否生成sourceMap
    productionSourceMap: false,
    parallel: require('os').cpus().length > 1,
    devServer: {
        compress: true,
        host: '0.0.0.0',
        port: 11454,
        hotOnly: false,
        proxy: {
            '/': {
                target: 'http:://localhost:11455',
                secure: false
            }
        }
    },
    // 第三方插件配置
    pluginOptions: {

    }
}
