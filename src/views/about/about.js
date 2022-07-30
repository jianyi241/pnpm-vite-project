let simplifyStr = function (str) {
    const resultArr = []
    const strArr = str.split('')
    console.log('strArr ', strArr)
    strArr.forEach((i) => {
        const lastIdx = resultArr.length - 1
        if (resultArr.length && resultArr[lastIdx].includes(i)) {
            let num = resultArr[lastIdx].replace(i, '')
            num++
            resultArr[lastIdx] = i + num
        } else {
            resultArr.push(i + 1)
        }
    })
    return resultArr.join('')
}
console.log(
    '======================== 定义字面量函数 调用箭头函数指向 ========================'
)
const demo = {
    name: 'demo',
    func() {
        console.log('demo func', this)
    },
    funcArrow: () => {
        console.log('demo func ', this)
    }
}

demo.func()
demo.funcArrow()

console.log(
    '======================== 定义构造函数函数 调用箭头函数指向 ========================'
)
function Demo1() {
    this.name = 'Demo1'
    this.func = function (a, b) {
        console.log('Demo1 func ', this, `从${a}到${b}`)
    }
    this.funcArrow = () => {
        console.log('Demo1 func ', this)
    }
}

const demo1 = new Demo1()
demo1.func()
demo1.funcArrow()

console.log(
    '======================== 定义class 调用箭头函数指向 ========================'
)
class Demo2 {
    constructor() {
        this.name = 'Demo2'
    }

    func() {
        console.log('Demo2 func ', this)
    }

    funcArrow = () => {
        console.log('Demo2 func ', this)
    }
}

const demo2 = new Demo2()
demo2.func()
demo2.funcArrow()
console.log(
    '======================== apply、bind、call 改变this指向 ========================'
)
const demo1Call = demo1.func.call(demo2, '11', '22')
const demo1Apply = demo1.func.apply(demo, ['南京', '徐州'])
const demo1Bind = demo1.func.bind(demo2, '徐州', '南京')()
console.log('demo1Call ', demo1Call)
console.log('demo1Apply ', demo1Apply)
console.log('demo1Bind ', demo1Bind)
console.log('global this ', this)
