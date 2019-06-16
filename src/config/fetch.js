import axios from 'axios'
import env from './env'

// 自定义axios实例
let instance = axios.create({
    baseUrl:env.baseUrl,
    timeout:2500
})

//请求拦截器
instance.interceptors.request.use(function(config){
    //在请求前做些什么
    return config;
},function(error){
    //在请求错误时做些什么
    return Promise.reject(error)
})

//响应拦截器
instance.interceptors.response.use(function(response){
    //对响应数据做点什么
    return response.data;
},function(error){
    //对响应错误做点什么
    return Promise.reject(error);
})

export default instance;