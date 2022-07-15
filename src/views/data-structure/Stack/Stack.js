/**
 * 栈 LIFO(last in first out) 后进先出
 * @type {{new(): {get(*): *, peek(): *, push(*): *, pop(): *}, prototype: {get(*): *, peek(): *, push(*): *, pop(): *}}}
 */
// eslint-disable-next-line symbol-description
// 使用闭包
// let Stack = (function () {
//     let weakMap = new WeakMap()
//     function Stack() {
//         weakMap.set(this, [])
//     }
//
//     Stack.prototype.get = function (index) {
//         return weakMap.get(this)[index]
//     }
//
//     // 向后追加
//     Stack.prototype.push = function (element) {
//         return weakMap.get(this).push(element)
//     }
//
//     // 移除栈顶元素
//     Stack.prototype.pop = function () {
//         return weakMap.get(this).pop()
//     }
//
//     // 返回栈顶元素
//     Stack.prototype.peek = function () {
//         return weakMap.get(this)[weakMap.get(this).length - 1]
//     }
//     return new Stack()
// })()

let Stack = (function () {
    let weakMap = new WeakMap()
    return class {
        constructor() {
            weakMap.set(this, [])
        }

        get(index) {
            return weakMap.get(this)[index]
        }

        // 尾部追加
        push(element) {
            return weakMap.get(this).push(element)
        }

        // 移除栈顶元素
        pop() {
            return weakMap.get(this).pop()
        }

        // 返回栈顶元素
        peek() {
            return weakMap.get(this)[weakMap.get(this).length - 1]
        }
    }
})()

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
let popVal = stack.pop()
let peekVal = stack.peek()
console.log(popVal, 'Stack items ', stack)

Object.keys(stack).forEach((key) => {
    console.log('Stack prop ... ', key)
})

console.log('peelVa ', peekVal)
console.log(stack.get(0))
console.log(stack.get(1))
console.log(stack.get(2))
console.log(stack.get(3))
