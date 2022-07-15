// import { plus } from 'number-precision'

import { AccountType } from '../../model/enum/AccountType'

class About {
    static {
        console.log('init about', this)
    }
}

let aa = 'aa'
let aA = 'AA'

console.log('aa ', aa)
console.log('aA ', aA)

About.prototype.name = 'Tom'
const about = new About()
console.log('about ', about.name)
function agrFunc(a, b, c) {
    console.log('arguments ', arguments.length)
}

agrFunc('12345', 'b')

function Student() {
    console.log('init student func class', this)
    this.sayHi = function () {
        console.log(`My name is ${this.name}`)
    }
}
Student.prototype.name = 'David'
const student = new Student()
student.sayHi()

console.log('student object ', student)

// eslint-disable-next-line no-extend-native
Array.prototype.remove = function (val) {
    const index = this.findIndex(
        (i) => JSON.stringify(i) === JSON.stringify(val)
    )
    if (index === -1) {
        return false
    }
    this.splice(index, 1)
    return true
}

// let strArr = ['a', 'b', 'c']
// let numArr = [1, 2, 3, 4]
// let objArr = [
//     {
//         name: 'aaa',
//         gender: 1,
//         age: 18,
//         id: '235343432423434'
//     },
//     {
//         name: 'bbb',
//         gender: 0,
//         age: 22,
//         id: '44444444444444444'
//     },
//     {
//         name: 'ccc',
//         gender: 1,
//         age: 21,
//         id: '53532435453454354'
//     }
// ]
// strArr.remove('b')
// console.log('strArr ', strArr)
// numArr.remove(2)
// console.log('numArr ', numArr)
// objArr.remove(objArr[1])
//
// console.log('objArr ', objArr)

// const sum = plus(0, 1)
//
// const sum1 = plus(1, 2, 3, 4, 5, 6, 7)
//
// const sum2 = plus(0.1, 0.2)
// console.log('sum --- ', sum)
// console.log('sum1 --- ', sum1)
// console.log('sum2 --- ', sum2)

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

const strSimple = simplifyStr('aabbbbccccdhhhhhhhhhhhhhhhhhhhhhheeeeerrr')
console.log('simple str ', strSimple)

console.log('AccountType values -', AccountType.values())
console.log('AccountType email  -', AccountType.email.value)
console.log('AccountType mobile -', AccountType.mobile.value)
