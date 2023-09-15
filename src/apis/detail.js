import httpInstance from "@/utils/http";

export const getDetail = (id) => {
    return httpInstance({
        url:'/goods',
        params: {
            id
        }
    })
}

export const fetchHotGoodsAPI = ({id, type, limit = 3}) => {
    return httpInstance({
        url:'/goods/hot',
        params: {
            id,
            type,
            limit
        }
    })
}
