import { RouteLocationRaw, Router } from 'vue-router'
import { Ref } from 'vue'
import NProgress from 'nprogress/nprogress'
import 'nprogress/nprogress.css'

export default class RouterUtil {
    private static _routerUtil: RouterUtil

    static instance(): RouterUtil {
        console.log('Already create RouterUtil instance')
        if (this._routerUtil === undefined) {
            // 单例(懒汉模式)
            console.log('RouterUtil instance is undefined, Create!')
            this._routerUtil = new RouterUtil()
        }

        return this._routerUtil
    }

    private _isSpinRef: Ref<boolean> | undefined

    private _router: Router | undefined

    private _count: number

    updateSpinRefAndRouter(isSpinRef: Ref<boolean>, router: Router): void {
        this._isSpinRef = isSpinRef
        this._router = router
    }

    private constructor() {
        this._isSpinRef = undefined
        this._router = undefined
        this._count = 0
    }

    async push(to: RouteLocationRaw): Promise<void> {
        console.log('Push _isSpinRef ', this._isSpinRef)
        console.log('Push _router ', this._router)
        console.log('Push _count ', this._count)
        if (
            typeof this._isSpinRef !== 'undefined' &&
            typeof this._router !== 'undefined'
        ) {
            try {
                this._isSpinRef.value = true
                NProgress.start()
                await this._router
                    .push(to)
                    .then((res) => {
                        NProgress.done()
                    })
                    .catch((err) => {
                        NProgress.done()
                    })
                this._isSpinRef.value = false
                this._count += 1
            } catch (e) {
                this._isSpinRef.value = false
                NProgress.done()
            }
        }
    }

    async replace(to: RouteLocationRaw): Promise<void> {
        if (
            typeof this._isSpinRef !== 'undefined' &&
            typeof this._router !== 'undefined'
        ) {
            try {
                this._isSpinRef.value = true
                NProgress.start()
                await this._router
                    .replace(to)
                    .then((res) => {
                        NProgress.done()
                    })
                    .catch((err) => {
                        NProgress.done()
                    })
                this._isSpinRef.value = false
            } catch (e) {
                this._isSpinRef.value = false
                NProgress.done()
            }
        }
    }

    back(): void {
        console.log('Back _isSpinRef ', this._isSpinRef)
        console.log('Back _router ', this._router)
        console.log('Back _count ', this._count)
        if (typeof this._router !== 'undefined') {
            if (this._count !== 0) {
                this._router.back()
                this._count -= 1
            } else {
                this._router
                    .replace({
                        path: '/'
                    })
                    .then(() => {
                        this._count = 0
                    })
            }
        }
    }

    go(delta: number): void {
        if (typeof this._router !== 'undefined') {
            if (this._count !== 0) {
                this._router.go(delta)
                this._count -= delta

                if (this._count < 0) {
                    this._router
                        .replace({
                            path: '/'
                        })
                        .then(() => {
                            this._count = 0
                        })
                }
            }
        }
    }
}
