import Loading from './loading.vue'
import {createApp} from "vue";

const loadingPlugin = {
    install(app: any) {
        console.log('vue', app)
        const LoadingPlugin = createApp(Loading)
        const $node = document.createElement('div')
        const _loading = LoadingPlugin.mount($node)
        document.body.appendChild($node)
        console.log('_loading => ', _loading)
        app.config.globalProperties.$loading = _loading
    }
}

export default loadingPlugin
