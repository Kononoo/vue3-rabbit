// 封装分类数据业务
import {ref, onMounted} from "vue";
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {getCategoryAPI} from "@/apis/category";

export function useCategory() {
    // 获取数据
    const categoryData = ref({})
    // 返回当前路由位置，在组件内部获取路由参数
    const route = useRoute()
    const getCategory = async (to = route.params.id) => {
        const res = await getCategoryAPI(to)
        categoryData.value = res.result
    }
    onMounted(() => {getCategory()})
    onBeforeRouteUpdate((to) => {
        // 获取最新的路由参数请求最新的分类数据
        getCategory(to.params.id)
    })
    return {
        categoryData,
    }
}