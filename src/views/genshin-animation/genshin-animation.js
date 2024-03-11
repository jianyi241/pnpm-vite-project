// class GenshinAnimation {
//     scene = null
//     camera = null
//     data = null
//     images = []
//     constructor(scene, camera, data, images) {
//         this.scene = scene
//         this.camera = camera
//         this.data = data
//         this.images = images
//     }
// }
//
// export default GenshinAnimation

import * as THREE from 'three'
import bachong from './json/bachong.json'
import bachongPng from './png/bachong.png'
// 创建场景、相机和渲染器
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 加载 JSON 数据和图片资源
const loader = new THREE.FileLoader()
const textureLoader = new THREE.TextureLoader()

Promise.all([
    // 加载 JSON 数据
    loader.loadAsync('./json/bachong.json'),
    // 加载图片资源
    textureLoader.loadAsync('./png/bachong.png')
    // 加载其他部位的贴图...
]).then(([skeletonData, clothesTexture]) => {
    // 解析 JSON 数据
    const json = JSON.parse(skeletonData)

    // 创建骨骼网格的几何体
    const geometry = new THREE.BufferGeometry()
    // 设置几何体的顶点、面、UV 等属性...

    // 创建贴图材质
    const clothesMaterial = new THREE.MeshBasicMaterial({ map: clothesTexture })
    // 创建其他部位的材质...

    // 创建骨骼网格对象
    const skinnedMesh = new THREE.SkinnedMesh(geometry, [clothesMaterial])

    // 关联骨骼和网格
    const bones = [] // 骨骼数组
    // 创建和设置骨骼...
    const skeleton = new THREE.Skeleton(bones)
    skinnedMesh.bind(skeleton)

    // 将骨骼网格添加到场景中
    scene.add(skinnedMesh)
    // 创建动画剪辑和动作
    // const animationClip = THREE.AnimationClip.parse(json.transform)
    // const mixer = new THREE.AnimationMixer(skinnedMesh)
    // const animationAction = mixer.clipAction(animationClip)
    // animationAction.play()
    // 创建时钟
    const clock = new THREE.Clock()
    // 渲染循环
    function animate() {
        // requestAnimationFrame(animate)
        // const delta = clock.getDelta()
        // mixer.update(delta)
        renderer.render(scene, camera)
    }
    animate()
})
