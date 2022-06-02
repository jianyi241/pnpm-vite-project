import { getCurrentInstance } from 'vue'

export default function useCurrentInstance() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { appContext, proxy } = getCurrentInstance()
    const globalProperties = appContext?.config?.globalProperties
    return { globalProperties, proxy }
}
