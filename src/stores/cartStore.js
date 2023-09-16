// 封装购物测模块

import {defineStore} from "pinia";
import {ref} from 'vue'

export const useCartStore = defineStore('Cart', () => {
    // 1 定义state - cartList
    const cartList = ref([])

    const allPrice = ref(0)

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
        console.log(allPrice)
        allPrice.value += parseFloat(goods.price)
        console.log(allPrice)
    }

    const delCart = (skuId) => {
        // 根据skuId删除数据 1 findIndex   2 filter
        const index = cartList.value.findIndex(item => item.skuId === skuId)
        allPrice.value -= parseFloat(cartList.value[index].price)
        cartList.value.splice(index, 1)
        // cartList.value = cartList.value.filter(item => item.skuId !== skuId)
    }

    return {
        cartList,
        allPrice,
        addCart,
        delCart
    }
}, {
    persist: true
})