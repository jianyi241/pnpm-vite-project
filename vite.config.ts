import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";
// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    mode: 'development',
    publicDir: 'public',
    server: {
        open: true,
        host: '0.0.0.0',
        port: 9999,
        strictPort: true, // true时端口被占用时退出
        https: false,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        },
        cors: true,
        headers: {} // 指定服务器响应的header
    },
    build: {},
    plugins: [
        vue(),
        createSvgIconsPlugin({
            iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
            symbolId: 'icon-[dir]-[name]'
        })
    ],
    resolve: {
        alias: [{
            find: '@',
            replacement: resolve(__dirname, './src')
        }]
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
