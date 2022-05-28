import axios, {AxiosInstance, AxiosRequestHeaders, AxiosRequestConfig, Method} from 'axios'
import router from '../../router'
import store from '../../store'
import { message } from 'ant-design-vue'
// axios.defaults.withCredentials = true
// axios.defaults.baseURL = process.env.VUE_APP_BASE_API
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 定义接口
interface PendingType {
    url?: string;
    method?: Method;
    params: any;
    data: any;
    cancel: Function;
}

// 取消重复请求
const pending: Array<PendingType> = [];
const CancelToken = axios.CancelToken;
// 移除重复请求
const removePending = (config: AxiosRequestConfig) => {
    for (const key in pending) {
        const item: number = +key;
        const list: PendingType = pending[key];
        // 当前请求在数组中存在时执行函数体
        if (list.url === config.url && list.method === config.method && JSON.stringify(list.params) === JSON.stringify(config.params) && JSON.stringify(list.data) === JSON.stringify(config.data)) {
            // 执行取消操作
            list.cancel('操作太频繁，请稍后再试');
            // 从数组中移除记录
            pending.splice(item, 1);
        }
    }
};
// @ts-ignore
const instance: AxiosInstance = axios.create({
    timeout: 20000,
    withCredentials: true
})

// 请求拦截
instance.interceptors.request.use(
    conf => {
        console.log('URL ---> ', conf.url, '--->', conf)
        const token = sessionStorage.getItem('token') || ''
        // @ts-ignore
        conf.headers.auth = token
        removePending(conf);
        conf.cancelToken = new CancelToken((c) => {
            // @ts-ignore
            pending.push({ url: conf.url, method: conf.method, params: conf.params, data: conf.data, cancel: c });
        });
        return Promise.resolve(conf)
    },
    err => {
        return Promise.reject(err)
    }
)

// 响应拦截
instance.interceptors.response.use(
    res => {
        removePending(res.config);
        return Promise.resolve(res)
    },
    err => {
        return Promise.reject(err)
    }
)

export default instance
