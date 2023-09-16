// axios基础封装

import axios from "axios";
import {ElMessage} from "element-plus";
import {useUserStore} from "@/stores/user";
import router from "@/router";

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    // 1 从pinia获取token数据  2 按后端要求拼接token数据
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    // 统一错误提示
    ElMessage({
        type: "warning",
        message: e.response.data.message
    })
    // 401token失效处理
    // 1 清除本地数据   2 跳转登录页
    if (e.response.status === 401) {
        const userStore = useUserStore()
        userStore.clearUserInfo()
        ElMessage({
            type: 'error',
            message: '登录身份过期，请重新登录!'
        })
        setTimeout(() => {
            router.push('/login')
        }, 500)
    }
    return Promise.reject(e)
})

export default httpInstance