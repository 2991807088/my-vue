/*
* vue-cli配置
* https://cli.vuejs.org/zh/config/
 */
// console.log('打包',process.env)
module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: '', // 静态资源目录，默认为''
    indexPath: 'index.html',
    lintOnSave: 'warning',
    productionSourceMap: true,
    configureWebpack: config => {
        
    }
}