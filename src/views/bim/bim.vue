<template>
    <div class="container">
        <div class="edit-wrap">
            <div class="edit-item">
                上传文件.rvt文件到存储桶
                <input type="file" @change="onFileSelected" />
            </div>
            <div class="edit-item">
                <input v-model="bucketName" placeholder="新建存储桶" />
                <a-button @click="handleCreateBucket">点击创建</a-button>
            </div>
            <a-button type="primary" @click="translateToSvf"
                >转换为svf</a-button
            >
            <a-button type="danger" @click="download">获取bucket列表</a-button>
            <a-button type="primary" @click="getSVFMetadata(SVF_INFO.urn)"
                >getSVFMetadata</a-button
            >
            <a-button type="primary" @click="getSVFManifest(SVF_INFO.urn)"
                >getSVFManifest</a-button
            >
            <a-button type="primary" @click="getContentByBucket"
                >getBucketContent</a-button
            >
        </div>
        <div id="viewer"></div>
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
    getBucketList,
    rvtTranslateScf,
    SVF_INFO,
    getSVFMetadata,
    getSVFManifest,
    getContentByBucket,
    BUCKET
} from './viewer'

onMounted(() => {
    console.log('log window ===> ', window)
    // getAccessToken(function (token, ww) {
    //     console.log('token ', token)
    //     createBucket(token, function (res) {
    //         console.log('create bucket ===> ', res)
    //     })
    // })
    init()
})
const bucketName = ref<string>()

const handleCreateBucket = (): void => {
    createBucket(bucketName.value, function (res) {
        console.log('handleCreateBucket result ===> ', res)
    })
}

const translateToSvf = () => {
    rvtTranslateScf()
}

const download = () => {
    getBucketList(function (data) {
        console.log('getBucketList  data ===> ', data)
    })
}

const onFileSelected = (e) => {
    console.log()
    // 调用上传文件的函数
    const file = e.target.files[0]
    uploadFile(file)
}

const init = async (): Promise<void> => {
    const view = await initViewer(
        document.getElementById('viewer') as HTMLDivElement,
        {
            extensions: ['Autodesk.DocumentBrowser']
        }
    )
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
    .edit-wrap {
        height: 40px;
        display: flex;
        gap: 24px;
        align-items: center;
        padding: 0 24px;
        .edit-item {
            display: flex;
            gap: 8px;
        }
    }
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
