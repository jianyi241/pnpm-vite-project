import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import router from "./router";
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import 'moment/locale/zh-cn'

import {binding} from "./directives";
const focus = {
    mounted: (el: HTMLElement) => el.focus()
}
const app = createApp(App)
binding(app)
app.use(store)
app.use(router)
app.use(Antd)

app.mount('#app')
