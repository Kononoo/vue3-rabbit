// 封装购物车逻辑

import httpInstance from "@/utils/http";

// 1 加入购物车列表
export const insertCartAPI = ({skuId, count}) => {
    return httpInstance({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }
    })
}

// 获取购物车列表
export const getNewCartListAPI = () => {
    return httpInstance({
        url: '/member/cart',
    })
}