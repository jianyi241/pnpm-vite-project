<template>
    <div class="container">
        <div id="viewer"></div>
        <!--        <select id="models"></select>-->
        <input type="file" @change="onFileSelected" />
        <button @click="translateToSvf">转换为svf</button>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {
    initViewer,
    loadModel,
    getAccessToken,
    createBucket,
    uploadFile,
    rvtTranslateScf,
    SVF_INFO,
    BUCKET
} from './viewer'

onMounted(() => {
    // createBucket(function (data) {})
    console.log('log window ===> ', window)
    // getAccessToken(function (token, ww) {
    //     console.log('token ', token)
    //     createBucket(token, function (res) {
    //         console.log('create bucket ===> ', res)
    //     })
    // })
    init()
})

const translateToSvf = () => {
    rvtTranslateScf()
}

const onFileSelected = (e) => {
    console.log()
    // 调用上传文件的函数
    const file = e.target.files[0]
    uploadFile(file)
}

const init = async (): Promise<void> => {
    const view = await initViewer(document.getElementById('viewer'), {
        extensions: ['Autodesk.DocumentBrowser']
    })
    console.log('init view ===> ', view)
    loadModel(view, SVF_INFO.urn)
}
</script>

<style scoped lang="scss">
.container {
    position: relative;
    width: 100%;
    height: 100vh;
    background: #43bd85;
    #viewer {
        position: absolute;
        top: 40px;
        width: 100%;
        height: calc(100% - 40px);
    }

    #models {
        position: absolute;
        left: 1em;
        top: 1em;
        z-index: 1;
    }
}
</style>
