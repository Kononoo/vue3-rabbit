import httpInstance from "@/utils/http";

export const getCheckoutInfoAPI = () => {
    return httpInstance({
        url:'/member/order/pre',
    })
}