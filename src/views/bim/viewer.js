import { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET } from '@/views/bim/util'

export const APP_URL = 'https://aps-codepen.autodesk.io'

export const BUCKET = {
    bucketKey: 'chenchanghao-bucket',
    objectId:
        'urn:adsk.objects:os.object:chenchanghao-bucket/threefloorbuilding.rvt',
    objectKey: 'threefloorbuilding.rvt',
    sha1: 'bf627c7aa58e485a852d2d44dee1b2f615531b53',
    size: 14295250,
    contentType: 'application/octet-stream',
    location:
        'https://developer.api.autodesk.com/oss/v2/buckets/chenchanghao-bucket/objects/threefloorbuilding.rvt'
}

export const SVF_INFO = {
    result: 'created',
    urn: 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6Y2hlbmNoYW5naGFvLWJ1Y2tldC90aHJlZWZsb29yYnVpbGRpbmcucnZ0',
    registerKeys: ['303e49ac-f697-49e9-b8d4-86cef2649641'],
    acceptedJobs: {
        output: {
            formats: [
                {
                    type: 'svf',
                    views: ['2d', '3d']
                }
            ]
        }
    }
}

/**
 * Generates access token for viewing models in the Model Derivative service.
 * @param {(string, number) => void} callback Function that will be called with generated access token and number of seconds before it expires.
 */
export function getAccessToken(callback) {
    fetch('https://developer.api.autodesk.com/authentication/v1/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            client_id: FORGE_CLIENT_ID,
            client_secret: FORGE_CLIENT_SECRET,
            grant_type: 'client_credentials',
            scope: 'data:read data:write bucket:create'
        })
    })
        .then((resp) => (resp.ok ? resp.json() : Promise.reject(resp)))
        .then((credentials) => {
            console.log('credentials ===> ', credentials)
            localStorage.setItem(
                'AUTODESK_ACCESS_TOKEN',
                credentials.access_token
            )
            callback(credentials.access_token, credentials.expires_in)
        })
        .catch((err) => {
            console.error(err)
            alert('Could not get access token. See console for more details.')
        })
}

/**
 * Initializes the runtime for communicating with the Model Derivative service, and creates a new instance of viewer.
 * @async
 * @param {HTMLElement} container Container that will host the viewer.
 * @param {object} config Additional configuration options for the new viewer instance.
 * @returns {Promise<Autodesk.Viewing.GuiViewer3D>} New viewer instance.
 */
export function initViewer(container, config) {
    return new Promise(function (resolve, reject) {
        Autodesk.Viewing.Initializer(
            { getAccessToken, env: 'AutodeskProduction', api: 'derivativeV2' },
            function () {
                const viewer = new Autodesk.Viewing.GuiViewer3D(
                    container,
                    config
                )
                viewer.start()
                resolve(viewer)
            }
        )
    })
}

export function createBucket(callback) {
    return fetch('https://developer.api.autodesk.com/oss/v2/buckets', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${localStorage.getItem(
                'AUTODESK_ACCESS_TOKEN'
            )}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            bucketKey: 'chenchanghao-bucket',
            policyKey: 'transient' // transient表示24小时失效，persistent表示永久
        })
    })
        .then((res) => res.json)
        .then((data) => {
            console.log('create bucket data ===> ', data)
            callback(data)
        })
        .catch((err) => {
            console.error(err)
            alert('Could not create bucket. See console for more details.')
        })
}

// 定义提交转换作业的函数
export function rvtTranslateScf() {
    console.log('base64 urn ===> ', btoa(BUCKET.objectId))
    // 构造请求URL和请求正文
    const url =
        'https://developer.api.autodesk.com/modelderivative/v2/designdata/job'
    const headers = new Headers({
        Authorization: `Bearer ${localStorage.getItem(
            'AUTODESK_ACCESS_TOKEN'
        )}`,
        'Content-Type': 'application/json'
    })
    const body = JSON.stringify({
        input: {
            urn: btoa(BUCKET.objectId)
        },
        output: {
            formats: [
                {
                    type: 'svf',
                    views: ['2d', '3d']
                }
            ]
        }
    })

    // 构造请求对象，包括URL、请求头部和请求正文
    const request = new Request(url, {
        method: 'POST',
        headers: headers,
        body: body
    })

    // 发送HTTP请求，并处理响应
    fetch(request)
        .then(function (response) {
            if (response.ok) {
                console.log(`提交转换作业成功：${response.status}`)
            } else {
                console.log(`提交转换作业错误：${response.status}`)
            }
        })
        .catch(function (error) {
            console.log(`提交转换作业错误：${error.message}`)
        })
}

// 定义上传文件的函数
export function uploadFile(file) {
    // 创建FormData对象，将文件内容添加到正文中
    const formData = new FormData()
    formData.append('file', file)

    // 构造请求对象，包括URL、请求头部和请求正文
    const url = `https://developer.api.autodesk.com/oss/v2/buckets/chenchanghao-bucket/objects/${file.name}`
    const headers = new Headers({
        Authorization: `Bearer ${localStorage.getItem(
            'AUTODESK_ACCESS_TOKEN'
        )}`,
        'Content-Type': 'application/octet-stream'
    })
    const request = new Request(url, {
        method: 'PUT',
        headers: headers,
        body: formData
    })

    // 发送HTTP请求，并处理响应
    fetch(request)
        .then(function (response) {
            if (response.ok) {
                console.log(`上传完成：${response.status}`)
            } else {
                console.log(`上传错误：${response.status}`)
            }
        })
        .catch(function (error) {
            console.log(`上传错误：${error.message}`)
        })
}

/**
 * Lists all models available for viewing.
 * @async
 * @returns {Promise<{ name: string, urn: string }>} List of models.
 */
export function listModels() {
    return fetch(`${APP_URL}/api/models`).then((resp) =>
        resp.ok ? resp.json() : Promise.reject(resp)
    )
}

/**
 * Loads specific model into the viewer.
 * @param {Autodesk.Viewing.GuiViewer3D} viewer Target viewer.
 * @param {string} urn URN of the model in the Model Derivative service.
 */
export function loadModel(viewer, urn) {
    Autodesk.Viewing.Document.load(
        `urn:${urn}`,
        (doc) =>
            viewer.loadDocumentNode(doc, doc.getRoot().getDefaultGeometry()),
        (code, message, errors) => {
            console.error('code ===> ', code)
            console.error('message ===> ', message)
            console.error('errors ===> ', errors)
            alert('Could not load model. See console for more details.')
        }
    )
}
