console.log('task start')

setTimeout(() => {
    console.log('timeout log')
}, 0)

const promise = new Promise((resolve, reject) => {
    console.log('promise start')
    resolve('promise123')
    console.log('promise end')
})
console.log('task mounted')
promise.then((res) => {
    console.log('promise result ', res)
})

setTimeout(() => {
    console.log('timeout log 222')
}, 100)

setTimeout(() => {
    console.log('timeout log 333')
}, 100)
console.log('task end')

let obj = {}

obj.name = '小明'

Object.observe(obj, function (res) {
    console.log('res ', res)
})
