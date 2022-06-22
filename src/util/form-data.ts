interface Obj {
    [key: string]: any
}

export default function (obj: Obj): FormData {
    const formData = new FormData()
    Object.keys((key: string) => {
        formData.append(key, obj[key])
    })
    console.log('formData ', formData)
    return formData
}
