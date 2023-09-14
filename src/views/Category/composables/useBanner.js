// 封装Banner轮播图相关的业务代码
import {getBannerAPI} from "@/apis/home";
import {ref, onMounted} from 'vue'

export function useBanner() {
    // 获取Banner
    const bannerList = ref([])
    const getBanner= async () => {
        const res = await getBannerAPI({
            distributionSite: '2'
        })
        bannerList.value = res.result
    }
    onMounted(() => {getBanner()})
    return {
        bannerList
    }
}
