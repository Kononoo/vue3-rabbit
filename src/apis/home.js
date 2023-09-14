import httpInstance from "@/utils/http";

/**
 * 获取Banner数据
 * @returns {*}
 */
export function getBannerAPI(params = {}) {
    const {distributionSize = '1'} = params
    return  httpInstance({
        url:'home/banner',
        params: {
            distributionSize
        }
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