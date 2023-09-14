
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入初始化样式文件
import '@/styles/common.scss'

import { useIntersectionObserver } from '@vueuse/core'

//测试接口函数
import {getCategory} from '@/apis/testAPI'
// getCategory().then(res => {
//     console.log(res)
// })
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')

app.directive('img-lazy', {
    mounted(el, binding) {
        // console.log(el, binding.value)
        useIntersectionObserver(
            el, ([{ isIntersecting }]) => {
                console.log((isIntersecting))
                if (isIntersecting) {
                    el.src = binding.value
                }
            },
        )
    }
})
