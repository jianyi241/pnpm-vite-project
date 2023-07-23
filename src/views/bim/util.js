export const APP_URL = 'https://aps-codepen.autodesk.io'
export const FORGE_CLIENT_ID = 'sRT0supMG3q5UHm5942AAZPwziptmPBM'
export const FORGE_CLIENT_SECRET = 'KeEWMukfQzZ05pcB'

export const DEMO_URN =
    'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXBzLWNvZGVwZW4tYmFja2VuZC8wMV9yYWNfYmFzaWNfc2FtcGxlX3Byb2plY3QucnZ0'

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
            scope: ['data:read', 'bucket:create', 'bucket:write'].join(',')
        })
    })
        .then((resp) => resp.json())
        .then((credentials) => {
            console.log('credentials ===> ', credentials)
            localStorage.setItem(
                'AUTODESK_ACCESS_TOKEN',
                credentials.access_token
            )
            return callback(credentials.access_token, credentials.expires_in)
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
        console.log('token ===> ', getAccessToken)
        window.Autodesk.Viewing.Initializer({ getAccessToken }, function () {
            const viewer = new window.Autodesk.Viewing.GuiViewer3D(
                container,
                config
            )
            viewer.start()
            resolve(viewer)
        })
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
            policyKey: 'transient'
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

/**
 * Lists all models available for viewing.
 * @async
 * @returns {Promise<{ name: string, urn: string }>} List of models.
 */
export function listModels() {
    return fetch('https://aps-codepen.autodesk.io/api/models').then((resp) =>
        resp.ok ? resp.json() : Promise.reject(resp)
    )
}

/**
 * Loads specific model into the viewer.
 * @param {Autodesk.Viewing.GuiViewer3D} viewer Target viewer.
 * @param {string} urn URN of the model in the Model Derivative service.
 */
export function loadModel(viewer, urn) {
    window.Autodesk.Viewing.Document.load(
        `urn:${urn}`,
        (doc) =>
            viewer.loadDocumentNode(doc, doc.getRoot().getDefaultGeometry()),
        (code, message, errors) => {
            console.error('load document error==> ', code, message, errors)
            //alert('Could not load model. See console for more details.')
        }
    )
}
