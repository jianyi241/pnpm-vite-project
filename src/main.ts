import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import router from "./router";
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import 'moment/locale/zh-cn'
import {binding} from "./directives";

import 'virtual:svg-icons-register'
import SvgIcon from './components/SvgIcon.vue'

import loading from "./plugins/loading";
const app = createApp(App)
binding(app) // 绑定指令
app.use(store)
app.use(router)
app.use(Antd)
app.use(loading)
app.component('SvgIcon',SvgIcon)
app.config.errorHandler =  (err, instance, info) => {
    // 向追踪服务报告错误
}
app.mount('#app')
