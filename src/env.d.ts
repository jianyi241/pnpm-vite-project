/// <reference types="vite/client" />

declare interface ImportMetaEnv {
    readonly VITE_APP_BASE_API: string
    readonly VITE_APP_SERVER: string
    readonly VITE_APP_WS_SERVER: string
}

declare interface ImportMeta {
    readonly env: ImportMetaEnv
}

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}
