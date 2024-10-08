// eslint-disable-next-line @typescript-eslint/no-var-requires
const APS = require('forge-apis')

const APS_CLIENT_ID = 'sRT0supMG3q5UHm5942AAZPwziptmPBM'
const APS_CLIENT_SECRET = 'KeEWMukfQzZ05pcB'
const APS_BUCKET = ''
let internalAuthClient = new APS.AuthClientTwoLegged(
    APS_CLIENT_ID,
    APS_CLIENT_SECRET,
    ['bucket:read', 'bucket:create', 'data:read', 'data:write', 'data:create'],
    true
)
let publicAuthClient = new APS.AuthClientTwoLegged(
    APS_CLIENT_ID,
    APS_CLIENT_SECRET,
    ['viewables:read'],
    true
)

const service = {}

service.getInternalToken = async () => {
    if (!internalAuthClient.isAuthorized()) {
        await internalAuthClient.authenticate()
    }
    return internalAuthClient.getCredentials()
}

service.getPublicToken = async () => {
    if (!publicAuthClient.isAuthorized()) {
        await publicAuthClient.authenticate()
    }
    return publicAuthClient.getCredentials()
}

service.ensureBucketExists = async (bucketKey) => {
    try {
        await new APS.BucketsApi().getBucketDetails(
            bucketKey,
            null,
            await service.getInternalToken()
        )
    } catch (err) {
        if (err.response.status === 404) {
            await new APS.BucketsApi().createBucket(
                { bucketKey, policyKey: 'temporary' },
                {},
                null,
                await service.getInternalToken()
            )
        } else {
            throw err
        }
    }
}

service.listObjects = async () => {
    await service.ensureBucketExists(APS_BUCKET)
    let resp = await new APS.ObjectsApi().getObjects(
        APS_BUCKET,
        { limit: 64 },
        null,
        await service.getInternalToken()
    )
    let objects = resp.body.items
    while (resp.body.next) {
        const startAt = new URL(resp.body.next).searchParams.get('startAt')
        // eslint-disable-next-line no-await-in-loop
        resp = await new APS.ObjectsApi().getObjects(
            APS_BUCKET,
            { limit: 64, startAt },
            null,
            // eslint-disable-next-line no-await-in-loop
            await service.getInternalToken()
        )
        objects = objects.concat(resp.body.items)
    }
    return objects
}

service.uploadObject = async (objectName, filePath) => {
    await service.ensureBucketExists(APS_BUCKET)
    const buffer = await fs.promises.readFile(filePath)
    const results = await new APS.ObjectsApi().uploadResources(
        APS_BUCKET,
        [{ objectKey: objectName, data: buffer }],
        { useAcceleration: false, minutesExpiration: 15 },
        null,
        await service.getInternalToken()
    )
    if (results[0].error) {
        throw results[0].completed
    } else {
        return results[0].completed
    }
}

service.translateObject = async (urn, rootFilename) => {
    const job = {
        input: { urn },
        output: { formats: [{ type: 'svf', views: ['2d', '3d'] }] }
    }
    if (rootFilename) {
        job.input.compressedUrn = true
        job.input.rootFilename = rootFilename
    }
    const resp = await new APS.DerivativesApi().translate(
        job,
        {},
        null,
        await service.getInternalToken()
    )
    return resp.body
}

service.getManifest = async (urn) => {
    try {
        const resp = await new APS.DerivativesApi().getManifest(
            urn,
            {},
            null,
            await service.getInternalToken()
        )
        return resp.body
    } catch (err) {
        if (err.response.status === 404) {
            return null
        }
        throw err
    }
}

service.urnify = (id) => Buffer.from(id).toString('base64').replace(/[=]/g, '')

export default service
