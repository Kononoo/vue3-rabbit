import { defineStore} from "pinia";
import {LoginAPI} from "@/apis/login";
import {ref} from "vue";

export const useUserStore =  defineStore('user', () => {
    // 1 定义管理用户数据的state
    const userInfo = ref([])
    // 2 定义获取接口数据的action
    const getUserInfo = async ({account, password}) => {
        const res = await LoginAPI({account, password})
        userInfo.value = res.result
    }
    // 3 以对象返回state和action
    return {
        userInfo,
        getUserInfo
    }
})