import { defineStore} from "pinia";
import {LoginAPI} from "@/apis/login";
import {ref} from "vue";
import {useCartStore} from "@/stores/cartStore";

export const useUserStore =  defineStore('user', () => {
    // 1 定义管理用户数据的state
    const userInfo = ref([])
    const cartStore = useCartStore()

    // 2 定义获取接口数据的action
    const getUserInfo = async ({account, password}) => {
        const res = await LoginAPI({account, password})
        userInfo.value = res.result
        // 登录后同步用户购物车到本地
        await cartStore.updateNewList()
    }
    // 退出时清除用户信息
    const clearUserInfo = () => {
        userInfo.value = []
        // 退出登录时清除购物车记录
        cartStore.clearCartList()
    }

    // 3 以对象返回state和action
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
}, {
    // 数据持久化存储
    // 原理：设置state时会把数据自动同步给localStorage，获取数据时优先从localStorage获取
    persist: true
})