<script>
import { defineComponent } from 'vue'
import * as THREE from 'three'
import { spineData, a } from './index'

const s = Math.max(1.5, Math.min(2.5, window.devicePixelRatio))
export default defineComponent({
    name: 'gs',
    props: {
        width: {
            type: Number,
            default: 100
        },
        height: {
            type: Number,
            default: 100
        },
        manifest: {
            type: Array,
            default: function () {
                return []
            }
        },
        spineData: {
            type: Array,
            default: function () {
                return []
            }
        },
        resolutionRatio: {
            type: Number,
            default: 1
        }
    },
    watch: {
        width: function () {
            this.onResize()
        },
        height: function () {
            this.onResize()
        },
        resolutionRatio: function () {
            this.renderer &&
                this.renderer.setPixelRatio(s * this.resolutionRatio)
        }
    },
    destroyed: function () {
        // if (
        //     (this.loader &&
        //         (this.loader.removeEventListener('complete'),
        //         this.loader.removeEventListener('error'),
        //         this.loader.removeEventListener('progress')),
        //     this.scene)
        // )
        //     for (; this.scene.children.length; )
        //         this.scene.children[0].dispose(),
        //             this.scene.remove(this.scene.children[0])
        window.cancelAnimationFrame(this.rafId)
    },
    data() {
        return {
            renderer: null,
            player: null,
            rafId: -1,
            scene: null,
            camera: null,
            loader: null,
            spineData: spineData
        }
    },
    mounted: function () {
        this.renderer = null
        this.player = null
        this.rafId = -1
        this.scene = new THREE.Scene()
        this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 1e3)
        this.init3D()
    },
    methods: {
        getSceneMainObject: function (e) {
            return this.scene.getObjectByName(e)
        },
        init3D: function () {
            try {
                this.renderer = new THREE.WebGLRenderer({
                    canvas: this.$refs.effectCanvas,
                    alpha: !0
                })
                var e = {}
                this.manifest.forEach(function (t) {
                    e[t.id] = {
                        atlas: t.atlas,
                        json: t.json
                    }
                })
                this.player = new THREE.THREEPlayer({
                    renderer: this.renderer,
                    shaderSetting: a.default,
                    spineSetting: e
                })
                this.prepareManifest()
            } catch (e) {
                this.$emit('webglError')
            }
        },
        prepareManifest: function () {
            var e = this,
                t = []
            this.manifest.forEach(function (e) {
                e.img.forEach(function (e) {
                    t.push(e)
                })
            })
            this.loader = this.player.createLoader()
            this.loader.load(t)
            this.loader.setEventListener('error', function () {
                e.$emit('loadError')
            })
            this.loader.setEventListener('complete', function () {
                e.build3D(), e.initMainScene(), e.$emit('buildComplete')
            })
            this.loader.setEventListener('progress', function (t) {
                e.$emit('loadProgress', t)
            })
        },
        build3D: function () {
            this.initRenderPlayer()
            this.onResize()
            this.render()
        },
        initRenderPlayer() {
            this.renderer.setPixelRatio(s * this.resolutionRatio)
        },
        initMainScene: function () {
            var e = {
                id: 'scene_main',
                children: []
            }
            this.spineData.forEach(function (t) {
                var n = t.name,
                    r = void 0 === n ? '' : n,
                    i = t.spineId,
                    o = t.animation,
                    a = t.scale,
                    s = void 0 === a ? [1, 1, 1] : a,
                    u = t.position,
                    c = void 0 === u ? [0, 0, 0] : u,
                    l = t.renderOrder,
                    f = void 0 === l ? 0 : l,
                    d = t.visible,
                    p = void 0 === d || d,
                    h = t.maxVert,
                    v = void 0 === h ? 2048 : h
                e.children.push({
                    name: r,
                    uuid: r,
                    renderOrder: f,
                    position: c,
                    scale: s,
                    visible: p,
                    children: [],
                    type: 3,
                    spine: {
                        id: i,
                        defaultAnimation: o,
                        maxVert: v
                    },
                    material: [
                        {
                            id: 'SPINE'
                        }
                    ]
                })
            }),
                this.player.initScene(e, this.scene)
        },
        onResize: function () {
            if (this.renderer) {
                this.camera.position.set(0, 0, 100),
                    (this.camera.left = -this.width / 2),
                    (this.camera.right = this.width / 2),
                    (this.camera.top = this.height / 2),
                    (this.camera.bottom = -this.height / 2),
                    this.camera.updateProjectionMatrix()
                var e = Math.min(1, window.devicePixelRatio),
                    t = this.width * e,
                    n = this.height * e
                this.renderer.setSize(t, n)
            }
        },
        render: function () {
            this.player.tick() && this.renderer.render(this.scene, this.camera),
                (this.rafId = window.requestAnimationFrame(this.render))
        }
    }
})
</script>

<template>
    <div class="gs">
        <canvas class="main" ref="effectCanvas"></canvas>
    </div>
</template>

<style scoped lang="scss"></style>
