import axios from "axios";
const service = axios.create({
    timeout: 10000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
    config.headers.platform = 'PC'
    return config
},error => {
    return Promise.reject(error)
})

//response拦截器
service.interceptors.response.use(res =>{
    if(res.status === 200) {
        return res.data
    }
},error => {
    return Promise.reject(error)
})

export default service