import httpInstance from "@/utils/http";

export const getUserOrderAPI = (params) => {
    return httpInstance({
        url: '/member/order',
        method: 'GET',
        params
    })
}