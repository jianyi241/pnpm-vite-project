import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const TIME_STAMP = new Date().getTime()
// https://cn.vitejs.dev/config/
export default ({ mode }) => {
    const ENV = loadEnv(mode, process.cwd())
    console.log('mode ', mode)
    return defineConfig({
        define: {
            'process.env': ENV
        },
        base: ENV.BASE_URL, // 开发或生产环境服务的公共基础路径
        // mode: 'development',
        publicDir: 'public',
        server: {
            host: '0.0.0.0', // 指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
            port: 9999, // 端口 默认3000
            strictPort: true, // true时端口被占用时退出
            https: false, // 启用 TLS + HTTP/2。
            open: true, // 运行时自动打开默认浏览器
            // 为开发服务器配置自定义代理规则。
            proxy: {
                [ENV.VITE_APP_BASE_API]: {
                    target: ENV.VITE_APP_SERVER,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(ENV.VITE_APP_BASE_API, '')
                }
            },
            cors: false, // 为开发服务器配置 CORS。默认启用并允许任何源，传递一个 选项对象 来调整行为或设为 false 表示禁用。
            hmr: false, // 禁用或配置 HMR 连接（用于 HMR websocket 必须使用不同的 http 服务器地址的情况）。
            base: '', // undefined | string 在 HTTP 请求中预留此文件夹，用于代理 Vite 作为子文件夹时使用。应该以 / 字符开始和结束。
            headers: {} // 指定服务器响应的header
        },
        build: {
            minify: 'esbuild', // 设置为 false 可以禁用最小化混淆，或是用来指定使用哪种混淆器。默认为 Esbuild，它比 terser 快 20-40 倍，压缩率只差 1%-2%。Benchmarks
            outDir: 'dist', // 指定输出路径（相对于 项目根目录).
            assetsDir: 'assets', // 指定生成静态资源的存放路径（相对于 build.outDir）。
            assetsInlineLimit: 4096, //(4kb) 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。(如制定了build.lib，无论大小都会内联)
            // manifest: true, // 当设置为 true，构建后将会生成 manifest.json 文件，包含了没有被 hash 过的资源文件名和 hash 后版本的映射。可以为一些服务器框架渲染时提供正确的资源引入链接。当该值为一个字符串时，它将作为 manifest 文件的名字。
            ssrManifest: true, // 当设置为 true 时，构建也将生成 SSR 的 manifest 文件，以确定生产中的样式链接与资产预加载指令。当该值为一个字符串时，它将作为 manifest 文件的名字。
            cssCodeSplit: true, // 弃用/禁用 css代码拆分。如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
            cssTarget: 'modules', // 此选项允许用户为 CSS 的压缩设置一个不同的浏览器 target，此处的 target 并非是用于 JavaScript 转写目标。
            sourcemap: false, // 构建后是否生成 source map 文件。如果为 true，将会创建一个独立的 source map 文件。如果为 'inline'，source map 将作为一个 data URI 附加在输出文件中。'hidden' 的工作原理与 'true' 相似，只是 bundle 文件中相应的注释将不被保留。
            rollupOptions: {
                output: {
                    manualChunks: {
                        // 拆分代码，这个就是分包，配置完后自动按需加载，现在还比不上webpack的splitchunk，不过也能用了。
                        vue: ['vue', 'vue-router', 'vuex'],
                        vant: ['vant']
                    },
                    entryFileNames: `assets/[name]-${TIME_STAMP}.js`,
                    chunkFileNames: `assets/[name]-${TIME_STAMP}.js`,
                    assetFileNames: `assets/[name]-${TIME_STAMP}.[ext]`
                }
            },
            terserOptions: {
                compress: {
                    // warnings: false,
                    drop_console: true, //打包时删除console
                    drop_debugger: true, //打包时删除 debugger
                    pure_funcs: ['console.log']
                },
                output: {
                    // 去掉注释内容
                    comments: true
                }
            },
            reportCompressedSize: false // 启用/禁用 gzip 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。
        },
        plugins: [
            vue(),
            createSvgIconsPlugin({
                iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
                symbolId: 'icon-[dir]-[name]'
            })
        ],
        resolve: {
            alias: [
                {
                    find: '@',
                    replacement: resolve(__dirname, './src')
                }
            ]
        },
        css: {
            modules: {},
            preprocessorOptions: {
                scss: {
                    additionalData: `
                    @import "@/assets/styles/_variables.scss";
                    @import "@/assets/styles/_function.scss";
                    @import "@/assets/styles/_mixin.scss";`
                },
                styl: {}
            }
        }
    })
}
