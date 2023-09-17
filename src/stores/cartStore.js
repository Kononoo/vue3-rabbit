// 封装购物测模块

import {defineStore} from "pinia";
import {ref, computed} from 'vue'

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
        console.log("cartList:", cartList.value)
        console.log("carList.count", cartList.value[0].count)
        console.log("carList.price", cartList.value[0].price)
    }

    // 删除购物车
    const delCart = (skuId) => {
        // 根据skuId删除数据 1 findIndex   2 filter
        const index = cartList.value.findIndex(item => item.skuId === skuId)
        cartList.value.splice(index, 1)
        // cartList.value = cartList.value.filter(item => item.skuId !== skuId)
    }

    // 单选功能
    const singleCheck = (skuId, selected) => {
        const item = cartList.value.find(item => item.skuId === skuId)
        item.selected = selected
    }

    // 计算属性
    // 1. 总的数量 所有项的count之和
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    // 2. 总价 所有项的count*price之和
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
    // 3.

    return {
        cartList,
        allCount,
        allPrice,
        addCart,
        delCart,
        singleCheck,
    }
}, {
    persist: true
})