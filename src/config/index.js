const BASE_URL_LIST = new Map ([
    ['prod', '生产环境地址'],
    ['dev', 'https://os.wmmotors.cn'],
    ['test', 'https://test-os.wmmotors.cn'],
    ['qa', 'http://apis.juhe.cn']
])
module.exports = {
    BASE_URL: BASE_URL_LIST.get(process.env.NODE_ENV)
}