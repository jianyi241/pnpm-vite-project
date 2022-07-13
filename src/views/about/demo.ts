// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
interface LabelledValue {
    label: string
    [propName: string]: any
}

function printLabel(labelledValue: LabelledValue): void {
    console.log('label info ', JSON.stringify(labelledValue))
}

printLabel({ label: '姓名', propValue: 123 })
