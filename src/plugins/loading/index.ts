import { createApp } from 'vue'
import Loading from './loading.vue'

const loadingPlugin = {
    install(app: any) {
        console.log('vue', app)
        const LoadingPlugin = createApp(Loading)
        const $node = document.createElement('div')
        const _loading = LoadingPlugin.mount($node)
        document.body.appendChild($node)
        app.config.globalProperties.$loading = _loading
    }
}

export default loadingPlugin
