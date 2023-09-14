// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install(app) {
        // 懒加载执行逻辑
        app.directive('img-lazy', {
            mounted(el, binding) {
                // el；绑定指令的元素img, binding:.value 指令后面绑定的值
                useIntersectionObserver(
                    el, ([{ isIntersecting }]) => {
                        // 进入视口区域
                        if (isIntersecting) {
                            el.src = binding.value
                            stop()
                        }
                    },
                )
            }
        })
    }
}