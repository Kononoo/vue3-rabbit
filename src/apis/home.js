import httpInstance from "@/utils/http";

/**
 * 获取Banner数据
 * @returns {*}
 */
export function getBannerAPI() {
    return  httpInstance({
        url:'home/banner'
    })
}

export function getNewAPI() {
    return httpInstance({
        url:'/home/new'
    })
}

export function getHotAPI() {
    return  httpInstance({
        url:'/home/hot'
    })
}

export function getGoodsAPI() {
    return httpInstance({
        url: '/home/goods'
    })
}