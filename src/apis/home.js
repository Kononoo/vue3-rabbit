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

export function findNewAPI() {
    return httpInstance({
        url:'/home/new'
    })
}