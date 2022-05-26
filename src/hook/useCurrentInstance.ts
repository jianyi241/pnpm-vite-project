import {getCurrentInstance, ComponentInternalInstance} from "vue";

export default function useCurrentInstance() {
    // @ts-ignore
    const { appContext, proxy } = getCurrentInstance()
    const globalProperties = appContext?.config?.globalProperties
    return { globalProperties, proxy }
}