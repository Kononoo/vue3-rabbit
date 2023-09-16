import httpInstance from "@/utils/http";

export const LoginAPI = ({account, password}) => {
    return httpInstance({
        url: '/login',
        method: 'POST',
        data: {
            account,
            password
        }
    })
}