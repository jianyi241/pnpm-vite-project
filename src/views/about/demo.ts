// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { plus } from 'number-precision'

interface LabelledValue {
    label: string
    [propName: string]: any
}

function printLabel(labelledValue: LabelledValue): void {
    console.log('label info ', JSON.stringify(labelledValue))
}

printLabel({ label: '姓名', propValue: 123 })

console.log(
    'string search ',
    '12345678'.search('45'),
    ' --- ',
    '12345678'.indexOf('45'),
    ' --- ',
    '12345678'.includes('45')
)

interface CalcFunc {
    (a: number, b: number): number
}

let calcFunc: CalcFunc = function (num1, num2): number {
    return plus(num1, num2)
}

console.log('calcFunc result ', calcFunc(0.1, 0.2))
