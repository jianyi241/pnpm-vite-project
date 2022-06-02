/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly MODE: string
    readonly BASE_URL: string
    readonly VITE_APP_BASE_API: string
    readonly VITE_APP_SERVER: string
    readonly VITE_APP_WS_SERVER: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}
