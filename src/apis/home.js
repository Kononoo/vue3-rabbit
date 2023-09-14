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