// 封装购物测模块

import {defineStore} from "pinia";
import {ref} from 'vue'

export const useCartStore = defineStore('Cart', () => {
    // 1 定义state - cartList
    const cartList = ref([])
    // 2 定义action - addCart
    const addCart = (goods) => {
        // 添加购物车操作
        console.log('添加', goods)
        const item = cartList.value.find(item => goods.skuId === item.skuId)
        if (item) {
            item.count ? item.count++ : item.count = 1
        } else {
            cartList.value.push(goods)
        }
    }

    return {
        cartList,
        addCart
    }
}, {
    persist: true
})