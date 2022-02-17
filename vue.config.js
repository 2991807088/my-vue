/*
* vue-cli配置
* https://cli.vuejs.org/zh/config/
 */
// console.log('打包',process.env)
const path = require('path')
module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: '', // 静态资源目录，默认为''
    indexPath: 'index.html',
    lintOnSave: 'warning',
    productionSourceMap: true,
    chainWebpack: config => {
        const types=['vue']
        types.forEach(type=>{
            config.module.rule('scss').oneOf(type).use('style-resource')
                .loader('style-resources-loader')
                .options({
                    patterns:[
                        //公用的混入scss变量
                        path.resolve(__dirname,'./src/styles/mixin.scss')
                    ]
                })
        })
    }
}