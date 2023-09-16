
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入初始化样式文件
import '@/styles/common.scss'
// 引入懒加载指令组件并注册
import {lazyPlugin} from "@/directives";
// 引入全局组件插件
import {componentPlugin} from "@/components";

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')


// app.directive('img-lazy', {
//     mounted(el, binding) {
//         // console.log(el, binding.value)
//         useIntersectionObserver(
//             el, ([{ isIntersecting }]) => {
//                 console.log((isIntersecting))
//                 if (isIntersecting) {
//                     el.src = binding.value
//                     stop()
//                 }
//             },
//         )
//     }
// })


