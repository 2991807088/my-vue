/*
* vue-cli配置
* https://cli.vuejs.org/zh/config/
 */
const path = require('path')
const webpack = require('webpack')
const VUE_BASE = require('./src/config/index')
console.log('是什么环境', VUE_BASE.BASE_URL)
module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: '', // 静态资源目录，默认为''
    indexPath: 'index.html',
    lintOnSave: 'warning',
    productionSourceMap: true,
    devServer: {
        open: true, // 是否打开浏览器
        proxy: {
            '/api': {
                target: VUE_BASE.BASE_URL,
                secure: false,
                changeOrigin: true, //开启代理，在本地创建一个虚拟服务端
                pathRewrite: {
                    "^/api": ""
                }
            },
            '/homeApi': {
                target: VUE_BASE.BASE_URL,
                secure: false,
                changeOrigin: true, //开启代理，在本地创建一个虚拟服务端
                pathRewrite: {
                    "^/homeApi": ""
                }
            }
        }
    },
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
    },
    configureWebpack: config => {
        const plugins = [];
        plugins.push(
           new webpack.DefinePlugin({
               "process.env":{
                   PREFIX: JSON.stringify(process.env.PREFIX)
               }
           })
        )
        config.plugins = [...config.plugins, ...plugins]
    }
}
// console.log('打包配置', process.env.BASE_URL)